<template>
  <div>
    <h3 v-bind:id="apple">multi select</h3>
    <select v-model="multiSelect" multiple>
      <option v-bind:value="apple">사과</option>
      <option v-bind:value="orange">오렌지</option>
      <option v-bind:value="grape">포도</option>
      <option v-bind:value="peach">복숭아</option>
    </select>
    <p>
      {{ multiSelect }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      multiSelect: [],

      apple: "123",
      orange: "오렌지",
      grape: "포도",
      peach: "복숭아",
    };
  },
};
</script>

<style></style>
