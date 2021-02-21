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
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SummaryItems",

  computed: {
    ...mapGetters({
      totalCost: "shopping/totalCost",
      totalItems: "shopping/totalItems"
    })
  }
});
</script>

<style scoped>
.summary-items-price {
  font-size: 16px;
  font-weight: bold;
}
</style>
