import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    message: "",
  },
  getters: {
    formCnt(state) {
      return String(state.count).padStart(2, "0");
    },

    message(state) {
      return state.message;
    },
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    changeMessage(state, value) {
      state.message = value;
    },
  },
  actions: {
    increase(context) {
      context.commit("increase");
    },
    decrease(context) {
      context.commit("decrease");
    },
    changeMessage(context, value) {
      context.commit("changeMessage", value);
    },
  },
  modules: {
    user,
  },
});
