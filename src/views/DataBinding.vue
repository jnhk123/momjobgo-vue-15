<template>
  <div>
    <p>
      <span>{{ firstMessage }}</span>
    </p>
    <p>
      <span v-html="html"></span>
    </p>
    <p>
      <span v-text="html"></span>
    </p>
    <p>
      <span v-pre>{{ firstMessage }}</span>
    </p>
    <p>
      <span v-once>{{ text }}</span>
    </p>
    <p>
      <span>{{ text }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstMessage: "Hello World",
      html: "<span style='color:red' onclick='console.log(`test`)'>HTML : </span><span>HTML</span>",
      text: "텍스트",
    };
  },

  created() {
    setTimeout(() => {
      this.text = "1234";
    }, 1000);
  },
};
</script>

<style></style>
