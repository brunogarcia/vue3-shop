import { shallowMount } from "@vue/test-utils";
import ProductList from "@/components/ProductList.vue";
import ProductItem from "@/components/ProductItem.vue";
import mockStore from "../mocks/mockStore";

const store = mockStore();

describe("ProductList.vue", () => {
  it("Must have a main container", () => {
    const wrapper = shallowMount(ProductList, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.find('[data-test="products-list"]').exists()).toBeTruthy();
  });

  it("Must use ProductItem component", () => {
    const wrapper = shallowMount(ProductList, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.findAllComponents(ProductItem).length).toBe(3);
  });
});
