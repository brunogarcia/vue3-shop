import { InjectionKey } from "vue";
import {
  createStore,
  Store as VuexStore,
  useStore as baseUseStore
} from "vuex";

import { StateRoot } from "@/store/types";
import Shopping from "@/store/shopping";

export const key: InjectionKey<VuexStore<StateRoot>> = Symbol();

export const store = createStore<StateRoot>(Shopping);

export function useStore(): VuexStore<StateRoot> {
  return baseUseStore(key);
}
