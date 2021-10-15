import { StateRoot } from "@/store/types";
import { Product, Summary } from "@/domain/checkout/checkout.types";

const products: Product[] = [];

const summary: Summary = {
  totalCost: 0,
  totalItems: 0,
  discountsApplied: [],
  totalCostWithDiscounts: 0
};

const initialState: StateRoot = {
  products,
  summary
};

export default initialState;
