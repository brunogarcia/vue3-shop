import { StoreOptions } from "vuex";
import { StateRoot } from "@/types";
import initialState from "@/store/shopping/initialState";
import actions from "@/store/shopping/actions";
import getters from "@/store/shopping/getters";
import mutations from "@/store/shopping/mutations";

const Shopping: StoreOptions<StateRoot> = {
  strict: true,
  state: initialState,
  actions,
  mutations,
  getters
};

export default Shopping;
