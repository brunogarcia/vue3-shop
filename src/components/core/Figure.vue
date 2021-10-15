<template>
  <figure class="figure">
    <img
      :src="getProductImage(product.code)"
      :alt="product.name"
      loading="lazy"
    />
    <div class="description">
      <h1>{{ product.name }}</h1>
      <p class="code">
        Product code
        <span>{{ product.id }}</span>
      </p>
    </div>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "@/domain/checkout/checkout.types";

export default defineComponent({
  name: "ShopFigure",

  props: {
    product: {
      required: true,
      type: Object as () => Product
    }
  },

  setup() {
    const getProductImage = (code: string): string => {
      return `/img/${code.toLowerCase()}.png`;
    };

    return {
      getProductImage
    };
  }
});
</script>

<style scoped>
.figure {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
}

.figure img {
  margin-right: 16px;
  width: 72px;
  height: 72px;
  border: 1px solid #cacad1;
  border-radius: 4px;
}

.code {
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  color: #a6a7b3;
  letter-spacing: 0.13px;
  font-weight: 400;
}
</style>
