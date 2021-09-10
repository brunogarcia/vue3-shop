import shopping from "@/store/shopping";

function mockStore(): object {
  return {
    modules: {
      shopping: {
        ...shopping,
        state: {
          products: [
            {
              id: "X3W2OPY",
              code: "CAP",
              name: "Cap",
              price: 5,
              discounts: ["TWO_X_ONE"],
              currency: "€"
            },
            {
              id: "X7R2OPX",
              code: "TSHIRT",
              name: "Shirt",
              price: 20,
              discounts: ["BULK"],
              currency: "€"
            },
            {
              id: "X2G2OPZ",
              code: "MUG",
              name: "Mug",
              price: 7.5,
              discounts: [],
              currency: "€"
            }
          ],
          summary: {
            totalCost: 40,
            totalItems: 5,
            discountsApplied: [
              {
                code: "test code 1",
                literal: "test literal 1",
                total: 3
              },
              {
                code: "test code 2",
                literal: "test literal 2",
                total: 9
              }
            ],
            totalCostWithDiscounts: 23
          }
        }
      }
    }
  };
}

export default mockStore();
