<template>
  <div>
    <h3>컨트롤러 뷰</h3>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>
    <br />
    <input type="text" @input="(e) => changeMessage(e.target.value)" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["increase", "decrease", "changeMessage"]),
  },

  created() {
    console.log(this.$store);
  },
};
</script>

<style></style>
