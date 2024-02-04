<template>
  <div class="d-flex justify-content-center flex-column">
    <label
      for="exampleFormControlInput1"
      class="form-label text-center display-5"
      >Todo App</label
    >
    <input
      v-model="todoItem"
      @keydown.enter="addNewItem(todoItem)"
      type="email"
      class="form-control"
      id="exampleFormControlInput1"
      placeholder="New item ..."
    />
  </div>
</template>
<script>
export default {
    props:{
        addNewItem:{
            type:Function,
            required:true
        }
    },
  data() {
    return {
      todoItem: null,
    };
  },
  methods: {
    // addItem() {
    //   this.$emit('add-todo-item', this.todoItem);
    //   this.todoItem=""
    // },
  },
};
</script>
