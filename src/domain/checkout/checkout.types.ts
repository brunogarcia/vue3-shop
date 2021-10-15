import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";

export interface PricingRule {
  code: PRODUCT_CODE;
  price: number;
  discounts: DISCOUNT_CODE[];
}

export interface Product extends PricingRule {
  id: string;
  name: string;
  currency: string;
}

export interface ScannerItem extends PricingRule {
  counter: number;
}

export interface TotalDiscountItem {
  code: DISCOUNT_CODE;
  literal: string;
  total: number;
}

export interface Summary {
  totalCost: number;
  totalItems: number;
  totalCostWithDiscounts: number;
  discountsApplied: TotalDiscountItem[];
}
