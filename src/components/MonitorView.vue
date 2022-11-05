<template>
  <div>
    <h3>모니터뷰</h3>
    <span>state -> count : {{ count }}</span>
    <br />
    <span>getters -> formCnt : {{ formCnt }}</span>
    <br />
    <span>{{ message }}</span>
    <p>
      {{ name }} {{ userName }}
      {{ id }}
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["formCnt", "message"]),
    ...mapGetters("user", ["name", "id"]),
    ...mapGetters({ userName: "user/name" }),
  },
};
</script>

<style></style>
