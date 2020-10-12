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
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "MyName",

  setup() {
    const user = reactive({
      firstName: "",
      lastName: "",
    });

    const fullname = computed(() => {
      return user.firstName + " " + user.lastName;
    });

    return { user, fullname };
  },
};
</script>

<style>
</style>