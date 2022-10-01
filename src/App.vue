<template>
  <div id="app">
    <!-- <DataBinding></DataBinding> -->
    <FormBinding3></FormBinding3>
  </div>
</template>

<script>
// import DataBinding from "./views/DataBinding.vue";
// import FormBinding from "@/views/FormBinding.vue";
// import FormBinding2 from "@/views/FormBinding2.vue";
import FormBinding3 from "@/views/FormBinding3.vue";

export default {
  components: {
    // DataBinding,
    // FormBinding,
    // FormBinding2,
    FormBinding3,
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
