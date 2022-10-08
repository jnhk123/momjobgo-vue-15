<template>
  <div>
    <h2>라디오</h2>
    <p>
      <input type="radio" v-model="radio" :value="apple" />
      {{ apple }}
      <input type="radio" v-model="radio" :value="orange" />
      {{ orange }}
      <input type="radio" v-model="radio" :value="grape" />
      {{ grape }}
      <input type="radio" v-model="radio" :value="peach" />
      {{ peach }}
    </p>
    <p>select : {{ radio }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",

      apple: "사과",
      orange: "오렌지",
      grape: "포도",
      peach: "복숭아",
    };
  },
};
</script>

<style></style>
