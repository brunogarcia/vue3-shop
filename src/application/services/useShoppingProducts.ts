import { computed } from "vue";

import { Product, PRODUCT_CODE } from "@/domain/checkout/checkout.types";

import { useStore } from "@/infrastructure/store";
import {
  ACTIONS,
  GETTERS
} from "@/infrastructure/store/shopping/shopping.types";

export default function useShopping() {
  const store = useStore();

  const products = computed((): Product[] => store.getters[GETTERS.PRODUCTS]);

  const addProduct = (code: PRODUCT_CODE): Promise<void> =>
    store.dispatch(ACTIONS.SCAN_PRODUCT, code);

  const removeProduct = (code: PRODUCT_CODE): Promise<void> =>
    store.dispatch(ACTIONS.REMOVE_PRODUCT, code);

  return {
    products,
    addProduct,
    removeProduct
  };
}
