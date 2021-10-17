<template>
  <section class="products">
    <Title title="Shopping cart"></Title>
    <ProductHead />
    <ProductList />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "@/ui/components/Title.vue";
import ProductHead from "@/ui/components/ProductHead.vue";
import ProductList from "@/ui/components/ProductList.vue";

export default defineComponent({
  name: "Products",
  components: {
    Title,
    ProductHead,
    ProductList
  }
});
</script>

<style>
.products {
  padding: 40px 32px 40px 56px;
}

.products {
  flex: 1;
}

.products-list {
  position: relative;
  width: 100%;
}

.product .clear {
  border: none;
  background: transparent;
}

.product .clear span {
  position: relative;
  display: block;
  width: 16px;
  height: 16px;
}

.product .clear span:before,
.product .clear span:after {
  content: "";
  position: absolute;
  top: 8px;
  left: 2px;
  display: block;
  width: 12px;
  height: 2px;
  border-radius: 8px;
  background-color: #a6a7b3;
  transform: rotate(-45deg);
  transform-origin: center center;
}

.product .clear span:before {
  transform: rotate(45deg);
}
</style>
