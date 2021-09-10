import SHOPPING_MUTATION from "@/enums/shopping";
import { StateShopping, Product, TotalDiscountItem } from "@/types";
import { MutationTree } from "vuex";

const {
  SAVE_PRODUCTS,
  SAVE_TOTAL_COST,
  SAVE_TOTAL_ITEMS,
  SAVE_DISCOUNTS_APPLIED,
  SAVE_TOTAL_COST_WITH_DISCOUNTS
} = SHOPPING_MUTATION;

const mutations: MutationTree<StateShopping> = {
  [SAVE_PRODUCTS](state: StateShopping, payload: Product[]) {
    state.products = payload;
  },

  [SAVE_TOTAL_COST](state: StateShopping, payload: number) {
    state.summary.totalCost = payload;
  },

  [SAVE_TOTAL_ITEMS](state: StateShopping, payload: number) {
    state.summary.totalItems = payload;
  },

  [SAVE_DISCOUNTS_APPLIED](state: StateShopping, payload: TotalDiscountItem[]) {
    state.summary.discountsApplied = payload;
  },

  [SAVE_TOTAL_COST_WITH_DISCOUNTS](state: StateShopping, payload: number) {
    state.summary.totalCostWithDiscounts = payload;
  }
};

export default mutations;
