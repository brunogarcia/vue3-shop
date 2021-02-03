<template>
  <h1 class="main">{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Title",
  props: {
    title: String
  }
});
</script>

<style scoped>
h1.main {
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(33, 34, 64, 0.16);
}
</style>
