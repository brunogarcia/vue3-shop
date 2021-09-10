import { Module } from "vuex";
import initialState from "@/store/shopping/initialState";
import actions from "@/store/shopping/actions";
import getters from "@/store/shopping/getters";
import mutations from "@/store/shopping/mutations";
import { StateRoot, StateShopping } from "@/types";

const module: Module<StateShopping, StateRoot> = {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters
};

export default module;
