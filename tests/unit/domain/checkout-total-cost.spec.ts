import { PRODUCT_CODE } from "@/domain/checkout/checkout.types";
import { DiscountRule } from "@/domain/discount-rules/discount.rules.types";

import CheckoutService from "@/domain/checkout/checkout.service";
import mockPrincingRules from "../_mocks/mockPrincingRules";
import DiscountRulesService from "@/domain/discount-rules/discount.rules.service";

const { CAP, TSHIRT, MUG } = PRODUCT_CODE;
const discountRulesService = new DiscountRulesService();

describe("Checkout Service - Total cost", () => {
  let checkout: CheckoutService;
  const princingRules = mockPrincingRules();
  const discountRules: DiscountRule[] = discountRulesService.getRules();

  beforeEach(() => {
    checkout = new CheckoutService(princingRules, discountRules);
  });

  it("After scan a list of products, the total cost must be updated", () => {
    checkout
      .scan(CAP)
      .scan(TSHIRT)
      .scan(MUG);

    expect(checkout.getTotalCost()).toBe(32.5);
  });

  it("After remove a product, the total cost must be updated", () => {
    checkout
      .scan(CAP)
      .scan(TSHIRT)
      .remove(CAP)
      .scan(MUG);

    expect(checkout.getTotalCost()).toBe(27.5);
  });
});
