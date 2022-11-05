<template>
  <div>
    아이디 : <input type="text" v-model="id" /> <br />
    비밀번호 : <input type="text" v-model="password" />

    <v-btn @click="login">로그인!!</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },

  methods: {
    async login() {
      const response = await axios({
        url: "https://api.devcury.kr/auth/user",
        method: "post",
        data: {
          id: this.id,
          pwd: this.password,
        },
      });

      console.log(response);

      //   const token = response.data.token;
    },
  },
};
</script>

<style></style>
