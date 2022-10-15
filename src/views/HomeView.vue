<template>
  <div class="home">
    <!-- <button @click="goToHiddenPage">숨겨진 페이지로</button> -->
    5초 후 히든 페이지.
  </div>
</template>

<script>
export default {
  name: "HomeView",

  methods: {
    goToHiddenPage() {
      this.$router.push({ name: "hidden" });
    },
  },

  created() {
    setTimeout(() => {
      this.goToHiddenPage();
    }, 5000);
  },
};
</script>
