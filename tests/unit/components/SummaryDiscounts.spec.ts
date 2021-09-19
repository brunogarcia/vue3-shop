import renderComponent from "../utils/renderComponent";
import SummaryDiscounts from "@/components/SummaryDiscounts.vue";

describe("SummaryDiscounts.vue", () => {
  it("Must display the list of discounts", () => {
    const { getByText } = renderComponent(SummaryDiscounts);

    getByText(/test literal 1/i);
    getByText(/-3€/i);
    getByText(/test literal 2/i);
    getByText(/-9€/i);
  });
});
