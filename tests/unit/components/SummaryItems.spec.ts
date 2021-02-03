import { shallowMount } from "@vue/test-utils";
import SummaryItems from "@/components/SummaryItems.vue";
import mockStore from "../mocks/mockStore";

const store = mockStore();

describe("SummaryItems.vue", () => {
  it("Must display the total items", () => {
    const wrapper = shallowMount(SummaryItems, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.find('[data-test="summary-items-number"]').text()).toBe(
      "5 Items"
    );
  });

  it("Must display the total cost", () => {
    const wrapper = shallowMount(SummaryItems, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.find('[data-test="summary-items-price"]').text()).toBe(
      "40 €"
    );
  });
});
