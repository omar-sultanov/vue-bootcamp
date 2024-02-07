<template>
  <div class="container">
    <div class="btn-group d-flex justify-content-center w-25 m-2" role="group" aria-label="Basic mixed styles example">
      <button @click="activeComponent='Red'" type="button" class="btn btn-danger">Red</button>
      <button @click="activeComponent='Blue'" type="button" class="btn btn-primary">Blue</button>
      <button @click="activeComponent='Green'" type="button" class="btn btn-success">Green</button>
    </div>
    <!-- <Red v-if="activeComponent==='Red'"/>
    <Blue v-if="activeComponent==='Blue'"/>
    <Green v-if="activeComponent==='Green'"/> -->
      <keep-alive>
        <component :is=activeComponent></component>
      </keep-alive>
    
  </div>
</template>
<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';
export default {
  components: { Blue, Red, Green },
  data() {
    return {
      activeComponent:"Red"
    }
  },
};
</script>
