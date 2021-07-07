<template>
  <div>
    <ul>
      <list-item
        v-for="(item, index) of todoData"
        :key="index"
        :item="item"
        @handleItem="handleItem"
      ></list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from "./Item.vue";
export default {
  name: "List",
  components: {
    ListItem
  },
  props: {
    todoData: Array
  },
  methods: {
    handleItem(...args) {
      this.$emit("dispatch", ...args);
    }
  }
};
</script>
