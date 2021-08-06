import { StateModal } from "@/types";

/**
 * Display modal
 *
 * @param {StateModal} state - The modal module state
 * @returns {boolean}
 */
const display = (state: StateModal): boolean => state.display;

export default {
  display
};
