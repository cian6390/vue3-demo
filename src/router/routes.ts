
import Home from '../pages/Home.vue'
import EventExample from '../pages/EventExample.vue'
import ComputeWatchExample from '../pages/ComputeWatchExample.vue'
import WatchEffectExample from '../pages/WatchEffectExample.vue'
import SetupExample from '../pages/SetupExample.vue'

export default [
    {
        path: '/',
        component: Home
    }, {
        path: '/event',
        component: EventExample
    }, {
        path: '/compute-and-watch',
        component: ComputeWatchExample
    }, {
        path: '/watch-effect',
        component: WatchEffectExample
    }, {
        path: '/setup',
        component: SetupExample
    }
]