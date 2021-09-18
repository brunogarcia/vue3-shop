import { computed } from "vue";
import { useStore } from "vuex";

import { GETTERS } from "@/enums/shopping";
import { TotalDiscountItem } from "@/types";

export default function useShopping() {
  const store = useStore();

  const totalCost = computed((): number => store.getters[GETTERS.TOTAL_COST]);

  const totalItems = computed((): number => store.getters[GETTERS.TOTAL_ITEMS]);

  const discountsApplied = computed(
    (): TotalDiscountItem[] => store.getters[GETTERS.DISCOUNTS_APPLIED]
  );

  const totalCostWithDiscounts = computed(
    (): number => store.getters[GETTERS.TOTAL_COST_WITH_DISCOUNTS]
  );

  const hasTotalCost = computed(
    (): boolean => store.getters[GETTERS.HAS_TOTAL_COST]
  );

  const hasDiscountsApplied = computed(
    (): boolean => store.getters[GETTERS.HAS_DISCOUNTS_APPLIED]
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
