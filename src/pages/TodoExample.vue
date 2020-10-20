<template>
    <div>
        <h2>MyTodo</h2>
        <my-todo />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyTodo from '../components/MyTodo/V3Todo.vue'

export default defineComponent({
    name: 'TodoExample',
    components: {
        MyTodo
    }
})
</script>
