<template>
  <div class="container my-4">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <add-section @addNewItem="addNewItem" />
        <user-list />
      </div>
    </div>
  </div>
</template>
<script>
import AddSection from './components/AddSection.vue';
import UserList from './components/UserList.vue';
export default {
  components: { AddSection, UserList },
  data() {
    return {
      provideData: { timeList: ['1212', '44212', '12w12'] },
    };
  },
  methods: {
    addNewItem(event) {
      this.provideData.timeList.push(event.target.value);
    },
  },
  provide() {
      return {
        timeData: this.provideData.timeList,
        addTime:this.addNewItem
      };
    },
};
</script>
