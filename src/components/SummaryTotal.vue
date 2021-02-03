<template>
  <div class="summary-total wrapper">
    <ul>
      <li>
        <span class="summary-total-cost">Total cost</span>
        <span class="summary-total-price" data-test="summary-total-price"
          >{{ totalCostWithDiscounts }}€</span
        >
      </li>
    </ul>
    <button type="submit">Checkout</button>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SummaryTotal",
  computed: {
    ...mapGetters({
      totalCostWithDiscounts: "shopping/totalCostWithDiscounts"
    })
  }
});
</script>

<style scoped>
.summary-total {
  align-self: flex-end;
  margin-top: auto;
  padding-top: 16px;
  padding-bottom: 0;
  border-top: 1px solid rgba(33, 34, 64, 0.16);
  color: #212240;
}

.summary-total-cost {
  flex-basis: 100%;
  text-transform: uppercase;
}

.summary-total-price {
  font-weight: bold;
}

.summary-total button[type="submit"] {
  margin-top: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  border-radius: 4px;
  background: #00a0df;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  cursor: pointer;
}
</style>
