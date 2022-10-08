<template>
  <div>
    <p v-if="renderType === 1" id="1">
      현재 renderType은 1입니다.
      <input type="text" id="1_input" />
    </p>
    <p v-else-if="renderType === 2" id="2">
      현재 renderType은 2입니다.
      <input type="text" id="2_input" />
    </p>
    <p v-else id="3">
      renderType : {{ renderType }}
      <input type="text" id="3_input" />
    </p>
    <p><input type="number" v-model.number="renderType" /></p>
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
