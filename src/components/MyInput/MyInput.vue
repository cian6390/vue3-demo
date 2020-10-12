<template>
  <input v-model="q" type="text" />
</template>

<script>
import { defineComponent } from "vue";
import { useInput } from "./my-input";
export default defineComponent(function MyInput() {
  const { q } = useInput();
  return { q };
});
</script>
