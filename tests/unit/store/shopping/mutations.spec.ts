import { State } from "@/types";
import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";
import mutations from "@/store/shopping/mutations";
import mockState from "../../mocks/mockState";

const { CAP } = PRODUCT_CODE;
const { TWO_X_ONE, BULK } = DISCOUNT_CODE;

describe("Shopping store - Getters", () => {
  let state: State;

  beforeEach(() => {
    state = mockState();
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

    mutations.SAVE_PRODUCTS(state, [
      {
        id: "12345",
        code: CAP,
        name: "Test",
        price: 20,
        discounts: [TWO_X_ONE],
        currency: "€"
      }
    ]);

    expect(state.products).toEqual(expected);
  });

  it("Save total cost", () => {
    mutations.SAVE_TOTAL_COST(state, 80);
    expect(state.summary.totalCost).toBe(80);
  });

  it("Save total items", () => {
    mutations.SAVE_TOTAL_ITEMS(state, 10);
    expect(state.summary.totalItems).toBe(10);
  });

  it("Save discount applied", () => {
    const expected = [{ code: "BULK", literal: "test", total: 20 }];

    mutations.SAVE_DISCOUNTS_APPLIED(state, [
      { code: BULK, literal: "test", total: 20 }
    ]);

    expect(state.summary.discountsApplied).toEqual(expected);
  });

  it("Save total cost with discounts", () => {
    mutations.SAVE_TOTAL_COST_WITH_DISCOUNTS(state, 46);
    expect(state.summary.totalCostWithDiscounts).toBe(46);
  });
});
