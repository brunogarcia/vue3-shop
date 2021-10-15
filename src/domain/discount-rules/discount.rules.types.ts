import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";

import { ScannerItem } from "@/domain/checkout/checkout.types";

export interface DiscountRule {
  code: DISCOUNT_CODE;
  literal: string;
  products: PRODUCT_CODE[];
  minToApply: number;
  calculateDiscount(item: ScannerItem): number;
}
