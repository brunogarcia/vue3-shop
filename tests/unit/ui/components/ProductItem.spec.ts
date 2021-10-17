import { render, fireEvent } from "@testing-library/vue";
import ProductItem from "@/ui/components/ProductItem.vue";

describe("ProductItem.vue", () => {
  it("Render product image", () => {
    const { getByAltText } = render(ProductItem, {
      props: {
        product: {
          id: "X3W2OPY",
          code: "CAP",
          name: "Cap",
          price: 5,
          currency: "€",
          discounts: ["TWO_X_ONE"]
        }
      }
    });

    const imageSrc = getByAltText(/Cap/i).getAttribute("src");
    expect(imageSrc).toBe("/img/cap.png");
  });

  it("Render product description", () => {
    const { getByText } = render(ProductItem, {
      props: {
        product: {
          id: "X3W2OPY",
          code: "CAP",
          name: "Cap",
          price: 5,
          currency: "€",
          discounts: ["TWO_X_ONE"]
        }
      }
    });

    getByText("Cap");
    getByText("X3W2OPY");
  });

  it("Render product price", () => {
    const { getByText } = render(ProductItem, {
      props: {
        product: {
          id: "X3W2OPY",
          code: "CAP",
          name: "Cap",
          price: 5,
          currency: "€",
          discounts: ["TWO_X_ONE"]
        }
      }
    });

    getByText("5");
  });

  it("Render product price total", () => {
    const { getByText } = render(ProductItem, {
      props: {
        product: {
          id: "X3W2OPY",
          code: "CAP",
          name: "Cap",
          price: 5,
          currency: "€",
          discounts: ["TWO_X_ONE"]
        }
      }
    });

    getByText("0");
  });

  it("Add a product must update the local state", async () => {
    const { getByTestId } = render(ProductItem, {
      props: {
        product: {
          id: "X3W2OPY",
          code: "CAP",
          name: "Cap",
          price: 5,
          currency: "€",
          discounts: ["TWO_X_ONE"]
        }
      }
    });

    // Find the button
    const button = getByTestId("add-product");

    // Add a couple of products
    await fireEvent.click(button);
    await fireEvent.click(button);

    // Asserts
    expect(getByTestId("product-quantity")).toHaveValue("2");
    expect(getByTestId("product-price-total")).toHaveTextContent("10");
  });

  it("Add a product must emit an event", async () => {
    const expectedClick = ["click", [[], []]];
    const expectedAddProduct = ["add-product", [["CAP"], ["CAP"]]];

    const { getByTestId, emitted } = render(ProductItem, {
      props: {
        product: {
          id: "X3W2OPY",
          code: "CAP",
          name: "Cap",
          price: 5,
          currency: "€",
          discounts: ["TWO_X_ONE"]
        }
      }
    });

    // Find the button
    const button = getByTestId("add-product");

    // Add a couple of products
    await fireEvent.click(button);
    await fireEvent.click(button);

    // Get events emitted
    const [inputEventEmitted, addProductEventEmitted] = Object.entries(
      emitted()
    );

    expect(inputEventEmitted).toEqual(expectedClick);
    expect(addProductEventEmitted).toEqual(expectedAddProduct);
  });

  it("Remove a product must update the local state ", async () => {
    const { getByTestId } = render(ProductItem, {
      props: {
        product: {
          id: "X3W2OPY",
          code: "CAP",
          name: "Cap",
          price: 5,
          currency: "€",
          discounts: ["TWO_X_ONE"]
        }
      }
    });

    // Find the buttons
    const buttonAdd = getByTestId("add-product");
    const buttonRemove = getByTestId("remove-product");

    // Add a couple of products
    await fireEvent.click(buttonAdd);
    await fireEvent.click(buttonAdd);

    // And then remove one product
    await fireEvent.click(buttonRemove);

    // Asserts
    expect(getByTestId("product-quantity")).toHaveValue("1");
    expect(getByTestId("product-price-total")).toHaveTextContent("5");
  });

  it("Remove a product must emit an event", async () => {
    const expectedClick = ["click", [[], [], []]];
    const expectedEventAdd = ["add-product", [["CAP"], ["CAP"]]];
    const expectedEventRemove = ["remove-product", [["CAP"]]];

    const { getByTestId, emitted } = render(ProductItem, {
      props: {
        product: {
          id: "X3W2OPY",
          code: "CAP",
          name: "Cap",
          price: 5,
          currency: "€",
          discounts: ["TWO_X_ONE"]
        }
      }
    });

    // Find the buttons
    const buttonAdd = getByTestId("add-product");
    const buttonRemove = getByTestId("remove-product");

    // Add a couple of products
    await fireEvent.click(buttonAdd);
    await fireEvent.click(buttonAdd);

    // And then remove one product
    await fireEvent.click(buttonRemove);

    // Get the events emitted
    const [
      inputEventEmitted,
      addProductEventEmitted,
      removeEventEmitted
    ] = Object.entries(emitted());

    // Asserts
    expect(inputEventEmitted).toEqual(expectedClick);
    expect(addProductEventEmitted).toEqual(expectedEventAdd);
    expect(removeEventEmitted).toEqual(expectedEventRemove);
  });
});
