import Vue from "vue";
import Router from "vue-router";
import CounterPage from "@/pages/Counter";
import TodoListPage from "@/pages/TodoList";
import DirectivePage from "@/pages/Directive";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TodoListPage",
      component: TodoListPage
    },
    {
      path: "/counter",
      name: "CounterPage",
      component: CounterPage
    },
    {
      path: "/directive",
      name: "DirectivePage",
      component: DirectivePage
    }
  ]
});
