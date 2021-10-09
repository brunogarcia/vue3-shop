<template>
  <aside class="summary">
    <Title title="Order Summary" />
    <SummaryItems />
    <SummaryDiscounts />
    <SummaryTotal />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/components/Title.vue";
import SummaryItems from "@/components/SummaryItems.vue";
import SummaryDiscounts from "@/components/SummaryDiscounts.vue";
import SummaryTotal from "@/components/SummaryTotal.vue";

export default defineComponent({
  name: "Summary",
  components: {
    Title,
    SummaryItems,
    SummaryDiscounts,
    SummaryTotal
  }
});
</script>

<style>
.summary {
  display: flex;
  flex-flow: column wrap;
  padding: 40px 32px;
  width: 312px;
  background-color: #f3f3f3;
  color: #212240;
}

.summary > * {
  width: 100%;
}

.summary ul li {
  display: flex;
  justify-content: space-between;
}

.summary ul li > *:nth-child(2) {
  font-weight: bold;
}

.summary ul li + li {
  margin-top: 20px;
}
</style>
