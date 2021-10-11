import { ref } from "vue";

export default function useModal() {
  const isModalDisplayed = ref(false);

  const hideModal = () => (isModalDisplayed.value = false);

  const displayModal = () => (isModalDisplayed.value = true);

  return {
    isModalDisplayed,
    hideModal,
    displayModal
  };
}
