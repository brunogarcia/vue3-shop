import { computed } from "vue";
import { useStore } from "vuex";

export default function useShopping() {
  const store = useStore();

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
  return {
    totalCost,
    totalItems,
    discountsApplied,
    totalCostWithDiscounts,
    hasTotalCost,
    hasDiscountsApplied
  };
}
