import initialState from "@/store/modal/initialState";
import actions from "@/store/modal/actions";
import getters from "@/store/modal/getters";
import mutations from "@/store/modal/mutations";

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters
};
