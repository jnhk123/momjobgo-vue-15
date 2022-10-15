<template>
  <div>
    <h5>- 게시판입니다. -</h5>

    <ul>
      <li
        v-for="item in boardList"
        :key="item.key"
        class="click"
        @click="goToDetail(item.key, item.title)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boardList: [
        { key: 1, title: "안녕하세요" },
        { key: 2, title: "반갑습니다." },
        { key: 3, title: "안녕히 가세요." },
      ],
    };
  },

  methods: {
    goToDetail(key, title) {
      this.$router.push({
        path: `/board/${key}`,
        query: {
          title,
        },
      });
    },
  },
};
</script>

<style scoped>
.click {
  cursor: pointer;
}
</style>
