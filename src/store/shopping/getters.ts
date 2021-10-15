import { GetterTree } from "vuex";

import { GETTERS } from "@/enums/shopping";

import { StateRoot } from "@/store/types";
import { ShoppingGetters } from "@/store/shopping/types";
import { Product, TotalDiscountItem } from "@/domain/checkout/checkout.types";

const getters: GetterTree<StateRoot, StateRoot> & ShoppingGetters = {
  /**
   * Products
   *
   * @param {StateRoot} state - The root state
   * @returns {Product[]}
   */
  [GETTERS.PRODUCTS]: (state: StateRoot): Product[] => state.products,

  /**
   * Total cost
   *
   * @param {StateRoot} state - The root state
   * @returns {number}
   */
  [GETTERS.TOTAL_COST]: (state: StateRoot): number => state.summary.totalCost,

  /**
   * Total items
   *
   * @param {StateRoot} state - The root state
   * @returns {number}
   */
  [GETTERS.TOTAL_ITEMS]: (state: StateRoot): number => state.summary.totalItems,

  /**
   * Discounts applied
   *
   * @param {StateRoot} state - The root state
   * @returns {string[]}
   */
  [GETTERS.DISCOUNTS_APPLIED]: (state: StateRoot): TotalDiscountItem[] =>
    state.summary.discountsApplied,

  /**
   * Total cost with discounts
   *
   * @param {StateRoot} state - The root state
   * @returns {number}
   */
  [GETTERS.TOTAL_COST_WITH_DISCOUNTS]: (state: StateRoot): number =>
    state.summary.totalCostWithDiscounts,

  /**
   * Check if the shopping cart has total cost
   *
   * @param {StateRoot} state - The root state
   * @returns {boolean}
   */
  [GETTERS.HAS_TOTAL_COST]: (state: StateRoot): boolean =>
    state.summary.totalCostWithDiscounts > 0,

  /**
   * Check if the shopping cart has discounts applied
   *
   * @param {StateRoot} state - The root state
   * @returns {boolean}
   */
  [GETTERS.HAS_DISCOUNTS_APPLIED]: (state: StateRoot): boolean =>
    state.summary.discountsApplied.length > 0
};

export default getters;
