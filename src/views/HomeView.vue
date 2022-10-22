<template>
  <div class="home">
    {{ wrapData }}
    {{ message }}
  </div>
</template>

<script>
import mixin from "@/mixin";

export default {
  mixins: [mixin],

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
