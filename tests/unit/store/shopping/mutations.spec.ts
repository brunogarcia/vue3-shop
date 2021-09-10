import { StateShopping } from "@/types";
import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";
import mutations from "@/store/shopping/mutations";
import mockState from "../../mocks/mockShoppingState";

const { CAP } = PRODUCT_CODE;
const { TWO_X_ONE, BULK } = DISCOUNT_CODE;

describe("Shopping store - Getters", () => {
  let stateShopping: StateShopping;

  beforeEach(() => {
    stateShopping = mockState();
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

    mutations.SAVE_PRODUCTS(stateShopping, [
      {
        id: "12345",
        code: CAP,
        name: "Test",
        price: 20,
        discounts: [TWO_X_ONE],
        currency: "€"
      }
    ]);

    expect(stateShopping.products).toEqual(expected);
  });

  it("Save total cost", () => {
    mutations.SAVE_TOTAL_COST(stateShopping, 80);
    expect(stateShopping.summary.totalCost).toBe(80);
  });

  it("Save total items", () => {
    mutations.SAVE_TOTAL_ITEMS(stateShopping, 10);
    expect(stateShopping.summary.totalItems).toBe(10);
  });

  it("Save discount applied", () => {
    const expected = [{ code: "BULK", literal: "test", total: 20 }];

    mutations.SAVE_DISCOUNTS_APPLIED(stateShopping, [
      { code: BULK, literal: "test", total: 20 }
    ]);

    expect(stateShopping.summary.discountsApplied).toEqual(expected);
  });

  it("Save total cost with discounts", () => {
    mutations.SAVE_TOTAL_COST_WITH_DISCOUNTS(stateShopping, 46);
    expect(stateShopping.summary.totalCostWithDiscounts).toBe(46);
  });
});
