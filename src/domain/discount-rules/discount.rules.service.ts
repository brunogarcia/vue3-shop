import { discountFactory } from "@/domain/discount-rules/discount.rules.factory";
import {
  DiscountRule,
  DISCOUNT_CODE
} from "@/domain/discount-rules/discount.rules.types";

const { TWO_X_ONE, BULK, PROMO_CODE } = DISCOUNT_CODE;

/**
 * Discount rules service
 *
 */
export default class DiscountRulesService {
  private twoForOneDiscount: DiscountRule;
  private bulkDiscount: DiscountRule;
  private promoCode: DiscountRule;

  constructor() {
    this.twoForOneDiscount = discountFactory(TWO_X_ONE);
    this.bulkDiscount = discountFactory(BULK);
    this.promoCode = discountFactory(PROMO_CODE);
  }

  /**
   * Get discount rules
   *
   * @public
   * @returns {DiscountRule[]}
   */
  public getRules(): DiscountRule[] {
    return [this.twoForOneDiscount, this.bulkDiscount, this.promoCode];
  }
}
