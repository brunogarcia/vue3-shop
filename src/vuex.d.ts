import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { StateRoot } from "./types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<StateRoot>;
  }
}
