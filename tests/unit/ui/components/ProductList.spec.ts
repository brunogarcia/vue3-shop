import renderComponent from "../helpers/renderComponent";
import ProductList from "@/ui/components/ProductList.vue";

describe("ProductList.vue", () => {
  it("Must render the products", () => {
    const { getByText } = renderComponent(ProductList);

    getByText("Cap");
    getByText("Shirt");
    getByText("Mug");
  });
});
