<template>
  <div>
    <p>name : {{ form.name }}</p>
    <p>age : {{ form.age }}</p>
    <p>email : {{ form.email }}</p>
  </div>
</template>

<script>
export default {
  inject: ["form"],
};
</script>

<style></style>
