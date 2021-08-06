import { ActionContext } from "vuex";
import API from "@/api";
import PRODUCT_CODE from "@/enums/product";
import Checkout from "@/middleware/checkout";
import { Product, PricingRule, State, StateShopping } from "@/types";
import MutationType from "@/store/shopping/utils/mutation_type";

let checkout: Checkout;

const {
  SAVE_PRODUCTS,
  SAVE_TOTAL_COST,
  SAVE_TOTAL_ITEMS,
  SAVE_DISCOUNTS_APPLIED,
  SAVE_TOTAL_COST_WITH_DISCOUNTS
} = MutationType;

/**
 * Init shopping cart
 *
 * @param {Function} commit from Vuex
 */
async function initShoppingCart({
  commit
}: ActionContext<StateShopping, State>) {
  try {
    const products: Product[] = await API.products();

    const pricingRules: PricingRule[] = products.map(product => ({
      code: product.code,
      price: product.price,
      discounts: product.discounts
    }));

    commit(SAVE_PRODUCTS, products);

    checkout = new Checkout(pricingRules);
  } catch (error) {
    // TODO: send to error monitoring service (eg: Sentry)
    throw new Error("Sorry, there was an issue when trying to init the shop");
  }
}

/**
 * Scan product
 *
 * @param {ActionContext} context - Vuex Action Context
 * @param {PRODUCT} code - The product code
 */
function scanProduct(
  { commit }: ActionContext<StateShopping, State>,
  code: PRODUCT_CODE
) {
  try {
    checkout.scan(code);

    commit(SAVE_TOTAL_COST, checkout.getTotalCost());
    commit(SAVE_TOTAL_ITEMS, checkout.getTotalItems());
    commit(
      SAVE_TOTAL_COST_WITH_DISCOUNTS,
      checkout.getTotalCostWithDiscounts()
    );
    commit(SAVE_DISCOUNTS_APPLIED, checkout.getDiscountsApplied());
  } catch (error) {
    // TODO: send to error monitoring service (eg: Sentry)
    throw new Error("Sorry, there was an issue when a product was scanned");
  }
}

/**
 * Remove product
 *
 * @param {ActionContext} context - Vuex Action Context
 * @param {PRODUCT} code - The product code
 */
function removeProduct(
  { commit }: ActionContext<StateShopping, State>,
  code: PRODUCT_CODE
) {
  try {
    checkout.remove(code);

    commit(SAVE_TOTAL_COST, checkout.getTotalCost());
    commit(SAVE_TOTAL_ITEMS, checkout.getTotalItems());
    commit(
      SAVE_TOTAL_COST_WITH_DISCOUNTS,
      checkout.getTotalCostWithDiscounts()
    );
    commit(SAVE_DISCOUNTS_APPLIED, checkout.getDiscountsApplied());
  } catch (error) {
    // TODO: send to error monitoring service (eg: Sentry)
    throw new Error(
      "Sorry, there was an issue when trying to remove a product"
    );
  }
}

export default {
  initShoppingCart,
  scanProduct,
  removeProduct
};
