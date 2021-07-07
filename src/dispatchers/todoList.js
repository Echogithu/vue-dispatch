/**
 * 逻辑通过对应type触发派发器
 */

import { ADD, COMPLETED, REMOVE } from "../actions/todoList";
import reducer from "../reducers/todoList";

export default ctx => {
  const { addItem, changeCompleted, removeItem } = reducer(ctx.todoData);

  return function(type, arg) {
    switch (type) {
      case ADD:
        ctx.todoData = addItem(arg);
        break;
      case COMPLETED:
        ctx.todoData = changeCompleted(arg);
        break;
      case REMOVE:
        ctx.todoData = removeItem(arg);
        break;
      default:
        break;
    }
  };
};
