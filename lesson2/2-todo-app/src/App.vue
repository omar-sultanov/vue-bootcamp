<template>
  <div class="container my-5">
    <div class="row d-flex justify-content-center">
      <div class="col-6 border">
        <AddSection :addNewItem="addNewItem"/>
        <TodoList :itemList="todoList" @delete-todo-item="deleteItem"/>
        <ResultSection :itemList="todoList"/>
      </div>
    </div>
  </div>
</template>
<script>
import AddSection from './components/AddSection.vue';
import ResultSection from './components/ResultSection.vue';
import TodoList from './components/TodoList.vue';


export default {
    data() {
        return {
            todoList: [
                { id: 'item1', text: 'item 1' },
                { id: 'item2', text: 'item 2' },
                { id: 'item3', text: 'item 3' },
                { id: 'item4', text: 'item 4' },
            ],
        };
    },
    methods: {
        deleteItem(id) {
            this.todoList = this.todoList.filter((item) => item.id != id);
        },
        addNewItem(todo) {
            this.todoList.push({ id: new Date().getTime, text: todo });
            todo = null
            console.log(todo);
        },
    },
    components: { TodoList, ResultSection, AddSection }
};
</script>
<style></style>
