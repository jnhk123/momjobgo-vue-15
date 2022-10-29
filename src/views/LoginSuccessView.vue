<template>
  <div>
    <p>
      <img :src="img" alt="프로필 사진 이미지" />
    </p>
    <p>닉네임 : {{ nickName }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nickName: "",
      img: "",
    };
  },

  methods: {
    async getToken() {
      const code = this.$route.query.code;
      const client_id = process.env.VUE_APP_KAKAO_REST_API_KEY;
      const redirect_uri = process.env.VUE_APP_KAKAO_REDIRECT_URI;

      const response = await axios({
        url: "https://kauth.kakao.com/oauth/token",
        method: "POST",
        params: {
          grant_type: "authorization_code",
          client_id,
          redirect_uri,
          code,
        },
      });

      window.Kakao.Auth.setAccessToken(response.data.access_token);
    },

    async getUserInfo() {
      window.Kakao.API.request({
        url: "/v2/user/me",
      })
        .then((response) => {
          console.log(response);
          this.nickName = response.properties.nickname;
          this.img = response.properties.profile_image;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  async created() {
    await this.getToken();
    await this.getUserInfo();
  },
};
</script>

<style></style>
