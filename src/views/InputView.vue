<template>
  <div>
    <p>
      name :
      <input type="text" name="name" :value="form.name" @input="changeInput" />
    </p>
    <p>
      age :
      <input type="number" name="age" :value="form.age" @input="changeInput" />
    </p>
    <p>
      email :
      <input
        type="text"
        name="email"
        :value="form.email"
        @input="changeInput"
      />
    </p>
  </div>
</template>

<script>
export default {
  inject: ["form", "changeForm"],

  methods: {
    changeInput(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.changeForm(name, value);
    },
  },
};
</script>

<style></style>
