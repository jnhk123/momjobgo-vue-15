<template>
  <div>
    <ul>
      <li v-for="(value, key, index) in fruits" :key="key">
        {{ value }} | {{ key }} | {{ index }}
        <input type="text" v-model="fruits[key]" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: {
        apple: "사과",
        orange: "오렌지",
        peach: "복숭아",
        grape: "포도",
      },
    };
  },

  created() {
    console.log(this.fruits["apple"]);
  },
};
</script>

<style></style>
