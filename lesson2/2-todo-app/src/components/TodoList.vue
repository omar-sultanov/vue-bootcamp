<template>
  <div>
    <ul class="list-group my-4">
      <li
        v-for="todoItem in itemList"
        :key="todoItem.id"
        class="list-group-item list-group-item-dark my-1"
      >
        <TodoItem :item="todoItem" @delete-todo-item="$emit('delete-todo-item',$event)"/>
      </li>
    </ul>
  </div>
</template>
<script>
import TodoItem from './TodoItem.vue';
export default {
  components: { TodoItem },
  props: ['itemList'],
};
</script>
