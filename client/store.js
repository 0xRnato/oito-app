import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const defaultSelectedImage = {
  image: null,
  likes: null,
  downloads: null,
  description: null,
  user: {
    name: null,
    username: null,
    instagram: null,
    twitter: null,
    bio: null,
    image: null,
  },
};

export default new Vuex.Store({
  state: {
    imageList: [],
    selectedImage: defaultSelectedImage,
    searchHistory: [],
    searchKeyword: null,
  },
  getters: {
    getImageList: state => state.imageList,
    getSelectedImage: state => state.selectedImage,
    getSearchHistory: state => state.searchHistory,
    getSearchKeyword: state => state.searchKeyword,
  },
  mutations: {
    GET_PHOTOS: (state, payload) => {
      state.imageList = payload.data;
      state.selectedImage = defaultSelectedImage;
      state.searchKeyword = null;
    },
    GET_SELECTED_PHOTO: (state, payload) => {
      state.selectedImage = payload.data;
    },
    UPDATE_SEARCH_HISTORY: (state, payload) => {
      state.searchHistory.push(payload);
      state.searchKeyword = payload;
    },
  },
  actions: {
    async actionGetPhotos({ commit }) {
      const response = await axios.get('/api/v1/photo');
      commit('GET_PHOTOS', response.data);
    },
    async actionSearchPhotos({ commit }, keyword) {
      const response = await axios.get(`/api/v1/photo/search?keyword=${keyword}`);
      commit('GET_PHOTOS', response.data);
      commit('UPDATE_SEARCH_HISTORY', keyword);
    },
    async actionGetSelectedImage({ commit }, id) {
      const response = await axios.get(`/api/v1/photo/${id}`);
      commit('GET_SELECTED_PHOTO', response.data);
    },
  },
});
