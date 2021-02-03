import discountRules from "@/middleware/discountRules";
import { PricingRule, DiscountRule } from "@/types";

export default class Checkout {
  private pricingRules: PricingRule[];
  private discountRules: DiscountRule[] = [];

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
    this.discountRules = discountRules();
  }
}
