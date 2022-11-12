export default {
  namespaced: true,
  state: {
    token: sessionStorage.getItem("access-token"),
    user: {
      id: sessionStorage.getItem("user-id"),
      name: sessionStorage.getItem("user-name"),
    },
  },
  getters: {
    id(state) {
      return state.user.id;
    },

    name(state) {
      return state.user.name;
    },

    token(state) {
      return state.token;
    },

    hasToken(state) {
      return !!state.token;
    },
  },
  mutations: {
    setId(state, id) {
      state.id = id;
      sessionStorage.setItem("user-id", id);
    },
    setName(state, name) {
      state.user.name = name;
      sessionStorage.setItem("user-name", name);
    },
    setToken(state, token) {
      state.token = token;
      sessionStorage.setItem("access-token", token);
    },
  },
  actions: {
    setId({ commit }, id) {
      commit("setId", id);
    },
    setName(context, name) {
      context.commit("setName", name);
    },
    setToken({ commit }, token) {
      commit("setToken", token);
    },

    initUser({ commit }) {
      commit("setId", "");
      commit("setToken", "");
      commit("setName", "");
    },
  },
};
