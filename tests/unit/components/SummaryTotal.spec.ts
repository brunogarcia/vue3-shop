import { shallowMount } from "@vue/test-utils";
import SummaryTotal from "@/components/SummaryTotal.vue";
import mockStore from "../mocks/mockStore";

const store = mockStore();

describe("SummaryTotal.vue", () => {
  it("Must display the total cost with discounts", () => {
    const wrapper = shallowMount(SummaryTotal, {
      global: {
        plugins: [store]
      }
    });

    expect(wrapper.find('[data-test="summary-total-price"]').text()).toBe(
      "23€"
    );
  });
});
