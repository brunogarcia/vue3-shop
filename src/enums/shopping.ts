export enum MUTATION {
  SAVE_PRODUCTS = "SAVE_PRODUCTS",
  SAVE_TOTAL_COST = "SAVE_TOTAL_COST",
  SAVE_TOTAL_ITEMS = "SAVE_TOTAL_ITEMS",
  SAVE_DISCOUNTS_APPLIED = "SAVE_DISCOUNTS_APPLIED",
  SAVE_TOTAL_COST_WITH_DISCOUNTS = "SAVE_TOTAL_COST_WITH_DISCOUNTS"
}

export enum ACTIONS {
  INIT_SHOPPING_CART = "INIT_SHOPPING_CART",
  SCAN_PRODUCT = "SCAN_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT"
}

export enum GETTERS {
  PRODUCTS = "PRODUCTS",
  TOTAL_COST = "TOTAL_COST",
  TOTAL_ITEMS = "TOTAL_ITEMS",
  DISCOUNTS_APPLIED = "DISCOUNTS_APPLIED",
  TOTAL_COST_WITH_DISCOUNTS = "TOTAL_COST_WITH_DISCOUNTS",
  HAS_TOTAL_COST = "HAS_TOTAL_COST",
  HAS_DISCOUNTS_APPLIED = "HAS_DISCOUNTS_APPLIED"
}
