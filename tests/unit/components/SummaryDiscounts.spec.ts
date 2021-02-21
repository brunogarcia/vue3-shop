import { render } from "@testing-library/vue";
import SummaryDiscounts from "@/components/SummaryDiscounts.vue";
import store from "../mocks/mockStore";

describe("SummaryDiscounts.vue", () => {
  it("Must display the list of discounts", () => {
    const { getByText } = render(SummaryDiscounts, { store });

    getByText(/test literal 1/i);
    getByText(/-3€/i);
    getByText(/test literal 2/i);
    getByText(/-9€/i);
  });
});
