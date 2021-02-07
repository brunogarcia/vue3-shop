import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";
import { DiscountRule, ScannerItem } from "@/types";

const { CAP, TSHIRT } = PRODUCT_CODE;
const { TWO_X_ONE, BULK, PROMO_CODE } = DISCOUNT_CODE;

/**
 * Discount rules
 *
 * @returns {DiscountRule[]}
 */
export default function discountRules(): DiscountRule[] {
  return [
    /**
     * Discount "2x1"
     * Buy 2 of the same product, get one free
     */
    {
      code: TWO_X_ONE,
      literal: "2x1 Mug offer",
      products: [CAP],
      minToApply: 2,
      calculateDiscount(item: ScannerItem): number {
        const discountPerItem = item?.price ? (item.price * 50) / 100 : 0;
        return item.counter * discountPerItem;
      }
    },

    /**
     * Discount "Bulk"
     * Buying 3 or more, the price per unit is reduced 5%
     */
    {
      code: BULK,
      literal: "x3 Shirt offer",
      products: [TSHIRT],
      minToApply: 3,
      calculateDiscount(item: ScannerItem): number {
        const discountPerItem = item?.price ? (item.price * 5) / 100 : 0;
        return item.counter * discountPerItem;
      }
    },

    /**
     * Promo code
     */
    {
      code: PROMO_CODE,
      literal: "Promo Code",
      products: [],
      minToApply: 0,
      calculateDiscount(): number {
        return 0;
      }
    }
  ];
}
