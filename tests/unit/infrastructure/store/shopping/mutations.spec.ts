import { StateRoot } from "@/infrastructure/store/store.types";
import { PRODUCT_CODE } from "@/domain/checkout/checkout.types";
import { DISCOUNT_CODE } from "@/domain/discount-rules/discount.rules.types";
import mutations from "@/infrastructure/store/shopping/mutations";
import mockState from "../../../_mocks/mockShoppingState";

const { CAP } = PRODUCT_CODE;
const { TWO_X_ONE, BULK } = DISCOUNT_CODE;

describe("Shopping store - Getters", () => {
  let stateRoot: StateRoot;

  beforeEach(() => {
    stateRoot = mockState();
  });

  it("Save products", () => {
    const expected = [
      {
        code: "CAP",
        currency: "€",
        discounts: ["TWO_X_ONE"],
        id: "12345",
        name: "Test",
        price: 20
      }
    ];

    mutations.SAVE_PRODUCTS(stateRoot, [
      {
        id: "12345",
        code: CAP,
        name: "Test",
        price: 20,
        discounts: [TWO_X_ONE],
        currency: "€"
      }
    ]);

    expect(stateRoot.products).toEqual(expected);
  });

  it("Save total cost", () => {
    mutations.SAVE_TOTAL_COST(stateRoot, 80);
    expect(stateRoot.summary.totalCost).toBe(80);
  });

  it("Save total items", () => {
    mutations.SAVE_TOTAL_ITEMS(stateRoot, 10);
    expect(stateRoot.summary.totalItems).toBe(10);
  });

  it("Save discount applied", () => {
    const expected = [{ code: "BULK", literal: "test", total: 20 }];

    mutations.SAVE_DISCOUNTS_APPLIED(stateRoot, [
      { code: BULK, literal: "test", total: 20 }
    ]);

    expect(stateRoot.summary.discountsApplied).toEqual(expected);
  });

  it("Save total cost with discounts", () => {
    mutations.SAVE_TOTAL_COST_WITH_DISCOUNTS(stateRoot, 46);
    expect(stateRoot.summary.totalCostWithDiscounts).toBe(46);
  });
});
