import { State, Product, Summary } from "@/types";

const products: Product[] = [];

const summary: Summary = {
  totalCost: 0,
  totalItems: 0,
  discountsApplied: [],
  totalCostWithDiscounts: 0
};

export default function initialState(): State {
  return {
    products,
    summary
  };
}
