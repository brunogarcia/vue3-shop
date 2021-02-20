import initialState from "@/store/shopping/initialState";

it("Shooping store - Initial state", () => {
  const expected = {
    products: [],
    summary: {
      totalCost: 0,
      totalItems: 0,
      discountsApplied: [],
      totalCostWithDiscounts: 0
    }
  };

  expect(initialState).toEqual(expected);
});
