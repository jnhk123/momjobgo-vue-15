<template>
  <div id="container">
    <h1>TODO LIST</h1>
    <p>
      <input
        class="comment-input"
        type="text"
        v-model="comment"
        placeholder="todo list를 등록해주세요."
        ref="input_ref"
      />
      <span class="submit" @click="apply">등록</span>
    </p>
    <ul class="todo-ul">
      <li class="todo-li" v-for="(todo, index) in todoList" :key="index">
        <span
          style="color: red"
          v-show="todo.createdAt.getTime() + 1000 * 10 > new Date().getTime()"
          >New</span
        >
        {{ todo.comment }}
        <img
          @click="deleteTodo(index)"
          class="icon"
          src="./assets/delete_icon.png"
        />
      </li>
      <li class="todo-li" v-if="todoList.length === 0">
        comment를 입력해주세요.
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
      todoList: [],
    };
  },

  methods: {
    apply() {
      if (!this.comment) {
        alert("comment를 입력해주세요.");
        this.$refs.input_ref.focus();
        return;
      }
      this.todoList.push({ comment: this.comment, createdAt: new Date() });
    },

    deleteTodo(index) {
      this.todoList.splice(index, 1);
    },
  },

  created() {
    setInterval(() => {
      this.todoList = this.todoList.map((todo) => todo);
    }, 2000);
  },
};
</script>

<style scoped>
#container {
  width: 500px;
  margin: 50px auto;
  text-align: center;
}

.submit {
  margin-left: 10px;
  border: 1px solid #b6ff24;
  background-color: #b6ff24;
  width: 60px;
  display: inline-block;
  border-radius: 20px;
  cursor: pointer;
}

.todo-li {
  list-style: none;
  border: 1px solid #73a5f5;
  border-radius: 20px;
  margin-bottom: 10px;
}

.icon {
  padding: 10px 5px;
  width: 15px;
  height: 20px;
}
</style>
