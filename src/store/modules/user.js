export default {
  namespaced: true,
  state: {
    name: "홍길동",
    id: "hong123",
  },
  getters: {
    name(state) {
      return state.name;
    },

    id(state) {
      return state.id;
    },
  },
  mutations: {},
  actions: {},
};
