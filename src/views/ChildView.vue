<template>
  <div>
    <h2>자식 컴포넌트 입니다.</h2>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
