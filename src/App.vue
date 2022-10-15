<template>
  <div id="app">
    <input type="text" v-model="message" />
    <hr />

    categoryList1 :
    <select v-model="category1">
      <option
        v-for="item in categoryList1"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>

    <br />
    categoryList2 :<select>
      <option
        v-for="item in categoryList2"
        :key="item.value"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>

    <hr />

    lastName : <input v-model="name.lastName" />
    <br />
    firstName : <input v-model="name.firstName" />

    <hr />
    {{ array }} <button @click="pushArray">배열에 값 넣기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",

      categoryList1: [
        { value: "IT", label: "IT직군" },
        { value: "건설", label: "건설" },
      ],
      category1: "IT",

      categoryList2: [],

      ITList: [
        { value: "vue", label: "vue" },
        { value: "react", label: "react" },
      ],
      ItListSelect: "",

      constructorList: [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
      ],
      constructorSelect: "",

      name: {
        lastName: "",
        firstName: "",
      },

      array: [],
    };
  },

  methods: {
    pushArray() {
      this.array.push(1);
    },
  },

  watch: {
    message: function (value, oldValue) {
      console.log(value, oldValue);
    },

    category1: {
      immediate: true,
      handler: function (value) {
        if (value === "IT") {
          this.categoryList2 = this.ITList;
        } else if (value === "건설") {
          this.categoryList2 = this.constructorList;
        } else {
          this.categoryList2 = [];
        }
      },
    },

    "name.lastName": function () {
      // console.log(value);
    },

    "name.firstName": function () {
      // console.log(value);
    },

    name: {
      deep: true,
      handler: function (value) {
        console.log(value);
      },
    },

    array: function (value) {
      console.log(value);
    },
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
