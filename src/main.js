import { createApp } from 'vue'
import { store } from './store'
import { router } from './router'
import { $bus } from './event-bus'
import App from './App.vue'

$bus.on('my-global-event', msg => console.log(msg))

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
