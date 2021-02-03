import { shallowMount } from "@vue/test-utils";
import ProductItem from "@/components/ProductItem.vue";

describe("ProductItem.vue", () => {
  it("Render product image", () => {
    const wrapper = shallowMount(ProductItem, {
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

    const imageSrc = wrapper.find("img").attributes("src");
    const imageAlt = wrapper.find("img").attributes("alt");

    expect(imageSrc).toBe("/img/cap.png");
    expect(imageAlt).toBe("Cap");
  });

  it("Render product description", () => {
    const wrapper = shallowMount(ProductItem, {
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

    const productTitle = wrapper.find("h1").text();
    const productCode = wrapper.find('[data-test="product-code"]').text();

    expect(productTitle).toBe("Cap");
    expect(productCode).toBe("X3W2OPY");
  });

  it("Render product price and currency", () => {
    const wrapper = shallowMount(ProductItem, {
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

    const price = wrapper.find('[data-test="product-price"]').text();
    const priceCurrency = wrapper
      .find('[data-test="product-price-currency"]')
      .text();

    expect(price).toBe("5");
    expect(priceCurrency).toBe("€");
  });

  it("Render product price total and currency", () => {
    const wrapper = shallowMount(ProductItem, {
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

    const priceTotal = wrapper.find('[data-test="product-price-total"]').text();
    const totalCurrency = wrapper
      .find('[data-test="product-price-total-currency"]')
      .text();

    expect(priceTotal).toBe("0");
    expect(totalCurrency).toBe("€");
  });

  it("Add a product must update the local state", async () => {
    const wrapper = shallowMount(ProductItem, {
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
    const addProductButton = wrapper.find('[data-test="add-product"]');

    // Add a couple of products
    await addProductButton.trigger("click");
    await addProductButton.trigger("click");

    // Get local state
    const quantity = wrapper.find("input").element.value;
    const priceTotal = wrapper.find('[data-test="product-price-total"]').text();

    // Asserts
    expect(quantity).toBe("2");
    expect(priceTotal).toBe("10");
  });

  it("Add a product must emit an event", async () => {
    const wrapper = shallowMount(ProductItem, {
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
    const addProductButton = wrapper.find('[data-test="add-product"]');

    // Add a couple of products
    await addProductButton.trigger("click");
    await addProductButton.trigger("click");

    // Get events emitted
    const addProductEvent = wrapper.emitted("addProduct");
    const [addEventPayload] = addProductEvent;

    // Asserts
    expect(addProductEvent).toBeTruthy();
    expect(addEventPayload).toEqual(["CAP"]);
  });

  it("Remove a product must update the local state ", async () => {
    const wrapper = shallowMount(ProductItem, {
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
    const addProductButton = wrapper.find('[data-test="add-product"]');
    const removeProductButton = wrapper.find('[data-test="remove-product"]');

    // First, add a couple of products
    await addProductButton.trigger("click");
    await addProductButton.trigger("click");

    // And then remove one product
    await removeProductButton.trigger("click");

    // Get the values
    const quantity = wrapper.find("input").element.value;
    const priceTotal = wrapper.find('[data-test="product-price-total"]').text();

    // Asserts
    expect(quantity).toBe("1");
    expect(priceTotal).toBe("5");
  });

  it("Remove a product must emit an event", async () => {
    const wrapper = shallowMount(ProductItem, {
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
    const addProductButton = wrapper.find('[data-test="add-product"]');
    const removeProductButton = wrapper.find('[data-test="remove-product"]');

    // First, add a couple of products
    await addProductButton.trigger("click");
    await addProductButton.trigger("click");

    // And then remove one product
    await removeProductButton.trigger("click");

    // Get the events emitted
    const addProductEvent = wrapper.emitted("addProduct");
    const [addEventPayload] = addProductEvent;
    const removeProductEvent = wrapper.emitted("removeProduct");
    const [removeEventPayload] = removeProductEvent;

    // Asserts
    expect(addProductEvent).toBeTruthy();
    expect(addEventPayload).toEqual(["CAP"]);
    expect(removeProductEvent).toBeTruthy();
    expect(removeEventPayload).toEqual(["CAP"]);
  });
});
