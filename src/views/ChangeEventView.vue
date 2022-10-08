<template>
  <div>
    <select :value="selectedValue" @change="changeSelect($event, 'test')">
      <option value="apple">사과</option>
      <option value="orange">오렌지</option>
      <option value="peach">복숭아</option>
      <option value="grape">포도</option>
    </select>

    <p>
      <input type="text" :value="text" @input="changeText($event)" />
      <br />
      <input type="text" v-model="text" />
      <br />
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: "",
      text: "",
    };
  },

  methods: {
    changeSelect(e) {
      console.log(e.target.value);
      this.selectedValue = e.target.value;
    },

    changeText(e) {
      this.text = e.target.value;
    },
  },
};
</script>

<style></style>
