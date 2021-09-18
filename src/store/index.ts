import { InjectionKey } from "vue";
import { Store } from "@/types";
import { createStore, Store as VuexStore } from "vuex";

import { StateRoot } from "@/types";
import Shopping from "@/store/shopping";

export const key: InjectionKey<VuexStore<StateRoot>> = Symbol();

export const store = createStore<StateRoot>(Shopping);

export function useStore() {
  return store as Store;
}
