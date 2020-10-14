
import Home from '../pages/Home.vue'
import EventExample from '../pages/EventExample.vue'
import ComputeWatchExample from '../pages/ComputeWatchExample.vue'
import WatchEffectExample from '../pages/WatchEffectExample.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/event',
        name: 'event',
        component: EventExample
    }, {
        path: '/compute-and-watch',
        name: 'caw',
        component: ComputeWatchExample
    }, {
        path: '/watch-effect',
        name: 'watch-effect',
        component: WatchEffectExample
    }
]