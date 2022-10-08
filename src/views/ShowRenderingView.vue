<template>
  <div>
    <p v-show="renderType === 1" id="1">
      현재 renderType은 1입니다.
      <input type="text" />
    </p>
    <p v-show="renderType === 2" id="2">
      현재 renderType은 2입니다.
      <input type="text" />
    </p>

    <p>
      <input type="number" v-model.number="renderType" />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderType: 1,
    };
  },
};
</script>

<style></style>
