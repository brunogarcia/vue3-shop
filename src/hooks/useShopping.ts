import { computed } from "vue";
import { useStore } from "vuex";
import PRODUCT_CODE from "@/enums/product";

export default function useShopping() {
  const store = useStore();

  const products = computed(() => store.getters["shopping/products"]);

  const totalCost = computed(() => store.getters["shopping/totalCost"]);

  const totalItems = computed(() => store.getters["shopping/totalItems"]);

  const discountsApplied = computed(
    () => store.getters["shopping/discountsApplied"]
  );

  const totalCostWithDiscounts = computed(
    () => store.getters["shopping/totalCostWithDiscounts"]
  );

  const hasTotalCost = computed(() => store.getters["shopping/hasTotalCost"]);

  const hasDiscountsApplied = computed(
    () => store.getters["shopping/hasDiscountsApplied"]
  );

  const handleAddProduct = (code: PRODUCT_CODE) =>
    store.dispatch("shopping/scanProduct", code);

  const handleRemoveProduct = (code: PRODUCT_CODE) =>
    store.dispatch("shopping/removeProduct", code);

  return {
    products,
    totalCost,
    totalItems,
    discountsApplied,
    totalCostWithDiscounts,
    hasTotalCost,
    hasDiscountsApplied,
    handleAddProduct,
    handleRemoveProduct
  };
}
