import { StateRoot } from "@/types";
import getters from "@/store/shopping/getters";
import mockState from "../../mocks/mockShoppingState";

describe("Shopping store - Getters", () => {
  let stateRoot: StateRoot;

  beforeEach(() => {
    stateRoot = {
      ...mockState()
    };
  });

  it("Product", () => {
    const expected = [
      {
        code: "CAP",
        currency: "€",
        discounts: ["TWO_X_ONE"],
        id: "X3W2OPY",
        name: "Cap",
        price: 5
      },
      {
        code: "TSHIRT",
        currency: "€",
        discounts: ["BULK"],
        id: "X7R2OPX",
        name: "Shirt",
        price: 20
      },
      {
        code: "MUG",
        currency: "€",
        discounts: [],
        id: "X2G2OPZ",
        name: "Mug",
        price: 7.5
      }
    ];

    const actual = getters.PRODUCTS(stateRoot);
    expect(actual).toEqual(expected);
  });

  it("Total cost", () => {
    const actual = getters.TOTAL_COST(stateRoot);
    expect(actual).toBe(40);
  });

  it("Total items", () => {
    const actual = getters.TOTAL_ITEMS(stateRoot);
    expect(actual).toBe(5);
  });

  it("Discounts applied", () => {
    const expected = [
      { code: "TWO_X_ONE", literal: "test literal 1", total: 3 },
      { code: "BULK", literal: "test literal 2", total: 9 }
    ];

    const actual = getters.DISCOUNTS_APPLIED(stateRoot);

    expect(actual).toEqual(expected);
  });

  it("Total cost with discounts", () => {
    const actual = getters.TOTAL_COST_WITH_DISCOUNTS(stateRoot);
    expect(actual).toBe(23);
  });

  it("Check if the shopping cart has total cost", () => {
    const actual = getters.HAS_TOTAL_COST(stateRoot);
    expect(actual).toBeTruthy();
  });

  it("Check if the shopping cart has discounts applied", () => {
    const actual = getters.HAS_DISCOUNTS_APPLIED(stateRoot);
    expect(actual).toBeTruthy();
  });
});
