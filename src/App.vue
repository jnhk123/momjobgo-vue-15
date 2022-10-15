<template>
  <div id="app">
    {{ fullName }} <br />
    fullName <input type="text" v-model="fullName" /><br />

    lastName <input type="text" v-model="lastName" /><br />
    fisrtName <input type="text" v-model="firstName" /><br />

    <hr />
    검색 <input type="text" v-model="searchKeyword" />
    <ul>
      <li v-for="item in filteredList" :key="item.value">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastName: "홍",
      firstName: "길동",

      searchKeyword: "",

      fruits: [
        { value: "appple", label: "사과" },
        { value: "appple2", label: "사과2" },
        { value: "orange", label: "오렌지" },
        { value: "banana", label: "바나나" },
        { value: "grape", label: "포도" },
      ],
    };
  },

  computed: {
    filteredList() {
      return this.fruits.filter((fruit) =>
        fruit.label.includes(this.searchKeyword)
      );
    },

    fullName: {
      set(value) {
        const fullNameSplit = value.split(" ");
        this.lastName = fullNameSplit[0];
        this.firstName = fullNameSplit[1];
      },

      get() {
        return `${this.lastName} ${this.firstName}`;
      },
    },

    // fullName() {
    //   return `${this.lastName} ${this.firstName}`;
    // },
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
