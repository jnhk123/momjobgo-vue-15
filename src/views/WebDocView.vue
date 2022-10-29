<template>
  <div>
    <div id="header">
      <h2>카카오 API 활용하기</h2>
    </div>

    <div id="search">
      <input type="text" v-model="query" @keyup.enter="callWebDoc" />
      <button @click="callWebDoc">검색</button>
    </div>

    <ul>
      <li v-for="(item, index) in list" :key="index" class="contents">
        <p>
          <a :href="item.url" target="_blank">
            <span v-html="item.title"></span>
          </a>
          <span> {{ new Date(item.datetime) | toYmd }}</span>
        </p>

        <p v-html="item.contents"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { callKakaoApi } from "@/plugins/axios";

export default {
  name: "App",

  data() {
    return {
      query: "",

      list: [],
    };
  },

  methods: {
    async callWebDoc() {
      const response = await callKakaoApi("/v2/search/web", {
        method: "GET",
        params: {
          query: this.query,
        },
      });
      this.list = response.data.documents;
    },
  },

  filters: {
    toYmd(obj) {
      const year = obj.getFullYear();
      const months = String(obj.getMonth()).padStart(2, 0);
      const date = String(obj.getDate()).padStart(2, 0);
      return `${year}-${months}-${date}`;
    },
  },
};
</script>

<style>
#header {
  padding-left: 40px;
}

#search {
  padding: 20px 0px 20px 40px;
}

.contents {
  width: 600px;
}
</style>
