<template>
  <div v-if="hasDiscountsApplied" class="summary-discounts wrapper-half border">
    <h2>Discounts</h2>
    <ul>
      <li v-for="item in discountsApplied" :key="item.code">
        <span data-test="discount-literal">{{ item.literal }}</span>
        <span data-test="discount-total">-{{ item.total }}€</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useShoppingSummary from "@/composable-functions/useShoppingSummary";

export default defineComponent({
  name: "SummaryDiscounts",

  setup() {
    const { discountsApplied, hasDiscountsApplied } = useShoppingSummary();

    return {
      discountsApplied,
      hasDiscountsApplied
    };
  }
});
</script>
