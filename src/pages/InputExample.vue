<template>
    <div>
        <h2>MyInput</h2>
        <my-input />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyInput from '../components/MyInput/MyInput.vue'

export default defineComponent({
    name: 'InputExample',
    components: {
        MyInput
    }
})
</script>

<style>

</style>