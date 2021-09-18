import { onMounted } from "vue";
import { useStore } from "vuex";

import { ACTIONS } from "@/enums/shopping";

export default function useInitShopping() {
  const store = useStore();

  onMounted(() => {
    const initShopping = (): Promise<void> =>
      store.dispatch(ACTIONS.INIT_SHOPPING_CART);
    initShopping();
  });
}
