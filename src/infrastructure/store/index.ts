import { InjectionKey } from "vue";
import {
  createStore,
  Store as VuexStore,
  useStore as baseUseStore
} from "vuex";

import Shopping from "@/infrastructure/store/shopping";
import { StateRoot } from "@/infrastructure/store/store.types";

export const key: InjectionKey<VuexStore<StateRoot>> = Symbol();

export const store = createStore<StateRoot>(Shopping);

export function useStore(): VuexStore<StateRoot> {
  return baseUseStore(key);
}
