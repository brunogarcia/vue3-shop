import { ActionContext, ActionTree } from "vuex";
import API from "@/api";
import PRODUCT_CODE from "@/enums/product";
import Checkout from "@/middleware/checkout";
import { Actions } from "@/store/shopping/types";
import { ACTIONS, MUTATION } from "@/enums/shopping";
import { Product, PricingRule, StateRoot } from "@/types";

let checkout: Checkout;

const actions: ActionTree<StateRoot, StateRoot> & Actions = {
  /**
   * Init shopping cart
   *
   * @param {Function} commit from Vuex
   */
  [ACTIONS.INIT_SHOPPING_CART]: async (
    context: ActionContext<StateRoot, StateRoot>
  ) => {
    const { commit } = context;

    try {
      const products: Product[] = await API.products();

      const pricingRules: PricingRule[] = products.map(product => ({
        code: product.code,
        price: product.price,
        discounts: product.discounts
      }));

      commit(MUTATION.SAVE_PRODUCTS, products);

      checkout = new Checkout(pricingRules);
    } catch (error) {
      // TODO: send to error monitoring service (eg: Sentry)
      throw new Error("Sorry, there was an issue when trying to init the shop");
    }
  },

  /**
   * Scan product
   *
   * @param {ActionContext} context - Vuex Action Context
   * @param {PRODUCT} code - The product code
   */
  [ACTIONS.SCAN_PRODUCT]: (
    { commit }: ActionContext<StateRoot, StateRoot>,
    code: PRODUCT_CODE
  ) => {
    try {
      checkout.scan(code);

      commit(MUTATION.SAVE_TOTAL_COST, checkout.getTotalCost());
      commit(MUTATION.SAVE_TOTAL_ITEMS, checkout.getTotalItems());
      commit(
        MUTATION.SAVE_TOTAL_COST_WITH_DISCOUNTS,
        checkout.getTotalCostWithDiscounts()
      );
      commit(MUTATION.SAVE_DISCOUNTS_APPLIED, checkout.getDiscountsApplied());
    } catch (error) {
      // TODO: send to error monitoring service (eg: Sentry)
      console.log(error);
      throw new Error("Sorry, there was an issue when a product was scanned");
    }
  },

  /**
   * Remove product
   *
   * @param {ActionContext} context - Vuex Action Context
   * @param {PRODUCT} code - The product code
   */
  [ACTIONS.REMOVE_PRODUCT]: (
    { commit }: ActionContext<StateRoot, StateRoot>,
    code: PRODUCT_CODE
  ) => {
    try {
      checkout.remove(code);

      commit(MUTATION.SAVE_TOTAL_COST, checkout.getTotalCost());
      commit(MUTATION.SAVE_TOTAL_ITEMS, checkout.getTotalItems());
      commit(
        MUTATION.SAVE_TOTAL_COST_WITH_DISCOUNTS,
        checkout.getTotalCostWithDiscounts()
      );
      commit(MUTATION.SAVE_DISCOUNTS_APPLIED, checkout.getDiscountsApplied());
    } catch (error) {
      // TODO: send to error monitoring service (eg: Sentry)
      throw new Error(
        "Sorry, there was an issue when trying to remove a product"
      );
    }
  }
};

export default actions;
