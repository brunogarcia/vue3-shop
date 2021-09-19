import Shopping from "@/store/shopping";
import mockShoppingState from "./mockShoppingState";

const mockStore = {
  ...Shopping,
  state: mockShoppingState()
};

export default mockStore;
