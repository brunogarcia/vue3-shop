import { StateModal } from "@/types";
import MODAL_MUTATION from "@/enums/modal";

const { DISPLAY } = MODAL_MUTATION;

export default {
  [DISPLAY](state: StateModal, payload: boolean) {
    state.display = payload;
  }
};
