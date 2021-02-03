<template>
  <li class="product row">
    <!--Image and description-->
    <div class="col-product">
      <figure class="product-image">
        <img :src="getProductImage(product.code)" :alt="product.name" />
        <div class="product-description">
          <h1>{{ product.name }}</h1>
          <p class="product-code">
            Product code <span data-test="product-code">{{ product.id }}</span>
          </p>
        </div>
      </figure>
    </div>

    <!--Quantity-->
    <div class="col-quantity">
      <button class="count" data-test="remove-product">
        -
      </button>
      <input
        v-model.number="quantity"
        type="text"
        class="product-quantity"
        data-test="product-quantity"
        disabled
      />
      <button class="count" data-test="add-product">
        +
      </button>
    </div>

    <!--Price-->
    <div class="col-price">
      <span class="product-price" data-test="product-price">
        {{ product.price }}
      </span>
      <span
        class="product-currency currency"
        data-test="product-price-currency"
      >
        {{ product.currency }}
      </span>
    </div>

    <!--Price total-->
    <div class="col-total">
      <span class="product-price" data-test="product-price-total">
        {{ priceTotal }}
      </span>
      <span
        class="product-currency currency"
        data-test="product-price-total-currency"
      >
        {{ product.currency }}
      </span>
    </div>
  </li>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { PricingRule } from "@/types";

export default defineComponent({
  name: "ProductItem",

  props: {
    product: {
      required: true,
      type: Object as () => PricingRule
    }
  },

  setup() {
    const quantity = ref(0);
    const priceTotal = ref(0);

    const getProductImage = (code: string): string => {
      return `/img/${code.toLowerCase()}.png`;
    };

    return {
      quantity,
      priceTotal,
      getProductImage
    };
  }
});
</script>

<style scoped>
.product-image {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
}

.product-image img {
  margin-right: 16px;
  width: 72px;
  height: 72px;
  border: 1px solid #cacad1;
  border-radius: 4px;
}

.product h1 {
  color: #00a0df;
}

.product-code {
  border-radius: 4px;
  color: #a6a7b3;
  letter-spacing: 0.13px;
  font-weight: 400;
}

.product-quantity {
  width: 40px;
  height: 40px;
  border: 2px solid #dbdbe0;
  border-radius: 4px;
  text-align: center;
}

.product-price {
  color: #000000;
  font-size: 16px;
}
</style>
