import { DefineComponent } from "@vue/runtime-dom";
import { render, RenderResult } from "@testing-library/vue";

import { key } from "@/store";
import store from "../utils/createStore";

export default function renderComponent(
  component: DefineComponent
): RenderResult {
  return render(component, {
    global: {
      plugins: [[store, key]]
    }
  });
}
