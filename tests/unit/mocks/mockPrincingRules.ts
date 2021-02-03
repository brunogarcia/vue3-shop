import PRODUCT from "@/enums/product";
import DISCOUNT from "@/enums/discount";

const { CAP, TSHIRT, MUG } = PRODUCT;
const { TWO_X_ONE, BULK } = DISCOUNT;

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
