import { shallowMount } from "@vue/test-utils";
import SummaryDiscounts from "@/components/SummaryDiscounts.vue";
import mockStore from "../mocks/mockStore";

const store = mockStore();

describe("SummaryDiscounts.vue", () => {
  it("Must display the list of discounts", () => {
    const wrapper = shallowMount(SummaryDiscounts, {
      global: {
        plugins: [store]
      }
    });

    const [firstItem, secondItem] = wrapper.findAll("li");

    const firstItemLiteral = firstItem
      .find('[data-test="discount-literal"]')
      .text();

    const firstItemTotal = firstItem
      .find('[data-test="discount-total"]')
      .text();

    const secondItemLiteral = secondItem
      .find('[data-test="discount-literal"]')
      .text();

    const secondItemTotal = secondItem
      .find('[data-test="discount-total"]')
      .text();

    expect(firstItemLiteral).toBe("test literal 1");
    expect(firstItemTotal).toBe("-3€");
    expect(secondItemLiteral).toBe("test literal 2");
    expect(secondItemTotal).toBe("-9€");
  });
});
