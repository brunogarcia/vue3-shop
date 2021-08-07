import { render } from "@testing-library/vue";
import SummaryTotal from "@/components/SummaryTotal.vue";
import store from "../mocks/mockStore";

xdescribe("SummaryTotal.vue", () => {
  it("Must display the total cost with discounts", () => {
    const { getByText } = render(SummaryTotal, { store });

    getByText(/Total cost/i);
    getByText(/23€/i);
  });
});
