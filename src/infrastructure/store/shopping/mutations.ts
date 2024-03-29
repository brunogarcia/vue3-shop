import { MutationTree } from "vuex";

import { Product, TotalDiscountItem } from "@/domain/checkout/checkout.types";

import { StateRoot } from "@/infrastructure/store/store.types";
import {
  ShoppingMutations,
  MUTATION
} from "@/infrastructure/store/shopping/shopping.types";

const mutations: MutationTree<StateRoot> & ShoppingMutations = {
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
