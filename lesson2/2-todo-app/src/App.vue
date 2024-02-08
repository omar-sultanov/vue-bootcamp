<template>
  <div class="container my-5">
    <div class="row d-flex justify-content-center">
      <div class="col-6 border">
        <AddSection :addNewItem="addNewItem" />
        <ListSection />
      </div>
    </div>
  </div>
</template>
<script>
import AddSection from './components/AddSection.vue';
import ListSection from './components/ListSection.vue';



export default {
    data() {
        return {
            provideData:{
              todoList: [
                { id: 'item1', text: 'item 1' },
                { id: 'item2', text: 'item 2' },
                { id: 'item3', text: 'item 3' },
                { id: 'item4', text: 'item 4' },
            ],}
        };
    },
    provide(){
      return{
        provideData:this.provideData,
        deleteItem:this.deleteItem
      }

    },
    methods: {
        deleteItem(id) {
            this.provideData.todoList = this.provideData.todoList.filter((item) => item.id != id);
        },
        addNewItem(todo) {
            this.provideData.todoList.push({ id: new Date().getTime, text: todo });
            todo = null
            console.log(todo);
        },
    },
    components: { ListSection, AddSection }
};
</script>
<style></style>
