import { shallowMount } from "@vue/test-utils";
import Summary from "@/views/Summary.vue";
import Title from "@/components/Title.vue";

describe("Summary.vue", () => {
  it("Must use Title component", () => {
    const wrapper = shallowMount(Summary);
    expect(wrapper.findComponent(Title).exists()).toBeTruthy;
  });
});
