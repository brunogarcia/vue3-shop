import { computed } from "vue";
import { useStore } from "@/store";

import { Product } from "@/domain/checkout/checkout.types";

import PRODUCT_CODE from "@/enums/product";
import { ACTIONS, GETTERS } from "@/enums/shopping";

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
