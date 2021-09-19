import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { StateRoot } from "@/types";
import Shopping from "@/store/shopping";

export const key: InjectionKey<Store<StateRoot>> = Symbol();

export const store = createStore<StateRoot>(Shopping);

export function useStore() {
  return baseUseStore(key);
}
