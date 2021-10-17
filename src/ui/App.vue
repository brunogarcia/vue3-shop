<template>
  <main class="App">
    <Products />
    <Summary />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Products from "@/ui/views/Products.vue";
import Summary from "@/ui/views/Summary.vue";
import useShoppingInit from "@/application/services/useShoppingInit";

import "@/ui/assets/styles/reset.css";
import "@/ui/assets/styles/commons.css";

export default defineComponent({
  name: "App",

  components: {
    Products,
    Summary
  },

  setup() {
    useShoppingInit();
  }
});
</script>

<style scoped>
.App {
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1088px;
  max-height: 648px;
  width: calc(100% - 64px);
  height: calc(100% - 64px);
  border-radius: 4px;
  background-color: #ffffff;
  transform: translate(-50%, -50%);
}
</style>
