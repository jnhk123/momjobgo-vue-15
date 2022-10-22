<template>
  <div id="app">
    <div>
      <button @click="firstModal = true">첫번째 모달</button>
    </div>
    <hr />
    <div>
      <button @click="secondModal = true">두번째 모달</button>
    </div>

    <ModalView :on="firstModal" @close="firstModal = false">
      <template v-slot:title>제목입니다.</template>
      <template #sub-title>부제목입니다.</template>
      <template>
        <div>
          <p>시작입니다.</p>
          <input type="text" name="" id="" value="안녕하세요" />
          <p>끝!!</p>
        </div>
      </template>
    </ModalView>

    <ModalView :on="secondModal" @close="secondModal = false">
      <template v-slot:title>오예</template>
      <template #sub-title>반갑습니다.</template>
      <template>
        <button @click="click">클릭하세요!!</button>
      </template>
    </ModalView>
  </div>
</template>

<script>
import ModalView from "./components/ModalView.vue";

export default {
  data() {
    return {
      firstModal: false,
      secondModal: false,
    };
  },

  components: {
    ModalView,
  },

  methods: {
    click() {
      alert("클릭되었습니다.!!!");
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
