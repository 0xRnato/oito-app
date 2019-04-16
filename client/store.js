import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import moment from 'moment';
import { sha256 } from 'hash.js';
import { map, find } from 'lodash';

import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    loggedIn: false,
    registerStep: 1,
    categories: [],
    skills: [],
    profileButton: true,
    offersEmployerByUser: [],
    offersEmployeeByUser: [],
    offersEmployerAll: [],
    offersEmployeeAll: [],
    proposes: [],
  },
  getters: {
    getProposes: state => state.proposes,
    getOffersEmployerByUser: state => state.offersEmployerByUser,
    getOffersEmployeeByUser: state => state.offersEmployeeByUser,
    getOffersEmployerAll: state => state.offersEmployerAll,
    getOffersEmployeeAll: state => state.offersEmployeeAll,
    getUserData: state => state.userData,
    getLoggedIn: state => state.loggedIn,
    getRegisterStep: state => state.registerStep,
    getCategories: state => map(state.categories, category => category.displayName),
    getSkills: state => state.skills,
    getCategoryName: state => categoryId => find(state.categories, ['_id', categoryId]).displayName,
    getUserSkills: state => (userSkills) => {
      if (!!userSkills && userSkills.length > 0 && state.skills.length > 0) {
        return map(userSkills, _skill => find(state.skills, ['name', _skill]).displayName);
      }
      return [];
    },
    getProfileButton: state => state.profileButton,
  },
  mutations: {
    GET_OFFERS_EMPLOYER_USER: (state, payload) => {
      if (payload.status === 'success') {
        state.offersEmployerByUser = payload.data;
      } else {
        console.error(payload);
      }
    },
    GET_OFFERS_EMPLOYEE_USER: (state, payload) => {
      if (payload.status === 'success') {
        state.offersEmployeeByUser = payload.data;
      } else {
        console.error(payload);
      }
    },
    GET_OFFERS_EMPLOYER_ALL: (state, payload) => {
      if (payload.status === 'success') {
        state.offersEmployerAll = payload.data;
      } else {
        console.error(payload);
      }
    },
    GET_OFFERS_EMPLOYEE_ALL: (state, payload) => {
      if (payload.status === 'success') {
        state.offersEmployeeAll = payload.data;
      } else {
        console.error(payload);
      }
    },
    CHANGE_PROFILE_BUTTOM: (state) => {
      state.profileButton = !state.profileButton;
    },
    NEXT_STEP_REGISTER: (state) => {
      state.registerStep += 1;
    },
    FINISH_REGISTER: (state) => {
      router.push('/profile');
      state.registerStep = 1;
      state.categories = [];
      state.skills = [];
    },
    LOGIN: (state, payload) => {
      if (payload.status === 'success') {
        window.$cookies.set('access_token', payload.data.accessToken);
        state.loggedIn = true;
        router.push('/profile');
      } else {
        console.error(payload);
      }
    },
    LOGOUT: (state, payload) => {
      if (payload.status === 'success') {
        window.$cookies.remove('access_token');
        state.loggedIn = false;
        router.push('/');
      } else {
        console.error(payload);
      }
    },
    REGISTER_USER: (state, payload) => {
      if (payload.status === 'success') {
        window.$cookies.set('access_token', payload.data.accessToken);
        state.loggedIn = true;
      } else {
        console.error(payload);
      }
    },
    GET_CATEGORIES: (state, payload) => {
      if (payload.status === 'success') {
        state.categories = payload.data;
      } else {
        console.error(payload);
      }
    },
    GET_USER_DATA: (state, payload) => {
      if (payload.status === 'success') {
        state.userData = payload.data;
        state.userData.birthdate = moment(state.userData.birthdate.toString()).format('DD/MM/YYYY');
      } else {
        console.error(payload);
      }
    },
    GET_SKILLS: (state, payload) => {
      state.skills = payload;
    },
    GET_PROPOSE: (state, payload) => {
      if (payload.status === 'success') {
        state.proposes = payload.data;
      } else {
        console.error(payload);
      }
    },
  },
  actions: {
    async actionCreateOffer({ dispatch }, data) {
      await axios({
        method: 'post',
        url: '/api/v1/offer',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
        data: {
          ...data,
        },
      });
      if (data.type === 'EMPLOYER') {
        dispatch('actionOffersEmployerByUser');
      } else if (data.type === 'EMPLOYEE') {
        dispatch('actionOffersEmployeeByUser');
      }
    },
    async actionOffersEmployerByUser({ commit }) {
      const response = await axios({
        method: 'get',
        url: '/api/v1/offer/employer',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
      });
      commit('GET_OFFERS_EMPLOYER_USER', response.data);
    },
    async actionOffersEmployeeByUser({ commit }) {
      const response = await axios({
        method: 'get',
        url: '/api/v1/offer/employee',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
      });
      commit('GET_OFFERS_EMPLOYEE_USER', response.data);
    },
    async actionOffersEmployerAll({ commit }) {
      const response = await axios({
        method: 'get',
        url: '/api/v1/offer/employer/all',
      });
      commit('GET_OFFERS_EMPLOYER_ALL', response.data);
    },
    async actionOffersEmployeeAll({ commit }) {
      const response = await axios({
        method: 'get',
        url: '/api/v1/offer/employee/all',
      });
      commit('GET_OFFERS_EMPLOYEE_ALL', response.data);
    },
    actionNextStepRegister({ commit }) {
      commit('NEXT_STEP_REGISTER');
    },
    async actionLogin({ commit }, { email, password }) {
      password = sha256()
        .update(password)
        .digest('hex');
      const response = await axios({
        method: 'get',
        url: '/api/v1/user/login',
        auth: {
          username: email,
          password,
        },
      });
      commit('LOGIN', response.data);
    },
    async actionLogout({ commit }) {
      const response = await axios({
        method: 'get',
        url: '/api/v1/user/logout',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
      });
      commit('LOGOUT', response.data);
    },
    async actionRegisterUser({ commit, dispatch }, { email, password, documentNumber }) {
      password = sha256()
        .update(password)
        .digest('hex');
      const response = await axios({
        method: 'post',
        url: '/api/v1/user',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
        data: {
          email,
          password,
          documentNumber,
        },
      });
      if (response.data.status === 'success') {
        commit('REGISTER_USER', response.data);
        dispatch('actionNextStepRegister');
      }
    },
    async actionUpdateUserRegister({ dispatch }, data) {
      if (data.password) {
        data.password = sha256()
          .update(data.password)
          .digest('hex');
      }
      const response = await axios({
        method: 'patch',
        url: '/api/v1/user',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
        data: {
          ...data,
        },
      });
      if (response.data.status === 'success') {
        dispatch('actionNextStepRegister');
      }
    },
    async actionUpdateUserProfile({ commit, dispatch }, data) {
      const response = await axios({
        method: 'patch',
        url: '/api/v1/user',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
        data: {
          ...data,
        },
      });
      if (response.data.status === 'success') {
        dispatch('actionGetUserData');
        commit('CHANGE_PROFILE_BUTTOM');
      }
    },
    actionChangeProfileButton({ commit }) {
      commit('CHANGE_PROFILE_BUTTOM');
    },
    async actionFinishUserRegister({ commit }, data) {
      if (data.category && data.skills && data.skills.length > 0) {
        // eslint-disable-next-line no-underscore-dangle
        data.category = find(this.state.categories, ['displayName', data.category])._id;
        const response = await axios({
          method: 'patch',
          url: '/api/v1/user',
          headers: {
            Authorization: `bearer ${window.$cookies.get('access_token')}`,
          },
          data: {
            ...data,
          },
        });
        if (response.data.status === 'success') {
          commit('FINISH_REGISTER');
        }
      } else {
        commit('FINISH_REGISTER');
      }
    },
    async actionGetCategories({ commit }) {
      const response = await axios({
        method: 'get',
        url: '/api/v1/category',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
      });
      commit('GET_CATEGORIES', response.data);
    },
    actionGetSkills({ commit }, categoryName) {
      const skills = map(
        find(this.state.categories, ['displayName', categoryName]).skills,
        skill => skill,
      );
      commit('GET_SKILLS', skills);
    },
    actionGetSkillsById({ commit }, categoryId) {
      const skills = map(find(this.state.categories, ['_id', categoryId]).skills, skill => skill);
      commit('GET_SKILLS', skills);
    },
    async actionGetUserData({ commit }) {
      const response = await axios({
        method: 'get',
        url: '/api/v1/user',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
      });
      commit('GET_USER_DATA', response.data);
    },
    async actionCreatePropose({ commit }, data) {
      await axios({
        method: 'post',
        url: '/api/v1/propose',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
        data,
      });
    },
    async actionGetPropose({ commit }) {
      const response = await axios({
        method: 'get',
        url: '/api/v1/propose',
        headers: {
          Authorization: `bearer ${window.$cookies.get('access_token')}`,
        },
      });
      commit('GET_PROPOSE', response.data);
    },
  },
});
