<template>
  <div>
    <CounterItem></CounterItem>
    <HeaderItem/>
  </div>
</template>
<script>
import CounterItem from './components/CounterItem.vue';
import HeaderItem from './components/HeaderItem.vue'
export default{
  components:{
    CounterItem,
    HeaderItem
  }
}
</script>
<style></style>