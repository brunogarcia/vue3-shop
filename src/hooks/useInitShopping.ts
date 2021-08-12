import { onMounted } from "vue";
import { useStore } from "vuex";

export default function useInitShopping() {
  const store = useStore();

  onMounted(() => {
    const initShopping = () => store.dispatch("shopping/initShoppingCart");
    initShopping();
  });
}
