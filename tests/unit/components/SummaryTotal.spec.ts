import { render } from "@testing-library/vue";
import SummaryTotal from "@/components/SummaryTotal.vue";
import store from "../mocks/mockStore";

describe("SummaryTotal.vue", () => {
  it("Must display the total cost with discounts", () => {
    const { getByText } = render(SummaryTotal, { store });

    getByText(/Total to pay/i);
    getByText(/23€/i);
  });
});
