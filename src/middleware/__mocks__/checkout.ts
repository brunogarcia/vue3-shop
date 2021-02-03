/**
 * Mock checkout middleware in order to test Vuex actions
 */
export default class Checkout {
  getTotalItems() {
    return 10;
  }

  getTotalCost() {
    return 120;
  }

  getTotalCostWithDiscounts() {
    return 100;
  }

  getDiscountsApplied() {
    return [
      {
        code: "test",
        literal: "test",
        total: 5
      }
    ];
  }

  scan() {
    return this;
  }

  remove() {
    return this;
  }
}
