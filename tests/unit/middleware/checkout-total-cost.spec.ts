import PRODUCT_CODE from "@/enums/product";
import Checkout from "@/middleware/checkout";
import mockPrincingRules from "../mocks/mockPrincingRules";

const { CAP, TSHIRT, MUG } = PRODUCT_CODE;

describe("Checkout - Total cost", () => {
  let checkout: Checkout;
  const princingRules = mockPrincingRules();

  beforeEach(() => {
    checkout = new Checkout(princingRules);
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
