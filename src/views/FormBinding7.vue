<template>
  <div>
    <p :class="{ bold: bold, italic: italic, blue: blue }">안녕하세요.</p>
    <button @click="blue = !blue">to blue</button>
    <button @click="bold = !bold">to bold</button>
    <button @click="italic = !italic">to italic</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      classType: "",

      bold: false,
      italic: false,
      blue: false,
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
