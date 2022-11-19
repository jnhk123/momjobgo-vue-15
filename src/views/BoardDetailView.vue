<template>
  <div>
    상세보기 {{ bno }}

    <v-card>
      <p>제목 : {{ title }}</p>
    </v-card>

    <v-card>
      <Viewer ref="viewer" height="500px"></Viewer>
    </v-card>

    <v-card :style="{ margin: '10px 0px' }">
      댓글 입력
      <v-textarea v-model="comment"></v-textarea>
      <v-btn @click="callPostComment">등록</v-btn>
    </v-card>

    <v-card :style="{ margin: '10px 0px' }">
      댓글 목록
      <ul>
        <li
          v-for="commentInfo in wrapCommentList"
          :key="commentInfo.id"
          :style="{ display: 'flex', 'justify-content': 'space-between' }"
        >
          <span>{{ commentInfo.comment }}</span>
          <span>{{ toWriteTime(new Date(commentInfo.createdAt)) }}</span>
          <span>{{ commentInfo.writer }}</span>
          <span>
            <v-btn @click="() => callDeleteComment(commentInfo.id)">삭제</v-btn>
          </span>
        </li>
      </ul>
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
import {
  getBoard,
  deleteBoard,
  getComments,
  postComment,
  deleteComment,
} from "@/services/board";
import date from "@/mixins/date";
import { mapGetters } from "vuex";
import { Viewer } from "@toast-ui/vue-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default {
  mixins: [date],

  components: {
    Viewer,
  },

  // {
  //   "createdAt": "2022-11-19T15:12:09",
  //   "updatedAt": "2022-11-19T15:12:09",
  //   "id": 76,
  //   "comment": "test",
  //   "writer": "jnhk123",
  //   "bno": 33
  // }

  data() {
    return {
      title: "",
      writer: "",
      comment: "",
      commentList: [],
    };
  },

  computed: {
    ...mapGetters("user", ["id"]),
    bno() {
      return this.$route.params.id;
    },

    wrapCommentList() {
      return [...this.commentList].sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
    },
  },

  methods: {
    async callBoard() {
      const response = await getBoard(this.bno);
      this.title = response.data.title;
      this.writer = response.data.writer;
      this.setContent(response.data.contents);
    },

    async callBoardDelete() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        await deleteBoard(this.bno);
        this.$router.push({ name: "board" });
      }
    },

    async callGetComments() {
      const response = await getComments(this.bno);
      console.debug(response);
      this.commentList = response.data;
    },

    async callPostComment() {
      try {
        await postComment({ comment: this.comment }, this.bno);
        alert("댓글이 등록되었습니다.");
        this.comment = "";
        this.callGetComments();
      } catch (error) {
        alert("통신 실패");
      }
    },

    async callDeleteComment(id) {
      try {
        if (confirm("정말로 삭제 하시겠습니까?")) {
          await deleteComment(id);
          this.callGetComments();
          alert("삭제완료");
        }
      } catch (error) {
        alert("통신 실패");
      }
    },

    setContent(content) {
      this.$refs.viewer.invoke("setMarkdown", content);
    },
  },

  created() {
    this.callBoard();
    this.callGetComments();
  },
};
</script>

<style></style>
