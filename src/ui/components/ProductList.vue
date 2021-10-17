<template>
  <ul class="products-list" data-testid="products-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-product="addProduct"
      @remove-product="removeProduct"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useShoppingProducts from "@/application/services/useShoppingProducts";
import ProductItem from "@/ui/components/ProductItem.vue";

export default defineComponent({
  name: "ProductList",

  components: {
    ProductItem
  },

  setup() {
    const { products, addProduct, removeProduct } = useShoppingProducts();

    return {
      products,
      addProduct,
      removeProduct
    };
  }
});
</script>
