<template>
  <div class="checkout-wrapper">
    <Title title="Resume" />

    <h2 class="checkout-title">Subtotal</h2>

    <ul class="checkout-items border">
      <li>
        <span>{{ totalItems }} Items </span>
        <span>
          {{ totalCost }}
          <span class="currency">€</span>
        </span>
      </li>
    </ul>

    <div v-if="hasDiscountsApplied">
      <h2 class="checkout-title">Discounts</h2>

      <ul class="checkout-items border">
        <li v-for="item in discountsApplied" :key="item.code">
          <span>{{ item.literal }}</span>
          <span>-{{ item.total }}€</span>
        </li>
      </ul>
    </div>

    <h2 class="checkout-title">Total to pay</h2>

    <ul class="checkout-items border">
      <li>
        <span>Total</span>
        <span>{{ totalCostWithDiscounts }}€ </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useShopping from "@/hooks/useShopping";
import Title from "@/components/Title.vue";

export default defineComponent({
  name: "Checkout",

  components: {
    Title
  },

  setup() {
    const {
      totalCost,
      totalItems,
      discountsApplied,
      totalCostWithDiscounts,
      hasDiscountsApplied
    } = useShopping();

    return {
      totalCost,
      totalItems,
      discountsApplied,
      totalCostWithDiscounts,
      hasDiscountsApplied
    };
  }
});
</script>

<style scoped>
.checkout-title {
  margin-top: 1em;
}

.checkout-items {
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
}

.checkout-items li {
  display: flex;
  justify-content: space-between;
}

.checkout-items li > *:nth-child(2) {
  font-weight: bold;
}

.checkout-items li + li {
  margin-top: 20px;
}
</style>
