import PRODUCT from "@/enums/product";
import Checkout from "@/middleware/checkout";
import mockPrincingRules from "../mocks/mockPrincingRules";

const { CAP, TSHIRT, MUG } = PRODUCT;

describe("Checkout - Total items", () => {
  let checkout: Checkout;
  const princingRules = mockPrincingRules();

  beforeEach(() => {
    checkout = new Checkout(princingRules);
  });

  it("After scan a list of products, the total items must be updated", () => {
    checkout
      .scan(CAP)
      .scan(TSHIRT)
      .scan(MUG);

    expect(checkout.getTotalItems()).toBe(3);
  });

  it("After remove a product, the total items must be updated", () => {
    checkout
      .scan(CAP)
      .scan(TSHIRT)
      .remove(CAP)
      .scan(MUG);

    expect(checkout.getTotalItems()).toBe(2);
  });
});
