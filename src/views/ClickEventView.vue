<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="message = 'Hi!!'">클릭하세요!</button>
    <button @click="click('Hello World')">클릭하세요!</button>

    <p>{{ counter }}</p>
    <button @click="counter++">증가</button>
    <button @click="decrease">감소</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World",
      counter: 0,
    };
  },

  methods: {
    click(value) {
      this.message = value;
    },

    decrease() {
      this.counter--;
    },
  },

  created() {
    this.decrease();
  },
};
</script>

<style></style>
