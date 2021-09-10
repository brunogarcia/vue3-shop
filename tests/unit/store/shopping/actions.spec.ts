import PRODUCT_CODE from "@/enums/product";
import SHOPPING_MUTATION from "@/enums/shopping";
import actions from "@/store/shopping/actions";
import { StateRoot, StateShopping } from "@/types";
import { ActionContext } from "vuex";
import mockContext from "../../mocks/mockContext";

const {
  SAVE_TOTAL_COST,
  SAVE_TOTAL_ITEMS,
  SAVE_DISCOUNTS_APPLIED,
  SAVE_TOTAL_COST_WITH_DISCOUNTS
} = SHOPPING_MUTATION;

jest.mock("@/middleware/checkout");

type ModuleAction<StateShopping> = (
  injectee: ActionContext<StateShopping, StateRoot>,
  payload?: string
) => void;

const initShoppingCart = actions.initShoppingCart as ModuleAction<
  StateShopping
>;
const scanProduct = actions.scanProduct as ModuleAction<StateShopping>;
const removeProduct = actions.removeProduct as ModuleAction<StateShopping>;

describe("Shopping store - Actions", () => {
  it("Scan product", async () => {
    await initShoppingCart(mockContext);
    scanProduct(mockContext, PRODUCT_CODE.CAP);

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
    await initShoppingCart(mockContext);
    removeProduct(mockContext, PRODUCT_CODE.CAP);

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
