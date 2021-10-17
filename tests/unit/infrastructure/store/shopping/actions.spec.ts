import actions from "@/infrastructure/store/shopping/actions";

import { PRODUCT_CODE } from "@/domain/checkout/checkout.types";
import { MUTATION } from "@/infrastructure/store/shopping/shopping.types";

import mockContext from "../../../_mocks/mockContext";

const {
  SAVE_TOTAL_COST,
  SAVE_TOTAL_ITEMS,
  SAVE_DISCOUNTS_APPLIED,
  SAVE_TOTAL_COST_WITH_DISCOUNTS
} = MUTATION;

jest.mock("@/domain/checkout/checkout.service");

describe("Shopping store - Actions", () => {
  it("Scan product", async () => {
    await actions.INIT_SHOPPING_CART(mockContext);
    actions.SCAN_PRODUCT(mockContext, PRODUCT_CODE.CAP);

    expect(mockContext.commit).toHaveBeenCalledWith(SAVE_TOTAL_COST, 120);
    expect(mockContext.commit).toHaveBeenCalledWith(SAVE_TOTAL_ITEMS, 10);
    expect(mockContext.commit).toHaveBeenCalledWith(
      SAVE_TOTAL_COST_WITH_DISCOUNTS,
      100
    );
    expect(mockContext.commit).toHaveBeenCalledWith(SAVE_DISCOUNTS_APPLIED, [
      {
        code: "test",
        literal: "test",
        total: 5
      }
    ]);
  });

  it("Remove product", async () => {
    await actions.INIT_SHOPPING_CART(mockContext);
    actions.REMOVE_PRODUCT(mockContext, PRODUCT_CODE.CAP);

    expect(mockContext.commit).toHaveBeenCalledWith(SAVE_TOTAL_COST, 120);
    expect(mockContext.commit).toHaveBeenCalledWith(SAVE_TOTAL_ITEMS, 10);
    expect(mockContext.commit).toHaveBeenCalledWith(
      SAVE_TOTAL_COST_WITH_DISCOUNTS,
      100
    );
    expect(mockContext.commit).toHaveBeenCalledWith(SAVE_DISCOUNTS_APPLIED, [
      {
        code: "test",
        literal: "test",
        total: 5
      }
    ]);
  });
});
