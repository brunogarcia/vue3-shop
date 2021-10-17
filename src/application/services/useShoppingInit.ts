import { onMounted } from "vue";
import { useStore } from "@/infrastructure/store";
import { ACTIONS } from "@/infrastructure/store/shopping/shopping.types";

export default function useShoppingInit() {
  const store = useStore();

  onMounted(() => {
    const initShopping = (): Promise<void> =>
      store.dispatch(ACTIONS.INIT_SHOPPING_CART);

    initShopping();
  });
}
