<template>
  <div>
    <p :class="classType">안녕하세요.</p>
    <button @click="classType = 'blue'">to blue</button>
    <button @click="classType = 'bold'">to bold</button>
    <button @click="classType = 'italic'">to italic</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classType: "",
    };
  },
};
</script>

<style>
.blue {
  color: blue;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}
</style>
