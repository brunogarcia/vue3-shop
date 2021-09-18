import { ActionContext } from "vuex";
import PRODUCT_CODE from "@/enums/product";
import { ACTIONS, MUTATION, GETTERS } from "@/enums/shopping";
import { Product, StateRoot, TotalDiscountItem } from "@/types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
  getters<K extends keyof Getters>(
    key: K,
    payload: Parameters<Getters[K]>[1]
  ): ReturnType<Getters[K]>;
} & Omit<ActionContext<StateRoot, StateRoot>, "commit">;

export interface Actions {
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

export type Mutations<S = StateRoot> = {
  [MUTATION.SAVE_PRODUCTS](state: S, payload: Product[]): void;
  [MUTATION.SAVE_TOTAL_COST](state: S, payload: number): void;
  [MUTATION.SAVE_TOTAL_ITEMS](state: S, payload: number): void;
  [MUTATION.SAVE_DISCOUNTS_APPLIED](
    state: S,
    payload: TotalDiscountItem[]
  ): void;
  [MUTATION.SAVE_TOTAL_COST_WITH_DISCOUNTS](state: S, payload: number): void;
};

export type Getters = {
  [GETTERS.PRODUCTS](state: StateRoot): Product[];
  [GETTERS.TOTAL_COST](state: StateRoot): number;
  [GETTERS.TOTAL_ITEMS](state: StateRoot): number;
  [GETTERS.DISCOUNTS_APPLIED](state: StateRoot): TotalDiscountItem[];
  [GETTERS.TOTAL_COST_WITH_DISCOUNTS](state: StateRoot): number;
  [GETTERS.HAS_TOTAL_COST](state: StateRoot): boolean;
  [GETTERS.HAS_DISCOUNTS_APPLIED](state: StateRoot): boolean;
};
