import { render } from "@testing-library/vue";
import ProductList from "@/components/ProductList.vue";
import store from "../mocks/mockStore";

describe("ProductList.vue", () => {
  it("Must render the products", () => {
    const { getByText } = render(ProductList, { store });

    getByText("Cap");
    getByText("Shirt");
    getByText("Mug");
  });
});
