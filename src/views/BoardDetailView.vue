<template>
  <div>
    상세보기 {{ bno }}

    <v-card>
      <p>제목 : {{ title }}</p>
    </v-card>

    <v-card>
      <Viewer ref="viewer" height="500px"></Viewer>
    </v-card>

    <v-card>
      <template v-if="writer === id">
        <v-btn @click="$router.push(`/board/form/${bno}`)">수정</v-btn>
        <v-btn @click="callBoardDelete">삭제</v-btn>
      </template>
      <v-btn @click="$router.push({ name: 'board' })">목록으로</v-btn>
    </v-card>
  </div>
</template>

<script>
import { getBoard, deleteBoard } from "@/services/board";
import { mapGetters } from "vuex";
import { Viewer } from "@toast-ui/vue-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default {
  components: {
    Viewer,
  },

  data() {
    return {
      title: "",
      writer: "",
    };
  },

  computed: {
    ...mapGetters("user", ["id"]),
    bno() {
      return this.$route.params.id;
    },
  },

  methods: {
    async callBoard() {
      const response = await getBoard(this.bno);
      console.log(response);
      this.title = response.data.title;
      this.writer = response.data.writer;
      this.setContent(response.data.contents);
    },

    async callBoardDelete() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        const response = await deleteBoard(this.bno);
        console.log(response);
        this.$router.push({ name: "board" });
      }
    },

    setContent(content) {
      this.$refs.viewer.invoke("setMarkdown", content);
    },
  },

  created() {
    this.callBoard();
  },
};
</script>

<style></style>
