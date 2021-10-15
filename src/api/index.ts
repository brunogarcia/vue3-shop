import { Product } from "@/domain/checkout/checkout.types";

/**
 * Mock API response
 */
function mockProducts() {
  return import(
    /* webpackChunkName: "async-mock-products" */ "@/api/mocks/products.json"
  );
}

/**
 * Fetch the product list
 *
 * @returns {Product[]} Product list
 */
async function products(): Promise<Product[]> {
  const data = await mockProducts();
  return Promise.resolve(data.default as Product[]);
}

export default {
  products
};
