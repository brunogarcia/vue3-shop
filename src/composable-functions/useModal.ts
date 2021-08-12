import { ref } from "vue";

export default function useModal() {
  const displayModal = ref(false);

  const handleHideModal = () => (displayModal.value = false);

  const handleDisplayModal = () => (displayModal.value = true);

  return {
    displayModal,
    handleHideModal,
    handleDisplayModal
  };
}
