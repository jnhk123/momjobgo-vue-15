<template>
  <LayoutView v-if="isLogin"></LayoutView>
  <LoginView v-else></LoginView>
</template>

<script>
import LayoutView from "@/views/layoutView/LayoutView.vue";
import LoginView from "@/views/LoginView.vue";

export default {
  data() {
    return {
      isLogin: false,
    };
  },

  components: {
    LayoutView,
    LoginView,
  },
};
</script>
