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
      <button class="count" data-test="remove-product" @click="removeProduct()">
        -
      </button>
      <input
        v-model.number="quantity"
        type="text"
        class="product-quantity"
        data-test="product-quantity"
        disabled
      />
      <button class="count" data-test="add-product" @click="addProduct()">
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
import EVENT from "@/enums/event";
import PRODUCT from "@/enums/product";

const { ADD_PRODUCT, REMOVE_PRODUCT } = EVENT;

export default defineComponent({
  name: "ProductItem",

  props: {
    product: {
      required: true,
      type: Object as () => PricingRule
    }
  },

  emits: {
    [ADD_PRODUCT]: (code: PRODUCT) => {
      if (Object.values(PRODUCT).includes(PRODUCT[code])) {
        return true;
      } else {
        console.warn("Invalid payload for the add-product event");
        return false;
      }
    },
    [REMOVE_PRODUCT]: (code: PRODUCT) => {
      if (Object.values(PRODUCT).includes(PRODUCT[code])) {
        return true;
      } else {
        console.warn("Invalid payload for the remove-product event");
        return false;
      }
    }
  },

  setup(props, { emit }) {
    const quantity = ref(0);
    const priceTotal = ref(0);

    const updatePriceTotal = () => {
      priceTotal.value = props.product.price * quantity.value;
    };

    const addProduct = () => {
      quantity.value++;
      updatePriceTotal();
      emit(ADD_PRODUCT, props.product.code);
    };

    const removeProduct = () => {
      if (quantity.value > 0) {
        quantity.value -= 1;
        updatePriceTotal();
        emit(REMOVE_PRODUCT, props.product.code);
      }
    };

    const getProductImage = (code: string): string => {
      return `/img/${code.toLowerCase()}.png`;
    };

    return {
      quantity,
      priceTotal,
      addProduct,
      removeProduct,
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
