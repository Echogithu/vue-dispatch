<template>
  <div>
    <todo-list />
  </div>
</template>

<script>
import TodoList from "../components/TodoList";
export default {
  name: "TodoListPage",
  components: {
    TodoList
  }
};
</script>