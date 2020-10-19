<template>
  <input v-model="q" type="text" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useInput } from "./my-input";
export default defineComponent(function MyInput() {

  const { q } = useInput('', function (v) {
    console.log('input change: ' + v)
  });

  return {
    q
   };
});
</script>
