<template>
  <div>
    {{ result }}
  </div>
</template>

<script>
export default {
  name: "CounterResult",
  props: {
    result: Number
  }
};
</script>
