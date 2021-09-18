import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

import PRODUCT_CODE from "@/enums/product";
import DISCOUNT_CODE from "@/enums/discount";
import { Actions, Mutations, Getters } from "@/store/shopping/types";

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

/**
 * Vuex
 */

export interface Summary {
  totalCost: number;
  totalItems: number;
  totalCostWithDiscounts: number;
  discountsApplied: TotalDiscountItem[];
}

export interface StateRoot {
  products: Product[];
  summary: Summary;
}

export type Store = Omit<
  VuexStore<StateRoot>,
  "getters" | "commit" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};
