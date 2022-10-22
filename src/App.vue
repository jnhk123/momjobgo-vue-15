<template>
  <div id="app">
    <ListComponent
      ref="listComponent"
      :list="fruits"
      :selected="selected"
      @change="changeSelected"
      label="name"
      id="key"
    ></ListComponent>
  </div>
</template>

<script>
import ListComponent from "./components/ListComponent.vue";

export default {
  components: {
    ListComponent,
  },

  data() {
    return {
      fruits: [
        { name: "사과", key: "apple" },
        { name: "복숭아", key: "peach" },
        { name: "오렌지", key: "orange" },
        { name: "딸기", key: "strawberry" },
      ],

      cars: [
        { carName: "아반떼", carId: "1" },
        { carName: "소나타", carId: "2" },
        { carName: "그렌져", carId: "3" },
      ],

      selected: "",
    };
  },

  methods: {
    changeSelected(value) {
      this.selected = value;
    },
  },

  mounted() {
    console.log(this.$refs.listComponent);
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
