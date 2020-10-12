<template>
  <div>
    <my-store />
  </div>
  <div class="mb-15">
    <button class="mr-15" @click="toggleMyName">MyName</button>
    <button class="mr-15" @click="mutiHandlerA($event), mutiHandlerB($event)">Mutiple Event Handler</button>
    <button class="mr-15" @click="sendGlobalEvent">Send Global Event</button>
    <button class="mr-15" @click="toggleMyModel">MyModel</button>
    <button class="mr-15" @click="toggleMyInput">MyInput</button>
  </div>
  <div v-if="showMyName">
    <my-name />
  </div>
  <div v-if="showMyInput">
    <label style="margin-right: 15px">MyInput</label>
    <my-input />
  </div>
  <div v-if="myModel.show">
    <my-model v-model:number="myModel.value" />
  </div>
</template>

<script>
import MyName from "./components/MyName/MyName.vue";
import MyInput from "./components/MyInput/MyInput.vue";
import MyModel from "./components/MyModel/MyModel.vue";
import { $bus } from './event-bus'
import MyStore from './components/MyStore/MyStore.vue'

export default {
  name: "App",
  components: {
    MyModel,
    MyInput,
    MyName,
    MyStore
  },
  data() {
    return {
      myModel: {
        show: false,
        value: 0,
      },
      showMyName: false,
      showMyInput: false,
    };
  },
  watch: {
    "myModel.value": function (value) {
      console.log("myModel.value: " + value);
    },
  },
  mounted() {
    // still can access $store when using old component.
    // console.log(this.$store.state)
  },
  methods: {
    toggleMyInput() {
      this.showMyInput = !this.showMyInput;
    },
    toggleMyName() {
      this.showMyName = !this.showMyName;
    },
    toggleMyModel() {
      this.myModel.show = !this.myModel.show;
    },
    sendGlobalEvent() {
      const payload = {
        msg: 'Hello ~'
      }
      $bus.emit('my-global-event', payload)
    },

    mutiHandlerA(e) {
      console.log('from handler a', e)
    },
    mutiHandlerB(e) {
      console.log('from handler b', e)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
