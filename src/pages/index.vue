<template>
  <div class="container">
    <router-link to="/counter">1.派发器思想-counter</router-link>
    <router-link to="/todolist">2.派发器思想-待办清单</router-link>
    <router-link to="/directive">3.Vue自定义指令</router-link>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>
<style>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
