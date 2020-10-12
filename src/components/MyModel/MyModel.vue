<template>
  <div class="mb-15">
    <button @click="increase">increase</button>
    <button @click="decrease">decrease</button>
  </div>
  <div>{{ number }}</div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
    },
  },
  setup(props, { emit }) {
    function increase() {
      emit("update:number", props.number + 1);
    }
    function decrease() {
      emit("update:number", props.number - 1);
    }
    return {
      increase,
      decrease,
    };
  },
};
</script>
