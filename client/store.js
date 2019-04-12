import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
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
  },
  getters: {
    getUserData: state => state.userData,
    getLoggedIn: state => state.loggedIn,
    getRegisterStep: state => state.registerStep,
    getCategories: state => map(state.categories, category => category.displayName),
    getSkills: state => state.skills,
  },
  mutations: {
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
    GET_SKILLS: (state, payload) => {
      state.skills = payload;
    },
  },
  actions: {
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
  },
});
