<template>
  <div id="app">
    <LifeCycle></LifeCycle>
  </div>
</template>

<script>
import LifeCycle from "./views/LifeCycle.vue";

export default {
  components: {
    LifeCycle,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
