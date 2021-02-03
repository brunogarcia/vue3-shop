import { shallowMount } from "@vue/test-utils";
import Summary from "@/views/Summary.vue";
import Title from "@/components/Title.vue";
import SummaryItems from "@/components/SummaryItems.vue";
import SummaryDiscounts from "@/components/SummaryDiscounts.vue";
import SummaryTotal from "@/components/SummaryTotal.vue";

describe("Summary.vue", () => {
  it("Must use Title component", () => {
    const wrapper = shallowMount(Summary);
    expect(wrapper.findComponent(Title).exists()).toBeTruthy;
  });

  it("Must use SummaryItems component", () => {
    const wrapper = shallowMount(Summary);
    expect(wrapper.findComponent(SummaryItems).exists()).toBeTruthy;
  });

  it("Must use SummaryDiscounts component", () => {
    const wrapper = shallowMount(Summary);
    expect(wrapper.findComponent(SummaryDiscounts).exists()).toBeTruthy;
  });

  it("Must use SummaryTotal component", () => {
    const wrapper = shallowMount(Summary);
    expect(wrapper.findComponent(SummaryTotal).exists()).toBeTruthy;
  });
});
