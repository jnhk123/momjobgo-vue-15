<template>
  <div class="about">
    {{ wrapData }}
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      yesterDay: new Date(new Date().getTime() - 1000 * 60 * 60 * 24),
    };
  },

  computed: {
    wrapData() {
      return this.toYmdHms(this.yesterDay);
    },
  },
};
</script>
