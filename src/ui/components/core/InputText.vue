<template>
  <input
    type="text"
    :value="modelValue"
    @input="updateInput"
    :disabled="disabled"
    :data-testid="testId"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ShopInputText",

  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    disabled: {
      default: false,
      type: Boolean
    },
    testId: {
      default: "",
      type: String
    }
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const updateInput = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };

    return {
      updateInput
    };
  }
});
</script>

<style scoped>
input {
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  border-radius: 4px;
  border: 2px solid #dbdbe0;
  width: 40px;
  height: 40px;
}
</style>
