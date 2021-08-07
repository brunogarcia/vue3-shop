import { StateShopping, Product, TotalDiscountItem } from "@/types";

/**
 * Products
 *
 * @param {StateShopping} state - The shopping module state
 * @returns {Product[]}
 */
const products = (state: StateShopping): Product[] => state.products;

/**
 * Total cost
 *
 * @param {StateShopping} state - The shopping module state
 * @returns {number}
 */
const totalCost = (state: StateShopping): number => state.summary.totalCost;

/**
 * Total items
 *
 * @param {StateShopping} state - The shopping module state
 * @returns {number}
 */
const totalItems = (state: StateShopping): number => state.summary.totalItems;

/**
 * Discounts applied
 *
 * @param {StateShopping} state - The shopping module state
 * @returns {string[]}
 */
const discountsApplied = (state: StateShopping): TotalDiscountItem[] =>
  state.summary.discountsApplied;

/**
 * Total cost with discounts
 *
 * @param {StateShopping} state - The shopping module state
 * @returns {number}
 */
const totalCostWithDiscounts = (state: StateShopping): number =>
  state.summary.totalCostWithDiscounts;

/**
 * Check if the shopping cart has total cost
 *
 * @param {StateShopping} state - The shopping module state
 * @returns {boolean}
 */
const hasTotalCost = (state: StateShopping): boolean =>
  state.summary.totalCostWithDiscounts > 0;

/**
 * Check if the shopping cart has discounts applied
 *
 * @param {StateShopping} state - The shopping module state
 * @returns {boolean}
 */
const hasDiscountsApplied = (state: StateShopping): boolean =>
  state.summary.discountsApplied.length > 0;

export default {
  products,
  totalCost,
  totalItems,
  discountsApplied,
  totalCostWithDiscounts,
  hasTotalCost,
  hasDiscountsApplied
};
