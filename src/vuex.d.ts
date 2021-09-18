import { ComponentCustomProperties } from "vue";
import { Store } from "@/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
  }
}
