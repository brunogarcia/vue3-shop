import PRODUCT from "@/enums/product";
import actions from "@/store/shopping/actions";
import mockContext from "../../mocks/mockContext";
import MUTATION_TYPE from "@/store/shopping/utils/mutation_type";

const {
  SAVE_TOTAL_COST,
  SAVE_TOTAL_ITEMS,
  SAVE_DISCOUNTS_APPLIED,
  SAVE_TOTAL_COST_WITH_DISCOUNTS
} = MUTATION_TYPE;

jest.mock("@/middleware/checkout");

describe("Shopping store - Actions", () => {
  it("Scan product", async () => {
    const context = mockContext();

    await actions.initShoppingCart(context);
    actions.scanProduct(context, PRODUCT.CAP);

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
    actions.removeProduct(context, PRODUCT.CAP);

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
