import { StoreOptions } from "vuex";

import { StateRoot } from "@/infrastructure/store/store.types";

import initialState from "@/infrastructure/store/shopping/initialState";
import actions from "@/infrastructure/store/shopping/actions";
import getters from "@/infrastructure/store/shopping/getters";
import mutations from "@/infrastructure/store/shopping/mutations";

const Shopping: StoreOptions<StateRoot> = {
  strict: true,
  state: initialState,
  actions,
  mutations,
  getters
};

export default Shopping;
