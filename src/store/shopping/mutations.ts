import { State, Product, TotalDiscountItem } from "@/types";
import MutationType from "@/store/shopping/utils/mutation_type";

const {
  SAVE_PRODUCTS,
  SAVE_TOTAL_COST,
  SAVE_TOTAL_ITEMS,
  SAVE_DISCOUNTS_APPLIED,
  SAVE_TOTAL_COST_WITH_DISCOUNTS
} = MutationType;

export default {
  [SAVE_PRODUCTS](state: State, payload: Product[]) {
    state.products = payload;
  },

  [SAVE_TOTAL_COST](state: State, payload: number) {
    state.summary.totalCost = payload;
  },

  [SAVE_TOTAL_ITEMS](state: State, payload: number) {
    state.summary.totalItems = payload;
  },

  [SAVE_DISCOUNTS_APPLIED](state: State, payload: TotalDiscountItem[]) {
    state.summary.discountsApplied = payload;
  },

  [SAVE_TOTAL_COST_WITH_DISCOUNTS](state: State, payload: number) {
    state.summary.totalCostWithDiscounts = payload;
  }
};
