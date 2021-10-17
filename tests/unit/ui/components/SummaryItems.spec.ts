import renderComponent from "../helpers/renderComponent";
import SummaryItems from "@/ui/components/SummaryItems.vue";

describe("SummaryItems.vue", () => {
  it("Must display the total items", () => {
    const { getByTestId } = renderComponent(SummaryItems);
    expect(getByTestId("summary-items-number")).toHaveTextContent("5 Items");
  });

  it("Must display the total cost", () => {
    const { getByTestId } = renderComponent(SummaryItems);
    expect(getByTestId("summary-items-price")).toHaveTextContent("40 €");
  });
});
