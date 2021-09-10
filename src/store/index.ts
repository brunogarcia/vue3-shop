import { ModuleTree, StoreOptions } from "vuex";
import shopping from "@/store/shopping";
import { StateRoot, StateShopping } from "@/types";

const modules: ModuleTree<StateRoot> = {
  shopping
};

const store: StoreOptions<StateShopping> = {
  strict: true,
  modules
};

export default store;
