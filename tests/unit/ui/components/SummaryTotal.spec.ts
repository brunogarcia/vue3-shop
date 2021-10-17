import SummaryTotal from "@/ui/components/SummaryTotal.vue";
import renderComponent from "../helpers/renderComponent";

describe("SummaryTotal.vue", () => {
  it("Must display the total cost with discounts", () => {
    const { getByText } = renderComponent(SummaryTotal);

    getByText(/Total to pay/i);
    getByText(/23€/i);
  });
});
