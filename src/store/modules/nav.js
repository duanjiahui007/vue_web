const state = {
  headrePath: "/"
};

const mutations = {
  setHeaderPath(state, data) {
    state.headrePath = data;
  }
};

const actions = {
  AsyncHeaderPath({ commit }, data) {
    commit("setHeaderPath", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
