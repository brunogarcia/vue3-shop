<template>
  <ul class="products-list" data-test="products-list">
    <ProductItem
      v-for="(product, id) in products"
      :key="id"
      :product="product"
    />
  </ul>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
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
  }
});
</script>
