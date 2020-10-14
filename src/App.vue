<template>
  <aside>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/event">Event</router-link>
      </li>
      <li>
        <router-link to="/compute-and-watch">Compute & Watch</router-link>
      </li>
      <li>
        <router-link to="/watch-effect">watchEffect</router-link>
      </li>
    </ul>
  </aside>
  <main style="padding-left:30px;">
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
  display: flex;
  height: 100%;
  align-items: stretch;
  justify-content: flex-start;
}

aside {
  width: 200px;
  flex: none;
  text-align: left;
}

li {
  height: 30px;
}

main {
  flex: auto;
}
</style>
