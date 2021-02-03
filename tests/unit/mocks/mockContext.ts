import mockState from "./mockState";

export default function mockContext() {
  return {
    commit: jest.fn(),
    dispatch: jest.fn(),
    state: mockState(),
    getters: jest.fn(),
    rootState: mockState(),
    rootGetters: jest.fn()
  };
}
