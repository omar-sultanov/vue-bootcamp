<template>
  <div>
    <ul class="list-group my-4">
      <li
        v-for="todoItem in provideData.todoList"
        :key="todoItem.id"
        class="list-group-item list-group-item-dark my-1"
      >
        <TodoItem :item="todoItem"/>
      </li>
    </ul>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
  inject:["provideData"],
  components: { TodoItem },
  // props: ['itemList'],
};
</script>
