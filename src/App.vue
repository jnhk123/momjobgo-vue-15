<template>
  <div id="app">
    <ControllerView></ControllerView>
    <MonitorView></MonitorView>
  </div>
</template>

<script>
import ControllerView from "@/components/ControllerView.vue";
import MonitorView from "@/components/MonitorView.vue";

export default {
  components: {
    ControllerView,
    MonitorView,
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
