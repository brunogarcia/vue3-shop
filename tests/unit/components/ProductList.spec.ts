import { render } from "@testing-library/vue";
import ProductList from "@/components/ProductList.vue";
import store from "../mocks/mockStore2";

describe("ProductList.vue", () => {
  it("Must render the products", () => {
    const { getByText } = render(ProductList, { store });

    expect(getByText("Cap")).toBeInTheDocument();
    expect(getByText("Shirt")).toBeInTheDocument();
    expect(getByText("Mug")).toBeInTheDocument();
  });
});
