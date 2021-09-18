import { MUTATION } from "@/enums/shopping";
import { Mutations } from "@/store/shopping/types";
import { StateRoot, Product, TotalDiscountItem } from "@/types";
import { MutationTree } from "vuex";

const mutations: MutationTree<StateRoot> & Mutations = {
  [MUTATION.SAVE_PRODUCTS](state: StateRoot, payload: Product[]) {
    state.products = payload;
  },

  [MUTATION.SAVE_TOTAL_COST](state: StateRoot, payload: number) {
    state.summary.totalCost = payload;
  },

  [MUTATION.SAVE_TOTAL_ITEMS](state: StateRoot, payload: number) {
    state.summary.totalItems = payload;
  },

  [MUTATION.SAVE_DISCOUNTS_APPLIED](
    state: StateRoot,
    payload: TotalDiscountItem[]
  ) {
    state.summary.discountsApplied = payload;
  },

  [MUTATION.SAVE_TOTAL_COST_WITH_DISCOUNTS](state: StateRoot, payload: number) {
    state.summary.totalCostWithDiscounts = payload;
  }
};

export default mutations;
