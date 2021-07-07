<template>
  <div>
    <td-title :title="title"></td-title>
    <td-form @dispatch="dispatch"></td-form>
    <td-list :todoData="todoData" @dispatch="dispatch"></td-list>
  </div>
</template>

<script>
import TdTitle from "./Title.vue";
import TdForm from "./Form.vue";
import TdList from "./List";

import dispatch from "../../dispatchers/todoList";
export default {
  name: "TodoList",
  components: {
    TdTitle,
    TdForm,
    TdList
  },
  data() {
    return {
      title: "Todo List",
      todoData: []
    };
  },
  methods: {
    dispatch(...args) {
      dispatch(this)(...args);
    }
  }
};
</script>
