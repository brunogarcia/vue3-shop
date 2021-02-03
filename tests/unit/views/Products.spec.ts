import { shallowMount } from "@vue/test-utils";
import Products from "@/views/Products.vue";
import Title from "@/components/Title.vue";
import ProductsHead from "@/components/ProductsHead.vue";
import ProductList from "@/components/ProductList.vue";

describe("Products.vue", () => {
  it("Must use Title component", () => {
    const wrapper = shallowMount(Products);
    expect(wrapper.findComponent(Title).exists()).toBeTruthy;
  });

  it("Must use ProductsHead component", () => {
    const wrapper = shallowMount(Products);
    expect(wrapper.findComponent(ProductsHead).exists()).toBeTruthy;
  });

  it("Must use ProductList component", () => {
    const wrapper = shallowMount(Products);
    expect(wrapper.findComponent(ProductList).exists()).toBeTruthy;
  });
});
