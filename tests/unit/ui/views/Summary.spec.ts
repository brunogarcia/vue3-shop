import { shallowMount } from "@vue/test-utils";
import Summary from "@/ui/views/Summary.vue";
import Title from "@/ui/components/Title.vue";
import SummaryItems from "@/ui/components/SummaryItems.vue";
import SummaryDiscounts from "@/ui/components/SummaryDiscounts.vue";
import SummaryTotal from "@/ui/components/SummaryTotal.vue";

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
