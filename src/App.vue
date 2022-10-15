<template>
  <div id="app">
    <ChildView :message="1"></ChildView>
    <input type="text" v-model="message" />
  </div>
</template>

<script>
import ChildView from "./views/ChildView.vue";

export default {
  components: {
    ChildView,
  },

  data() {
    return {
      message: "Hello World!",
    };
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
