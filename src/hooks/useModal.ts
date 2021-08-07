import { computed } from "vue";
import { useStore } from "vuex";

export default function useModal() {
  const store = useStore();

  const displayModal = computed(() => store.getters["modal/display"]);

  const handleHideModal = () => store.dispatch("modal/updateModal", false);

  const handleDisplayModal = () => store.dispatch("modal/updateModal", true);

  return {
    displayModal,
    handleHideModal,
    handleDisplayModal
  };
}
