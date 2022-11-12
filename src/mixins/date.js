export default {
  methods: {
    dateToYmd(date) {
      const year = String(date.getFullYear()).padStart(2, 0);
      const month = String(date.getMonth() + 1).padStart(2, 0);
      const day = String(date.getDate()).padStart(2, 0);
      return `${year}-${month}-${day}`;
    },

    dateToYmdHms(date) {
      const hours = String(date.getHours()).padStart(2, 0);
      const minutes = String(date.getMinutes()).padStart(2, 0);
      const seconds = String(date.getSeconds()).padStart(2, 0);
      return `${this.dateToYmd(date)} ${hours}:${minutes}:${seconds}`;
    },

    toWriteTime(dateObj) {
      const now = new Date();
      const diff = now.getTime() - dateObj.getTime();
      const minute = 1000 * 60;
      const hour = 1000 * 60 * 60;
      const day = 1000 * 60 * 60 * 24;

      if (hour > diff) {
        return `${Math.ceil(diff / minute)}분 전`;
      } else if (day > diff) {
        return `${Math.ceil(diff / hour)}시간 전`;
      } else {
        return this.dateToYmdHms(dateObj);
      }
    },
  },
};
