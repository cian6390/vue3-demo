<template>
  <div>
    <strong class="mr-15">First Name</strong>
    <input v-model="user.firstName" type="text" />
  </div>
  <div>
    <strong class="mr-15">Last Name</strong>
    <input v-model="user.lastName" type="text" />
  </div>
  <div>
    <strong class="mr-15">Fullname：{{ fullname }}</strong>
  </div>
  <div>
    <span class="mr-15">Type {{ counter }} times.</span>
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";

export default {
  name: "MyName",

  setup() {
    const user = reactive({
      firstName: "",
      lastName: "",
    });

    const counter = ref(0);

    // immutable computed
    const fullname = computed(() => {
      return user.firstName + " " + user.lastName;
    });

    // writable computed
    // const fullname = computed({
    //   get: () => {
    //     return user.firstName + " " + user.lastName;
    //   },
    //   set: (value) => {
    //     // ...
    //   }
    // });

    watch(fullname, (currValue, prevValue) => {
      console.log(`current: ${currValue}, prev: ${prevValue}`)
      counter.value += 1;
    });

    // watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
    //     // do something ...
    // })

    // watch(
    //   () => state.count,
    //   (count, prevCount) => {
    //     // do something ...
    //   }
    // );

    return { user, fullname, counter };
  },
};
</script>
