<template>
  <div class="d-flex justify-content-between">
    <span>{{ item.text }}</span>
    <!-- <button class="btn btn-danger" @click="$emit('delete-todo-item',item.id)">Delete</button> -->
    <button class="btn btn-danger" @click="deleteItem(item.id)">Delete</button>
  </div>
</template>
<script>
export default {
  props: ['item'],
  inject:["deleteItem"],
  methods:{
    removeItem(){
        
    }
  }
};
</script>
