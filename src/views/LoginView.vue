<template>
  <div>
    아이디 : <input type="text" v-model="id" /> <br />
    비밀번호 : <input type="text" v-model="password" />

    <v-btn @click="login">로그인!!</v-btn>
  </div>
</template>

<script>
import { callApi } from "@/plugins/axios";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },

  methods: {
    ...mapActions("user", ["setToken", "setName", "setId"]),

    async login() {
      const response = await callApi({
        url: "/auth/user",
        method: "post",
        data: {
          id: this.id,
          pwd: this.password,
        },
      });

      this.setToken(response.data.token);

      const userInfo = await callApi({
        url: "/api/auth/user",
        method: "GET",
      });

      this.setId(userInfo.data.id);
      this.setName(userInfo.data.name);
    },
  },
};
</script>

<style></style>
