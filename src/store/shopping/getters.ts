import { State, Product, TotalDiscountItem } from "@/types";

/**
 * Products
 *
 * @param {State} state - The shopping module state
 * @returns {Product[]}
 */
const products = (state: State): Product[] => state.products;

/**
 * Total cost
 *
 * @param {State} state - The shopping module state
 * @returns {number}
 */
const totalCost = (state: State): number => state.summary.totalCost;

/**
 * Total items
 *
 * @param {State} state - The shopping module state
 * @returns {number}
 */
const totalItems = (state: State): number => state.summary.totalItems;

/**
 * Discounts applied
 *
 * @param {State} state - The shopping module state
 * @returns {string[]}
 */
const discountsApplied = (state: State): TotalDiscountItem[] =>
  state.summary.discountsApplied;

/**
 * Total cost with discounts
 *
 * @param {State} state - The shopping module state
 * @returns {number}
 */
const totalCostWithDiscounts = (state: State): number =>
  state.summary.totalCostWithDiscounts;

export default {
  products,
  totalCost,
  totalItems,
  discountsApplied,
  totalCostWithDiscounts
};
