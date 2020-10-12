import { $bus } from './event-bus'
import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'

$bus.on('my-global-event', function (payload) {
  console.log(payload)
})

const app = createApp(App)

app.use(store)

app.mount('#app')
