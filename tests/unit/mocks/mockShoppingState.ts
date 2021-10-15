import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";
import { StateRoot } from "@/store/types";

const { CAP, TSHIRT, MUG } = PRODUCT_CODE;
const { TWO_X_ONE, BULK } = DISCOUNT_CODE;

export default function mockShoppingState(): StateRoot {
  return {
    products: [
      {
        id: "X3W2OPY",
        code: CAP,
        name: "Cap",
        price: 5,
        discounts: [TWO_X_ONE],
        currency: "€"
      },
      {
        id: "X7R2OPX",
        code: TSHIRT,
        name: "Shirt",
        price: 20,
        discounts: [BULK],
        currency: "€"
      },
      {
        id: "X2G2OPZ",
        code: MUG,
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
          code: TWO_X_ONE,
          literal: "test literal 1",
          total: 3
        },
        {
          code: BULK,
          literal: "test literal 2",
          total: 9
        }
      ],
      totalCostWithDiscounts: 23
    }
  };
}
