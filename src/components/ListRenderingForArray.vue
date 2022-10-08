<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in fruits" :key="item.key">
        {{ index + 1 }} | {{ item.text }}
        <input type="text" v-model="item.text" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        { key: 1, text: "사과" },
        { key: 2, text: "오렌지" },
        { key: 3, text: "복숭아" },
        { key: 4, text: "포도" },
      ],
    };
  },

  updated() {
    console.log("fruits", this.fruits);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
