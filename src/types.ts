import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";

/**
 * Vuex
 */
export interface StateShopping {
  products: Product[];
  summary: Summary;
}

export interface StateModal {
  display: boolean;
}

export interface State {
  modal: StateModal;
  shopping: StateShopping;
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

export interface DiscountRule {
  code: DISCOUNT_CODE;
  literal: string;
  products: PRODUCT_CODE[];
  minToApply: number;
  calculateDiscount(item: ScannerItem): number;
}

export interface TotalDiscountItem {
  code: DISCOUNT_CODE;
  literal: string;
  total: number;
}
