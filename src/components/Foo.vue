<template>
  <div>{{ key }} {{ bar }}</div>
</template>

<script>
import { defineComponent, ref, toRefs } from 'vue'
export default defineComponent({
    name: 'Foo',
    props: {
        msg: {
            type: String
        }
    },
    setup(props) {

        const { msg } = toRefs(props)

        const bar = msg

        const key = ref('foo')

        return { key, bar }
    }
})
</script>
