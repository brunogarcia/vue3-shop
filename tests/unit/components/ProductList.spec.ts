import renderComponent from "../utils/renderComponent";
import ProductList from "@/components/ProductList.vue";

describe("ProductList.vue", () => {
  it("Must render the products", () => {
    const { getByText } = renderComponent(ProductList);

    getByText("Cap");
    getByText("Shirt");
    getByText("Mug");
  });
});
