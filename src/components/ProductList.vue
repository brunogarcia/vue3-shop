<template>
  <ul class="products-list" data-test="products-list">
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
import { mapActions, mapGetters } from "vuex";
import { defineComponent } from "vue";
import PRODUCT_CODE from "@/enums/product";
import ProductItem from "@/components/ProductItem.vue";

export default defineComponent({
  name: "ProductList",

  components: {
    ProductItem
  },

  computed: {
    ...mapGetters({
      products: "shopping/products"
    })
  },

  methods: {
    ...mapActions({
      scanProduct: "shopping/scanProduct",
      removeProduct: "shopping/removeProduct"
    }),

    handleAddProduct(code: PRODUCT_CODE) {
      this.scanProduct(code);
    },

    handleRemoveProduct(code: PRODUCT_CODE) {
      this.removeProduct(code);
    }
  }
});
</script>
