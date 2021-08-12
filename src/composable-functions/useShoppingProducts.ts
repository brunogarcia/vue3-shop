import { computed } from "vue";
import { useStore } from "vuex";
import PRODUCT_CODE from "@/enums/product";

export default function useShopping() {
  const store = useStore();

  const products = computed(() => store.getters["shopping/products"]);

  const handleAddProduct = (code: PRODUCT_CODE) =>
    store.dispatch("shopping/scanProduct", code);

  const handleRemoveProduct = (code: PRODUCT_CODE) =>
    store.dispatch("shopping/removeProduct", code);

  return {
    products,
    handleAddProduct,
    handleRemoveProduct
  };
}
