import { ActionContext, ActionTree } from "vuex";

import { DiscountRule } from "@/domain/discount-rules/discount.rules.types";
import DiscountRulesService from "@/domain/discount-rules/discount.rules.service";

import CheckoutService from "@/domain/checkout/checkout.service";
import {
  Product,
  PricingRule,
  PRODUCT_CODE
} from "@/domain/checkout/checkout.types";

import http from "@/infrastructure/http";
import { StateRoot } from "@/infrastructure/store/store.types";
import {
  ACTIONS,
  MUTATION,
  ShoppingActions
} from "@/infrastructure/store/shopping/shopping.types";

let checkoutService: CheckoutService;
const discountRulesService = new DiscountRulesService();

const actions: ActionTree<StateRoot, StateRoot> & ShoppingActions = {
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
      const products: Product[] = await http.products();

      const pricingRules: PricingRule[] = products.map(product => ({
        code: product.code,
        price: product.price,
        discounts: product.discounts
      }));

      const discountRules: DiscountRule[] = discountRulesService.getRules();

      commit(MUTATION.SAVE_PRODUCTS, products);

      checkoutService = new CheckoutService(pricingRules, discountRules);
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
      checkoutService.scan(code);

      commit(MUTATION.SAVE_TOTAL_COST, checkoutService.getTotalCost());
      commit(MUTATION.SAVE_TOTAL_ITEMS, checkoutService.getTotalItems());
      commit(
        MUTATION.SAVE_TOTAL_COST_WITH_DISCOUNTS,
        checkoutService.getTotalCostWithDiscounts()
      );
      commit(
        MUTATION.SAVE_DISCOUNTS_APPLIED,
        checkoutService.getDiscountsApplied()
      );
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
      checkoutService.remove(code);

      commit(MUTATION.SAVE_TOTAL_COST, checkoutService.getTotalCost());
      commit(MUTATION.SAVE_TOTAL_ITEMS, checkoutService.getTotalItems());
      commit(
        MUTATION.SAVE_TOTAL_COST_WITH_DISCOUNTS,
        checkoutService.getTotalCostWithDiscounts()
      );
      commit(
        MUTATION.SAVE_DISCOUNTS_APPLIED,
        checkoutService.getDiscountsApplied()
      );
    } catch (error) {
      // TODO: send to error monitoring service (eg: Sentry)
      throw new Error(
        "Sorry, there was an issue when trying to remove a product"
      );
    }
  }
};

export default actions;
