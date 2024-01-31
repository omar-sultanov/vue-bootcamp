<template>
  <div class="container my-5">
    <div class="row d-flex justify-content-center">
      <div class="col-6 border">
        <div class="d-flex justify-content-center flex-column">
          <label
            for="exampleFormControlInput1"
            class="form-label text-center display-5"
            >Todo App</label
          >
          <input
            @keydown.enter="addNewItem"
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="New item ..."
          />
        </div>
        <ul class="list-group my-4">
          <li
            v-for="todoItem in todoList"
            :key="todoItem.id"
            class="list-group-item list-group-item-dark d-flex justify-content-between my-1"
          >
            <span>{{ todoItem.text }}</span>
            <button class="btn btn-danger" @click="deleteItem(todoItem.id)">
              Delete
            </button>
          </li>
        </ul>
        <p>amount of items: {{ todoList.length }}</p>
      </div>
    </div>
  </div>
</template>
<script>
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
    addNewItem(event) {
      this.todoList.push({ id: new Date().getTime, text: event.target.value });
      event.target.value = '';
    },
  },
};
</script>
<style></style>
