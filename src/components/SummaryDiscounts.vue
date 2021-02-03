<template>
  <div class="summary-discounts wrapper-half border" v-if="displaySummary()">
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
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SummaryDiscounts",
  computed: {
    ...mapGetters({
      discountsApplied: "shopping/discountsApplied"
    })
  },
  methods: {
    displaySummary() {
      return this.discountsApplied.length > 0;
    }
  }
});
</script>
