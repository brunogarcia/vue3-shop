import { ScannerItem, PRODUCT_CODE } from "@/domain/checkout/checkout.types";
import {
  DiscountRule,
  DISCOUNT_CODE
} from "@/domain/discount-rules/discount.rules.types";

const { CAP, TSHIRT } = PRODUCT_CODE;
const { TWO_X_ONE, BULK, PROMO_CODE } = DISCOUNT_CODE;

/**
 * Discount "2x1"
 * Buy 2 of the same product, get one free
 */
function getTwoForOneDiscount(): DiscountRule {
  return {
    code: TWO_X_ONE,
    literal: "2x1 Mug offer",
    products: [CAP],
    minToApply: 2,
    calculateDiscount(item: ScannerItem): number {
      const discountPerItem = item?.price ? (item.price * 50) / 100 : 0;
      return item.counter * discountPerItem;
    }
  };
}

/**
 * Discount "Bulk"
 * Buying 3 or more, the price per unit is reduced 5%
 */
function getBulkDiscount(): DiscountRule {
  return {
    code: BULK,
    literal: "x3 Shirt offer",
    products: [TSHIRT],
    minToApply: 3,
    calculateDiscount(item: ScannerItem): number {
      const discountPerItem = item?.price ? (item.price * 5) / 100 : 0;
      return item.counter * discountPerItem;
    }
  };
}

/**
 * Promo code
 */
function getPromoCode(): DiscountRule {
  return {
    code: PROMO_CODE,
    literal: "Promo Code",
    products: [],
    minToApply: 0,
    calculateDiscount(): number {
      return 0;
    }
  };
}

/**
 * Discount rule factory
 *
 * @param code Discount code
 * @returns {DiscountRule} Discount rule
 */
export function discountFactory(code: DISCOUNT_CODE): DiscountRule {
  switch (code) {
    case TWO_X_ONE:
      return getTwoForOneDiscount();
    case BULK:
      return getBulkDiscount();
    case PROMO_CODE:
      return getPromoCode();
  }
}
