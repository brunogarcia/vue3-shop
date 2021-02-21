import { render } from "@testing-library/vue";
import SummaryItems from "@/components/SummaryItems.vue";
import store from "../mocks/mockStore";

describe("SummaryItems.vue", () => {
  it("Must display the total items", () => {
    const { getByTestId } = render(SummaryItems, { store });

    expect(getByTestId("summary-items-number")).toHaveTextContent("5 Items");
  });

  it("Must display the total cost", () => {
    const { getByTestId } = render(SummaryItems, { store });

    expect(getByTestId("summary-items-price")).toHaveTextContent("40 €");
  });
});
