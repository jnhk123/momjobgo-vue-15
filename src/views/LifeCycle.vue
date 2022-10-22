<template>
  <div>
    <div ref="rDiv">{{ message }}</div>
    <p><input type="text" @input="changeMessage" /></p>
    <button @click="changeInputText">클릭시 메시지 변경!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello World!!",
      inputText: "",
    };
  },

  methods: {
    changeMessage(e) {
      this.inputText = e.target.value;
      console.log("this.inputText", this.inputText);
    },

    changeInputText() {
      this.message = this.inputText;
    },
  },

  beforeCreate() {
    console.log("beforeCreate", this.message);
  },

  created() {
    console.log("created", this.message);
  },

  beforeMount() {
    console.log("beforeMount", this.message);
  },

  mounted() {
    console.log("mounted", this.message, this.$refs.rDiv.innerText);
  },

  beforeUpdate() {
    console.log("beforeUpdate", this.$refs.rDiv.innerText);
  },

  updated() {
    console.log("updated", this.$refs.rDiv.innerText);
  },

  // beforeUnmount() {
  //   console.log("beforeUnmount", this.$refs.rDiv.innerText);
  // },

  // unmounted() {
  //   console.log("unmounted", this.$refs.rDiv, this.inputText);
  // },

  beforeDestroy() {
    console.log("beforeDestroy", this.$refs.rDiv.innerText);
  },

  destroyed() {
    console.log("destroyed", this.$refs.rDiv, this.inputText);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
