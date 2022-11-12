<template>
  <div>
    <v-row>
      <v-btn @click="$router.push({ name: 'boardForm' })">게시물 등록</v-btn>
    </v-row>
    <!-- <v-row> -->
    <v-data-table :headers="headers" :items="boards">
      <template #[`item.title`]="{ item }">
        <span @click="$router.push(`/board/${item.bno}`)">
          {{ item.title }}
        </span>
      </template>
      <template #[`item.createdAt`]="{ item }">
        {{ toWriteTime(new Date(item.createdAt)) }}
      </template>
    </v-data-table>
    <!-- </v-row> -->
  </div>
</template>

<script>
import date from "@/mixins/date";
import { getBoards } from "@/services/board";

export default {
  mixins: [date],

  data() {
    return {
      headers: [
        {
          text: "순번",
          value: "bno",
        },
        { text: "제목", value: "title" },
        { text: "댓글 갯수", value: "commentCnt" },
        { text: "좋아요 갯수", value: "likeCnt" },
        { text: "싫어요 갯수", value: "hateCnt" },
        { text: "작성자", value: "writer" },
        { text: "작성일", value: "createdAt" },
      ],
      boards: [],
    };
  },
  methods: {
    async callBoards() {
      try {
        const response = await getBoards();
        this.boards = response.data;
      } catch (error) {
        console.error(error);
        alert("네트워크 에러");
      }
    },
  },

  created() {
    this.callBoards();
  },
};
</script>

<style></style>
