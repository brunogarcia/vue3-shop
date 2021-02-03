import PRODUCT from "@/enums/product";
import DISCOUNT from "@/enums/discount";

export interface Product extends PricingRule {
  id: string;
  name: string;
  currency: string;
}

export interface PricingRule {
  code: PRODUCT;
  price: number;
  discounts: DISCOUNT[];
}
