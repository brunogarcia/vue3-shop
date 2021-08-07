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

    <div v-if="displayDiscount()">
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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Title from "@/components/Title.vue";

export default defineComponent({
  name: "Checkout",

  components: {
    Title
  },

  setup() {
    const store = useStore();

    const totalCost = computed(() => store.getters["shopping/totalCost"]);

    const totalItems = computed(() => store.getters["shopping/totalItems"]);

    const discountsApplied = computed(
      () => store.getters["shopping/discountsApplied"]
    );

    const totalCostWithDiscounts = computed(
      () => store.getters["shopping/totalCostWithDiscounts"]
    );

    const displayDiscount = () => discountsApplied.value.length > 0;

    return {
      totalCost,
      totalItems,
      discountsApplied,
      totalCostWithDiscounts,
      displayDiscount
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
