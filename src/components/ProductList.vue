<template>
  <ul class="products-list" data-test="products-list">
    TODO
  </ul>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductList",

  computed: {
    ...mapGetters({
      products: "shopping/products"
    })
  }
});
</script>
