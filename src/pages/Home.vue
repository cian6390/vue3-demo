<template>
  <div>
    <div>
      <h2>Lifecycle</h2>
      <img width="600" src="https://v3.vuejs.org/images/lifecycle.png" alt="vue3 Lifecycle Diagram" />
    </div>
    <div>
      <h2>Plugin 的使用方式改為實例註冊</h2>
      <code style="padding:15px 0 30px 0;">
        import { createApp } from 'vue'
        <br />
        import { router } from './router'
        <br />
        <br />const app = createApp(/** ...options */)
        <br />app.use(router)
      </code>
    </div>
    <div>
      <h2>移除的全域 API</h2>
      <p>為了更好的打包優化，Vue 3 將<a href="https://v3.vuejs.org/guide/migration/global-api-treeshaking.html#affected-apis">部分全域 API 移除</a>，常見的有：</p>
      <ul>
        <li>Vue.set</li>
        <li>Vue.nextTick</li>
        <li>Vue.observable</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>