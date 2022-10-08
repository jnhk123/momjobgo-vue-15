<template>
  <div id="app">
    <!-- <ClickEventView></ClickEventView> -->
    <!-- <ChangeEventView></ChangeEventView> -->
    <KeyEventView></KeyEventView>
  </div>
</template>

<script>
// import ClickEventView from "@/views/ClickEventView.vue";
// import ChangeEventView from "@/views/ChangeEventView.vue";
import KeyEventView from "@/views/KeyEventView.vue";

export default {
  components: {
    // ClickEventView,
    // ChangeEventView,
    KeyEventView,
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
