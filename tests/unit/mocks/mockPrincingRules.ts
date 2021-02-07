import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";

const { CAP, TSHIRT, MUG } = PRODUCT_CODE;
const { TWO_X_ONE, BULK } = DISCOUNT_CODE;

export default function mockPrincingRules() {
  return [
    {
      code: CAP,
      price: 5,
      discounts: [TWO_X_ONE]
    },
    {
      code: TSHIRT,
      price: 20,
      discounts: [BULK]
    },
    {
      code: MUG,
      price: 7.5,
      discounts: []
    }
  ];
}
