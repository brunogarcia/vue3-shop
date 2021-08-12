import { ActionContext } from "vuex";
import { State, StateModal } from "@/types";
import MODAL_MUTATION from "@/enums/modal";

const { DISPLAY } = MODAL_MUTATION;

/**
 * Update the modal state
 *
 * @param {ActionContext} context - Vuex Action Context
 * @param {boolean} flag - Flag for update the modal state
 */
function updateModal(
  { commit }: ActionContext<StateModal, State>,
  flag: boolean
) {
  commit(DISPLAY, flag);
}

export default {
  updateModal
};
