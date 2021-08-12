import PRODUCT_CODE from "@/enums/product";
import SHOPPING_MUTATION from "@/enums/shopping";
import actions from "@/store/shopping/actions";
import mockContext from "../../mocks/mockContext";

const {
  SAVE_TOTAL_COST,
  SAVE_TOTAL_ITEMS,
  SAVE_DISCOUNTS_APPLIED,
  SAVE_TOTAL_COST_WITH_DISCOUNTS
} = SHOPPING_MUTATION;

jest.mock("@/middleware/checkout");

describe("Shopping store - Actions", () => {
  it("Scan product", async () => {
    const context = mockContext();

    await actions.initShoppingCart(context);
    actions.scanProduct(context, PRODUCT_CODE.CAP);

    expect(context.commit).toHaveBeenCalledWith(SAVE_TOTAL_COST, 120);
    expect(context.commit).toHaveBeenCalledWith(SAVE_TOTAL_ITEMS, 10);
    expect(context.commit).toHaveBeenCalledWith(
      SAVE_TOTAL_COST_WITH_DISCOUNTS,
      100
    );
    expect(context.commit).toHaveBeenCalledWith(SAVE_DISCOUNTS_APPLIED, [
      {
        code: "test",
        literal: "test",
        total: 5
      }
    ]);
  });

  it("Remove product", async () => {
    const context = mockContext();

    await actions.initShoppingCart(context);
    actions.removeProduct(context, PRODUCT_CODE.CAP);

    expect(context.commit).toHaveBeenCalledWith(SAVE_TOTAL_COST, 120);
    expect(context.commit).toHaveBeenCalledWith(SAVE_TOTAL_ITEMS, 10);
    expect(context.commit).toHaveBeenCalledWith(
      SAVE_TOTAL_COST_WITH_DISCOUNTS,
      100
    );
    expect(context.commit).toHaveBeenCalledWith(SAVE_DISCOUNTS_APPLIED, [
      {
        code: "test",
        literal: "test",
        total: 5
      }
    ]);
  });
});
