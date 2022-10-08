<template>
  <div id="app">
    <IfRenderingView></IfRenderingView>
    <ShowRenderingView></ShowRenderingView>
  </div>
</template>

<script>
import IfRenderingView from "@/views/IfRenderingView.vue";
import ShowRenderingView from "./views/ShowRenderingView.vue";

export default {
  components: {
    IfRenderingView,
    ShowRenderingView,
  },
};
</script>

<style scoped></style>
