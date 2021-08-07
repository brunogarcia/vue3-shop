<template>
  <ul class="summary-items wrapper border">
    <li>
      <span class="summary-items-number" data-testid="summary-items-number">
        {{ totalItems }} Items
      </span>
      <span class="summary-items-price" data-testid="summary-items-price">
        {{ totalCost }}
        <span class="currency">€</span>
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useSummary from "@/hooks/useSummary";

export default defineComponent({
  name: "SummaryItems",

  setup() {
    const { totalCost, totalItems } = useSummary();

    return {
      totalCost,
      totalItems
    };
  }
});
</script>

<style scoped>
.summary-items-price {
  font-size: 16px;
  font-weight: bold;
}
</style>
