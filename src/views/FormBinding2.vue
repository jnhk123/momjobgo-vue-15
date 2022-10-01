<template>
  <div>
    <div>
      <h3>single select</h3>
      <select v-model="select">
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
      </select>
      <p>
        {{ select }}
      </p>
    </div>
    <div>
      <h3>multi select</h3>
      <select v-model="multiSelect" multiple>
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
      </select>
      <p>
        {{ multiSelect }}
      </p>
    </div>
    <div>
      <h3>checkbox</h3>
      <input type="checkbox" v-model="checkbox" /> 체크박스
      <p>
        {{ checkbox }}
      </p>
    </div>
    <div>
      <h3>multi checkbox</h3>
      <input type="checkbox" v-model="checkboxes" value="apple" /> 사과
      <input type="checkbox" v-model="checkboxes" value="orange" /> 오렌지
      <input type="checkbox" v-model="checkboxes" value="grape" /> 포도
      <p>
        {{ checkboxes }}
      </p>
    </div>
    <div>
      <h3>radio</h3>
      <input type="radio" v-model="radio" value="apple" /> 사과
      <input type="radio" v-model="radio" value="orange" /> 오렌지
      <input type="radio" v-model="radio" value="grape" /> 포도
      <p>
        {{ radio }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "apple",
      multiSelect: [],
      checkbox: false,
      checkboxes: [],
      radio: "",
    };
  },

  created() {
    setTimeout(() => {
      this.select = "orange";
    }, 2000);
  },
};
</script>

<style></style>
