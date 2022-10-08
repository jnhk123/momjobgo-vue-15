<template>
  <div>
    <p>
      <input type="text" @keyup="handleEvent('keyup', $event)" />
    </p>
    <p>
      <input type="text" @keydown="handleEvent('keydown', $event)" />
    </p>
    <p>
      <input type="text" @keypress="handleEvent('keypress', $event)" />
    </p>
    <hr />
    <p>
      <input
        type="text"
        @keyup.enter="handleEventForkeyUp('엔터입력')"
        @keyup.up="handleEventForkeyUp('방향키 up')"
        @keyup.down="handleEventForkeyUp('방향키 down')"
        @keyup.left="handleEventForkeyUp('방향키 left')"
        @keyup.right="handleEventForkeyUp('방향키 right')"
        @keyup.delete="handleEventForkeyUp('delete, backspace')"
        @keyup.esc="handleEventForkeyUp('esc')"
        @keyup.space="handleEventForkeyUp('sapce')"
      />
      <br />
      <input
        type="text"
        @keyup.ctrl.enter="handleEventForkeyUp('ctrl + enter 복합키 입력')"
      />
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    handleEvent(eventName, e) {
      console.log(eventName, e.target.value);
    },

    handleEventForkeyUp(message) {
      console.log(message);
    },
  },
};
</script>

<style></style>
