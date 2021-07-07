/**
 * 该组件中每个type对应的逻辑
 */

 function todoReducer(data) {
  function addItem(newItem) {
    return data.concat(newItem);
  }

  function changeCompleted(id) {
    return data.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
  }

  function removeItem(id) {
    return data.filter(item => item.id !== id);
  }

  return {
    addItem,
    changeCompleted,
    removeItem
  };
}

export default todoReducer;
