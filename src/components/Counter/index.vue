<template>
  <div>
    <counter-result :result="result"></counter-result>
    <div>
      <counter-button
        innerText="+"
        action="PLUS"
        @dispatch="dispatch"
      ></counter-button>
      <counter-button
        innerText="-"
        action="MINUS"
        @dispatch="dispatch"
      ></counter-button>
    </div>
  </div>
</template>

<script>
import CounterResult from "./Result";
import CounterButton from "./Button";

import dispatch from "../../dispatchers/counter";

export default {
  name: "Counter",
  components: {
    CounterResult,
    CounterButton
  },
  data() {
    return {
      result: 0
    };
  },
  methods: {
    dispatch(...args) {
      dispatch(this)(...args);
    }
  }
};
</script>
