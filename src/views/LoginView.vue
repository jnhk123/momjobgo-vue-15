<template>
  <div>
    <div id="btn">
      <a id="kakao-login-btn" @click="clickLogin">
        <img
          src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          width="222"
          alt="카카오 로그인 버튼"
        />
      </a>
    </div>
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "안녕하세요.",
    };
  },

  methods: {
    clickLogin() {
      window.Kakao.Auth.authorize({
        redirectUri: process.env.VUE_APP_KAKAO_REDIRECT_URI,
      });
    },
  },
};
</script>

<style scoped>
#btn {
  padding: 20px 0px 20px 40px;
}
</style>
