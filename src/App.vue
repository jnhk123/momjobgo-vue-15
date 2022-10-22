<template>
  <div id="app">
    <PannelView></PannelView>
    <FormView></FormView>
  </div>
</template>

<script>
import PannelView from "./views/PannelView.vue";
import FormView from "./views/FormView.vue";

export default {
  components: {
    PannelView,
    FormView,
  },

  data() {
    return {
      form: {
        name: "홍길동",
        age: 0,
        email: "hong@email.net",
      },
    };
  },

  methods: {
    changeForm(name, value) {
      this.form[name] = value;
    },
  },

  provide() {
    return {
      form: this.form,
      changeForm: this.changeForm,
    };
  },
};
</script>

<style scoped></style>
