<template>
  <div>
    <button v-throttle ="timer" @click="testClick">
      自定义指令，阻止用户多次点击问题
    </button>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
import throttle  from "@/directives/throttle";
export default {
  name: "Directive",
  directives: {
    throttle
  },
  data() {
    return {
      timer: 1500,
      msg: 0 
    };
  },
  methods: {
    testClick() {
      console.log('自定义指令，阻止用户多次点击问题');
      this.msg ++ ;
    }
  }
};
</script>