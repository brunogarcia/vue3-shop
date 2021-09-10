import { StateRoot, StateShopping } from "@/types";
import { ActionContext } from "vuex";
import mockShoppingState from "./mockShoppingState";

const mockContext: ActionContext<StateShopping, StateRoot> = {
  dispatch: jest.fn(),
  commit: jest.fn(),
  state: mockShoppingState(),
  getters: jest.fn(),
  rootState: {
    shopping: { ...mockShoppingState() }
  },
  rootGetters: jest.fn()
};

export default mockContext;
