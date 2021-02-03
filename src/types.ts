import PRODUCT from "@/enums/product";
import DISCOUNT from "@/enums/discount";

/**
 * Vuex
 */
export interface State {
  products: Product[];
  summary: Summary;
}

export interface Summary {
  totalCost: number;
  totalItems: number;
  totalCostWithDiscounts: number;
  discountsApplied: TotalDiscountItem[];
}

/**
 * Checkout
 */
export interface PricingRule {
  code: PRODUCT;
  price: number;
  discounts: DISCOUNT[];
}

export interface Product extends PricingRule {
  id: string;
  name: string;
  currency: string;
}

export interface ScannerItem extends PricingRule {
  counter: number;
}

export interface DiscountRule {
  code: DISCOUNT;
  literal: string;
  products: PRODUCT[];
  minToApply: number;
  calculateDiscount(item: ScannerItem): number;
}

export interface TotalDiscountItem {
  code: DISCOUNT;
  literal: string;
  total: number;
}
