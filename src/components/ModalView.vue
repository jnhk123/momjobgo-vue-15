<template>
  <div class="container" v-if="on">
    <div class="popup-wrap" id="popup">
      <div class="popup">
        <div class="popup-head">
          <span class="head-title">
            <slot name="title"></slot>
          </span>
          <span @click="close">닫기</span>
        </div>
        <div class="popup-body">
          <div class="body-content">
            <div class="body-titlebox">
              <h1>
                <slot name="sub-title"></slot>
              </h1>
            </div>
            <div class="body-contentbox">
              <p>
                <slot name="default"></slot>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    on: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({}),

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.popup-wrap {
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  display: flex;
  padding: 15px;
}

.popup {
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #264db5;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
}

.popup-head {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.head-title {
  color: white;
}

.popup-body {
  width: 100%;
  background-color: #ffffff;
}

.body-content {
  padding: 30px;
}

.body-titlebox {
  text-align: center;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
}
.body-contentbox {
  word-break: break-word;
  overflow-y: auto;
  min-height: 100px;
  max-height: 200px;
}
</style>
