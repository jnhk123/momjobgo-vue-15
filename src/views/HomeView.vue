<template>
  <div class="home">
    {{ wrapData }}
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      now: new Date(),
    };
  },

  computed: {
    wrapData() {
      return this.toYmdHms(this.now);
    },
  },
};
</script>
