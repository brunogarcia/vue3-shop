<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="classes"
    :data-testid="testId"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ShopButton",

  props: {
    type: {
      default: "button",
      type: String as PropType<"button" | "submit" | "reset">
    },
    disabled: {
      default: false,
      type: Boolean
    },
    classes: {
      default: "button",
      type: String as PropType<"button" | "icon">
    },
    testId: {
      default: "",
      type: String
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const onClick = () => emit("click");

    return {
      onClick
    };
  }
});
</script>

<style scoped>
button.button {
  margin-top: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  border-radius: 4px;
  background: #00a0df;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  cursor: pointer;
}

button:disabled {
  background: #eee;
  color: #333;
  border: solid 1px #999;
  opacity: 0.5;
  cursor: auto;
}

button.icon {
  font-size: 20px;
  line-height: 25px;
  padding: 0 8px;
  height: 40px;
  border: none;
  background: transparent;
  color: #00a0df;
  font-weight: bold;
  cursor: pointer;
}
</style>
