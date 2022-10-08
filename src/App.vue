<template>
  <div id="app">
    <ListRenderingForArray></ListRenderingForArray>
    <ListRenderingForObject></ListRenderingForObject>
  </div>
</template>

<script>
import ListRenderingForArray from "@/components/ListRenderingForArray.vue";
import ListRenderingForObject from "@/components/ListRenderingForObject.vue";

export default {
  components: {
    ListRenderingForArray,
    ListRenderingForObject,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
