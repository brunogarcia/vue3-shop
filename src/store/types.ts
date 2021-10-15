import { Product, Summary } from "@/domain/checkout/checkout.types";
import {
  ShoppingMutations,
  ShoppingActions,
  ShoppingGetters
} from "@/store/shopping/types";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export interface StateRoot {
  products: Product[];
  summary: Summary;
}

export type Store = Omit<
  VuexStore<StateRoot>,
  "getters" | "commit" | "dispatch"
> & {
  commit<
    K extends keyof ShoppingMutations,
    P extends Parameters<ShoppingMutations[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<ShoppingMutations[K]>;
} & {
  dispatch<K extends keyof ShoppingActions>(
    key: K,
    payload: Parameters<ShoppingActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ShoppingActions[K]>;
} & {
  getters: {
    [K in keyof ShoppingGetters]: ReturnType<ShoppingGetters[K]>;
  };
};
