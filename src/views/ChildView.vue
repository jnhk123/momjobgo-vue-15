<template>
  <div>
    <h2>자식 컴포넌트 입니다.</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Number,
      required: true,
      validator(value) {
        return value === 1;
      },
    },
  },
};
</script>

<style></style>
