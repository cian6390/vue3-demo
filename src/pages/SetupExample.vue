<template>
  <div>
    <h2><a target="_blank" href="https://v3.vuejs.org/guide/composition-api-setup.html">setup</a></h2>
    <p>
      <strong>在 setup method 中不能使用 `this`，因為它在物件被實例化之前調用</strong>，因此像是 methods、computed、data 這類需要透過 `this` 調用的都不能用。
    </p>
    <section>
      <h3>Props</h3>
      <p>用法上跟 Vue2 的 Props 沒什麼差別，不過要注意到使用物件解構的話會破壞響應，因此要配合使用 `toRefs`</p>
      <code>
        // MyBook.vue
        <br />
        <br />
        import { toRefs } from 'vue'
        <br />
        <br />setup(props) {
        <br />
        &nbsp;&nbsp;const { title } = toRefs(props)
        <br />&nbsp;&nbsp;console.log(title.value)
        <br />}
      </code>
    </section>
    <section>
      <h3>Context</h3>
      <p>`context` 是有 3 個屬性的物件</p>
      <ul>
        <li>attrs</li>
        <li>slots</li>
        <li>emit</li>
      </ul>
      <div>`context`並不是響應式物件，所以直接使用物件解構沒關係。</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SetupExample",
};
</script>