import mockShoppingState from "./mockShoppingState";

export default function mockContext() {
  return {
    commit: jest.fn(),
    dispatch: jest.fn(),
    state: mockShoppingState(),
    getters: jest.fn(),
    rootState: {
      shopping: { ...mockShoppingState() }
    },
    rootGetters: jest.fn()
  };
}
