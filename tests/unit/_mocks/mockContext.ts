import { StateRoot } from "@/infrastructure/store/store.types";
import { ActionContext } from "vuex";
import mockShoppingState from "./mockShoppingState";

const mockContext: ActionContext<StateRoot, StateRoot> = {
  dispatch: jest.fn(),
  commit: jest.fn(),
  state: mockShoppingState(),
  getters: jest.fn(),
  rootState: {
    ...mockShoppingState()
  },
  rootGetters: jest.fn()
};

export default mockContext;
