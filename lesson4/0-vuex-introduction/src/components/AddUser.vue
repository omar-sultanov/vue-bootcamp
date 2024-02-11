<template>
  <div>
    <button @click="addNewItem">Add new Item</button>
    <button @click="newDate">async add</button>
  </div>
</template>
<script>
export default {
  methods: {
    addNewItem() {
      const item = { id: '4', name: 'Obama', sex: 'M' };
      this.$store.commit("newItem",item);
    },
    newDate(){
        this.$store.dispatch("newTime",new Date().getTime())
    }
  },
};
</script>
