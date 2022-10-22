<template>
  <div>
    <h2>리스트 컴포넌트</h2>
    <input type="text" v-model="keyword" />
    <br />
    <p>{{ selectedName }}</p>
    <ul>
      <li
        v-for="item in filteredList"
        :key="item[id]"
        @click="clickItem(item[id])"
        class="item"
      >
        {{ item[label] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      keyword: "",
    };
  },

  props: {
    list: {
      type: Array,
      default: () => {
        return new Array();
      },
    },

    selected: {
      type: String,
      default: "",
    },

    id: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      require: true,
    },
  },

  computed: {
    filteredList() {
      return this.list.filter((item) =>
        item[this.label].includes(this.keyword)
      );
    },

    selectedName() {
      const findObj = this.list.find((item) => item[this.id] === this.selected);
      return findObj ? findObj[this.label] : "선택해주세요";
    },
  },

  methods: {
    clickItem(value) {
      this.$emit("change", value);
    },
  },
};
</script>

<style scoped>
.item {
  cursor: pointer;
}
</style>
