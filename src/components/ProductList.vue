<template>
  <ul class="products-list" data-testid="products-list">
    <ProductItem
      v-for="(product, id) in products"
      :key="id"
      :product="product"
      @add-product="handleAddProduct"
      @remove-product="handleRemoveProduct"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useShopping from "@/hooks/useShopping";
import ProductItem from "@/components/ProductItem.vue";

export default defineComponent({
  name: "ProductList",

  components: {
    ProductItem
  },

  setup() {
    const { products, handleAddProduct, handleRemoveProduct } = useShopping();

    return {
      products,
      handleAddProduct,
      handleRemoveProduct
    };
  }
});
</script>
