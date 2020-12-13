import { getStrong, setStrong } from "@/utils/localstrong.js";
const state = {
  headrePath: getStrong() ? getStrong() : "home"
};

const mutations = {
  setHeaderPath(state, data) {
    state.headrePath = data;
  }
};

const actions = {
  AsyncHeaderPath({ commit }, data) {
    setStrong(data);
    commit("setHeaderPath", data);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
