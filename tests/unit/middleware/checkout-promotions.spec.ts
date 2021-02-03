import PRODUCT from "@/enums/product";
import Checkout from "@/middleware/checkout";
import mockPrincingRules from "../mocks/mockPrincingRules";

const { CAP, TSHIRT } = PRODUCT;

describe("Checkout - Promotions", () => {
  let checkout: Checkout;
  const princingRules = mockPrincingRules();

  beforeEach(() => {
    checkout = new Checkout(princingRules);
  });

  it("The checkout is able to process the 2x1 promotion", () => {
    checkout.scan(CAP).scan(CAP);

    expect(checkout.getTotalCost()).toBe(10);
    expect(checkout.getTotalCostWithDiscounts()).toBe(5);
  });

  it("The checkout is able to process the bulk promotion with 3 tshirts", () => {
    checkout
      .scan(TSHIRT)
      .scan(TSHIRT)
      .scan(TSHIRT);

    expect(checkout.getTotalCost()).toBe(60);
    expect(checkout.getTotalCostWithDiscounts()).toBe(57);
    expect(checkout.getDiscountsApplied()).toHaveLength(1);
  });

  it("The checkout is able to process the bulk promotion with more than 3 tshirts", () => {
    checkout
      .scan(TSHIRT)
      .scan(TSHIRT)
      .scan(TSHIRT)
      .scan(TSHIRT);

    expect(checkout.getTotalCost()).toBe(80);
    expect(checkout.getTotalCostWithDiscounts()).toBe(76);
    expect(checkout.getDiscountsApplied()).toHaveLength(1);
  });
});
