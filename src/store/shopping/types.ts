import { ActionContext } from "vuex";

import { StateRoot } from "@/store/types";
import { Product, TotalDiscountItem } from "@/domain/checkout/checkout.types";

import PRODUCT_CODE from "@/enums/product";
import { ACTIONS, MUTATION, GETTERS } from "@/enums/shopping";

type AugmentedActionContext = {
  commit<K extends keyof ShoppingMutations>(
    key: K,
    payload?: Parameters<ShoppingMutations[K]>[1]
  ): ReturnType<ShoppingMutations[K]>;
  getters<K extends keyof ShoppingGetters>(
    key: K,
    payload: Parameters<ShoppingGetters[K]>[1]
  ): ReturnType<ShoppingGetters[K]>;
} & Omit<ActionContext<StateRoot, StateRoot>, "commit">;

export interface ShoppingActions {
  [ACTIONS.INIT_SHOPPING_CART]({
    commit
  }: AugmentedActionContext): Promise<void>;
  [ACTIONS.SCAN_PRODUCT](
    { commit }: AugmentedActionContext,
    code: PRODUCT_CODE
  ): void;
  [ACTIONS.REMOVE_PRODUCT](
    { commit }: AugmentedActionContext,
    code: PRODUCT_CODE
  ): void;
}

export type ShoppingMutations<S = StateRoot> = {
  [MUTATION.SAVE_PRODUCTS](state: S, payload: Product[]): void;
  [MUTATION.SAVE_TOTAL_COST](state: S, payload: number): void;
  [MUTATION.SAVE_TOTAL_ITEMS](state: S, payload: number): void;
  [MUTATION.SAVE_DISCOUNTS_APPLIED](
    state: S,
    payload: TotalDiscountItem[]
  ): void;
  [MUTATION.SAVE_TOTAL_COST_WITH_DISCOUNTS](state: S, payload: number): void;
};

export type ShoppingGetters = {
  [GETTERS.PRODUCTS](state: StateRoot): Product[];
  [GETTERS.TOTAL_COST](state: StateRoot): number;
  [GETTERS.TOTAL_ITEMS](state: StateRoot): number;
  [GETTERS.DISCOUNTS_APPLIED](state: StateRoot): TotalDiscountItem[];
  [GETTERS.TOTAL_COST_WITH_DISCOUNTS](state: StateRoot): number;
  [GETTERS.HAS_TOTAL_COST](state: StateRoot): boolean;
  [GETTERS.HAS_DISCOUNTS_APPLIED](state: StateRoot): boolean;
};
