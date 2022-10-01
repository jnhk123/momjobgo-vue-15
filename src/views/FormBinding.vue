<template>
  <div>
    <p>
      <input type="text" v-model="message" />
    </p>
    <p>
      <span>{{ message }}</span>
    </p>
    <p>
      <input type="number" v-model.number="number" />
    </p>
    <p>
      <span>{{ number }}</span>
    </p>
    <p>
      <textarea v-model="textarea"></textarea>
    </p>
    <p>
      <span>{{ textarea }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      number: 0,
      textarea: "",
    };
  },
};
</script>

<style></style>
