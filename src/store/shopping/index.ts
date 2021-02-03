import initialState from "@/store/shopping/initialState";
import getters from "@/store/shopping/getters";
import mutations from "@/store/shopping/mutations";

export default {
  namespaced: true,
  state: initialState(),
  actions: {},
  mutations,
  getters
};
