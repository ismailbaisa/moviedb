import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = "https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies";

export default new Vuex.Store({
  state: {
    movies: [],
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
  },
  mutations: {
    SET_MOVIES(state, payload) {
      state.movies = payload;
    },
  },
  actions: {
    async loadMovies({ commit }) {
      try {
        const res = await axios.get(BASE_URL);
        commit("SET_MOVIES", res.data);
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
