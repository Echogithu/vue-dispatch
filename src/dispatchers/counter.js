import reducer from "../reducers/counter";
import { PLUS, MINUS } from "../actions/counter";

export default (ctx) => {
  // ctx为传入的vue组件示例，这样能拿到data
  const { plus, minus } = reducer(ctx.$data);

  return function(type, ...args) {
    switch (type) {
      case PLUS:
        ctx.result = plus(...args);
        break;
      case MINUS:
        ctx.result = minus(...args);
        break;
      default:
        break;
    }
  };
};
