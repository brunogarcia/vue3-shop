import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { Store as StoreRoot } from "@/domain/checkout/checkout.types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<StoreRoot>;
  }
}
