import { ScannerItem, PRODUCT_CODE } from "@/domain/checkout/checkout.types";

export enum DISCOUNT_CODE {
  TWO_X_ONE = "TWO_X_ONE",
  BULK = "BULK",
  PROMO_CODE = "PROMO_CODE"
}

export interface DiscountRule {
  code: DISCOUNT_CODE;
  literal: string;
  products: PRODUCT_CODE[];
  minToApply: number;
  calculateDiscount(item: ScannerItem): number;
}
