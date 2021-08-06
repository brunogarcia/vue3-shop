import { StateModal } from "@/types";
import MutationType from "@/store/modal/utils/mutation_type";

const { DISPLAY } = MutationType;

export default {
  [DISPLAY](state: StateModal, payload: boolean) {
    state.display = payload;
  }
};
