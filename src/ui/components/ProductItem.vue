<template>
  <li class="product row">
    <!--Image and description-->
    <div class="col-product">
      <shop-figure :product="product" />
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

      <shop-input-text
        v-model.number="quantity"
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

import { Product, PRODUCT_CODE } from "@/domain/checkout/checkout.types";

import EVENT from "@/ui/types/event";
import isValidProductCode from "@/ui/utils/isValidProductCode";

import ShopButton from "@/ui/components/core/Button.vue";
import ShopInputText from "@/ui/components/core/InputText.vue";
import ShopFigure from "@/ui/components/core/Figure.vue";

const { ADD_PRODUCT, REMOVE_PRODUCT } = EVENT;

export default defineComponent({
  name: "ProductItem",

  components: {
    ShopButton,
    ShopInputText,
    ShopFigure
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

    return {
      quantity,
      priceTotal,
      addProduct,
      removeProduct
    };
  }
});
</script>

<style scoped>
.product h1 {
  color: #00a0df;
}

.product-price {
  color: #000000;
  font-size: 16px;
}
</style>
