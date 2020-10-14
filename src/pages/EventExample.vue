<template>
  <div>
    <h2>破壞性變更</h2>
    <p>移除以下幾個全域 API</p>
    <ul>
      <li>$once</li>
      <li>$off</li>
      <li>$on</li>
    </ul>
  </div>
  <div>
    <h2>多事件監聽者</h2>
    <p>現在可以一次註冊多個監聽者給同一個事件</p>
    <div>
      <button class="mr-15" @click="mutiHandlerA($event), mutiHandlerB($event)">Trigger</button>
    </div>
  </div>
  <div>
    <h2>使用 mitt 實現 Event Bus</h2>
    <p><a target="_blank" href="https://v3.vuejs.org/guide/migration/events-api.html#migration-strategy">Vue 官方建議</a>我們改用 <a target="_blank" href="https://github.com/developit/mitt">mitt</a> 來實現 Event Bus</p>
    <div>
      <button @click="sendGlobalEvent">Trigger</button>
    </div>
  </div>
  <div>
    <h2>v-model 調整</h2>
    <p>原本 v-model 是 value 屬性與 input 事件的縮寫<br>現在改為 modelValue 屬性與 update:modelValue 事件。</p>
    <!-- <my-model :modelValue="modelValue" @update:modelValue="v => modelValue = v" /> -->
    <my-model v-model:number="modelValue"></my-model>
  </div>
</template>

<script>
import { $bus } from '../event-bus'
import MyModel from "../components/MyModel/MyModel.vue";
export default {
  name: "EventExample",
  components: {
    MyModel, // custom v-model
  },
  data() {
    return {
      modelValue: 0,
    };
  },
  methods: {
    mutiHandlerA(e) {
      console.log("from handler a", e);
    },
    mutiHandlerB(e) {
      console.log("from handler b", e);
    },
    sendGlobalEvent() {
      const payload = {
        msg: 'Hello ~'
      }
      $bus.emit('my-global-event', payload)
    }
  },
};
</script>
