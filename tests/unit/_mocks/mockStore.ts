import Shopping from "@/infrastructure/store/shopping";
import mockShoppingState from "./mockShoppingState";

const mockStore = {
  ...Shopping,
  state: mockShoppingState()
};

export default mockStore;
