<template>
  <div>
    <img :src="imgSrc" :alt="imgAlt" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("@/assets/logo.png"),
      imgAlt: "vue 로고",
    };
  },
};
</script>

<style></style>
