<template>
  <div></div>
</template>

<script>
export default {
  created() {
    // this.getData();
    // this.getPromiseAll();
  },

  methods: {
    getPromiseAll() {
      const a = new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(1);
          } catch (error) {
            reject(error);
          }
        }, 1000);
      });

      const b = new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(2);
          } catch (error) {
            reject(error);
          }
        }, 2000);
      });

      Promise.all([a, b]).then((values) => {
        console.log(values);
      });
    },

    async getData() {
      const a = await this.getAData();
      console.log(a);
      const b = await this.getBData();
      console.log(b);
    },

    getAData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(1);
          } catch (error) {
            reject(error);
          }
        }, 1000);
      });
    },

    getBData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            resolve(2);
          } catch (error) {
            reject(error);
          }
        }, 2000);
      });
    },
  },
};
</script>

<style></style>
