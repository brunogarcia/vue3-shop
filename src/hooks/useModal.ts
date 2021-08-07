import { useStore } from "vuex";

export default function useModal() {
  const store = useStore();

  const handleCheckout = () => store.dispatch("modal/updateModal", true);

  return {
    handleCheckout
  };
}
