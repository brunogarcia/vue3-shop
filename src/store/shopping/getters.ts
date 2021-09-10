import { GetterTree } from "vuex";
import { StateShopping, Product, TotalDiscountItem, StateRoot } from "@/types";

const getters: GetterTree<StateShopping, StateRoot> = {
  /**
   * Products
   *
   * @param {StateShopping} state - The shopping module state
   * @returns {Product[]}
   */
  products: (state: StateShopping): Product[] => state.products,

  /**
   * Total cost
   *
   * @param {StateShopping} state - The shopping module state
   * @returns {number}
   */
  totalCost: (state: StateShopping): number => state.summary.totalCost,

  /**
   * Total items
   *
   * @param {StateShopping} state - The shopping module state
   * @returns {number}
   */
  totalItems: (state: StateShopping): number => state.summary.totalItems,

  /**
   * Discounts applied
   *
   * @param {StateShopping} state - The shopping module state
   * @returns {string[]}
   */
  discountsApplied: (state: StateShopping): TotalDiscountItem[] =>
    state.summary.discountsApplied,

  /**
   * Total cost with discounts
   *
   * @param {StateShopping} state - The shopping module state
   * @returns {number}
   */
  totalCostWithDiscounts: (state: StateShopping): number =>
    state.summary.totalCostWithDiscounts,

  /**
   * Check if the shopping cart has total cost
   *
   * @param {StateShopping} state - The shopping module state
   * @returns {boolean}
   */
  hasTotalCost: (state: StateShopping): boolean =>
    state.summary.totalCostWithDiscounts > 0,

  /**
   * Check if the shopping cart has discounts applied
   *
   * @param {StateShopping} state - The shopping module state
   * @returns {boolean}
   */
  hasDiscountsApplied: (state: StateShopping): boolean =>
    state.summary.discountsApplied.length > 0
};

export default getters;
