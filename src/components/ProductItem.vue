<template>
  <li class="product row">
    <!--Image and description-->
    <div class="col-product">
      <figure class="product-image">
        <img :src="getProductImage(product.code)" :alt="product.name" />
        <div class="product-description">
          <h1>{{ product.name }}</h1>
          <p class="product-code">
            Product code
            <span>{{ product.id }}</span>
          </p>
        </div>
      </figure>
    </div>

    <!--Quantity-->
    <div class="col-quantity">
      <shop-button
        classes="icon"
        data-testid="remove-product"
        @click="removeProduct()"
      >
        -
      </shop-button>
      <input
        v-model.number="quantity"
        type="text"
        class="product-quantity"
        data-testid="product-quantity"
        disabled
      />
      <shop-button
        classes="icon"
        data-testid="add-product"
        @click="addProduct()"
      >
        +
      </shop-button>
    </div>

    <!--Price-->
    <div class="col-price">
      <span class="product-price">
        {{ product.price }}
      </span>
      <span class="product-currency currency">
        {{ product.currency }}
      </span>
    </div>

    <!--Price total-->
    <div class="col-total">
      <span class="product-price" data-testid="product-price-total">
        {{ priceTotal }}
      </span>
      <span
        class="product-currency currency"
        data-testid="product-price-total-currency"
      >
        {{ product.currency }}
      </span>
    </div>
  </li>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
import { Product } from "@/types";
import isValidProductCode from "@/utils/isValidProductCode";
import EVENT from "@/enums/event";
import PRODUCT_CODE from "@/enums/product";
import ShopButton from "@/components/core/Button.vue";

const { ADD_PRODUCT, REMOVE_PRODUCT } = EVENT;

export default defineComponent({
  name: "ProductItem",

  components: {
    ShopButton
  },

  props: {
    product: {
      required: true,
      type: Object as () => Product
    }
  },

  emits: {
    [ADD_PRODUCT]: (code: PRODUCT_CODE) => {
      if (isValidProductCode(code)) {
        return true;
      } else {
        console.warn("Invalid payload for the add-product event");
        return false;
      }
    },
    [REMOVE_PRODUCT]: (code: PRODUCT_CODE) => {
      if (isValidProductCode(code)) {
        return true;
      } else {
        console.warn("Invalid payload for the remove-product event");
        return false;
      }
    }
  },

  setup(props, { emit }) {
    const quantity = ref(0);

    const priceTotal = computed(() => props.product.price * quantity.value);

    const addProduct = () => {
      quantity.value++;
      emit(ADD_PRODUCT, props.product.code);
    };

    const removeProduct = () => {
      if (quantity.value > 0) {
        quantity.value -= 1;
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
