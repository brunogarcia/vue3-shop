import PRODUCT_CODE from "@/enums/product";

/**
 * Validate the product code
 *
 * @param {PRODUCT_CODE} code - The product code
 * @returns {Boolean}
 */
export default function isValidProductCode(code: PRODUCT_CODE): boolean {
  return Object.values(PRODUCT_CODE).includes(PRODUCT_CODE[code]);
}
