<template>
  <LayoutView v-if="hasToken"></LayoutView>
  <LoginView v-else></LoginView>
</template>

<script>
import LayoutView from "@/views/layoutView/LayoutView.vue";
import LoginView from "@/views/LoginView.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },

  components: {
    LayoutView,
    LoginView,
  },

  computed: {
    ...mapGetters("user", ["hasToken"]),
  },
};
</script>
