import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { sha256 } from 'hash.js';

import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    loggedIn: false,
  },
  getters: {
    getUserData: state => state.userData,
    getLoggedIn: state => state.loggedIn,
  },
  mutations: {
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
  },
  actions: {
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
  },
});
