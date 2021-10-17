import { createApp } from "vue";

import App from "@/ui/App.vue";
import { store, key } from "@/infrastructure/store";

createApp(App)
  .use(store, key)
  .mount("#app");
