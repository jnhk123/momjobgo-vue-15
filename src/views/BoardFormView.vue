<template>
  <v-card>
    <form style="width: 95%; margin: 0 auto">
      <v-row>
        <v-text-field v-model="title" label="제목"></v-text-field>
      </v-row>
      <v-row>
        <Editor
          ref="toastEditor"
          initialEditType="wysiwyg"
          :style="{ width: '100%' }"
          height="500px"
          previewStyle="vertical"
        ></Editor>
      </v-row>
    </form>
  </v-card>
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

export default {
  components: {
    Editor,
  },
  data() {
    return {
      title: "",
    };
  },

  methods: {
    getContent() {
      return this.$refs.toastEditor.invoke("getMarkdown");
    },
    setContent(content) {
      this.$refs.toastEditor.invoke("setMarkdown", content);
    },
  },
};
</script>

<style></style>
