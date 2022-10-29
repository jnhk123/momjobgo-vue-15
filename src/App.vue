<template>
  <div id="app">
    <nav>
      <router-link to="/promise">promise</router-link> |
      <router-link to="/">웹문서 검색</router-link> |
      <router-link to="/video">동영상 검색</router-link> |
      <router-link to="/login">로그인</router-link> |
      <router-link to="/map">지도</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.VUE_APP_KAKAO_JAVA_SCRIPT_KEY);
      window.Kakao.isInitialized();
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px 30px 20px 40px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
