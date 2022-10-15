<template>
  <div>
    <h5>{{ $route.params.key }} 게시물 상세 페이지입니다.</h5>
    <p>
      {{ $route.query.title }}
    </p>
    <button @click="$router.push({ name: 'board' })">이전으로</button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
