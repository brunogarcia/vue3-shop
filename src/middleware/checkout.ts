import PRODUCT from "@/enums/product";
import { PricingRule, DiscountRule } from "@/types";
import discountRules from "@/middleware/discountRules";

const { EMPTY } = PRODUCT;

export default class Checkout {
  private totalCost = 0;
  private pricingRules: PricingRule[];
  private discountRules: DiscountRule[] = [];
  private emptyPricingRule: PricingRule = {
    code: EMPTY,
    price: 0,
    discounts: []
  };

  constructor(pricingRules: PricingRule[]) {
    this.pricingRules = pricingRules;
    this.discountRules = discountRules();
  }

  /**
   * Get total cost
   *
   * @public
   * @returns {number}
   */
  public getTotalCost(): number {
    return this.totalCost;
  }

  /**
   * Scan a product
   *
   * @public
   * @param {PRODUCT} code - The pricing rule code
   * @returns {this}
   */
  public scan(code: PRODUCT): this {
    const pricingRule = this.getPricingRule(code);
    this.addPriceToTotal(pricingRule);

    return this;
  }

  /**
   * Remove a product
   *
   * @public
   * @param {PRODUCT} code - The pricing rule code
   * @returns {this}
   */
  public remove(code: PRODUCT): this {
    const pricingRule = this.getPricingRule(code);
    console.log(pricingRule);

    return this;
  }

  /**
   * Commons - Get princing rule
   *
   * @param {PRODUCT} code - The product code
   * @returns {PricingRule}
   */
  private getPricingRule(code: PRODUCT): PricingRule {
    const pricingRule: PricingRule | undefined = this.pricingRules.find(
      item => item.code === code
    );
    return pricingRule || this.emptyPricingRule;
  }

  /**
   * Total Price - Add price to total
   *
   * @param {PricingRule} product - The product
   */
  private addPriceToTotal(product: PricingRule) {
    this.totalCost += product.price;
  }
}
