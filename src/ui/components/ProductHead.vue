<template>
  <ul class="products-list tableHead">
    <li class="products-list-title row">
      <div class="col-product">Product details</div>
      <div class="col-quantity">Quantity</div>
      <div class="col-price">Price</div>
      <div class="col-total">Total</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductsHead"
});
</script>

<style scoped>
.tableHead {
  padding: 32px 0;
}
</style>
