<template>
  <div>
    <h3>{{ $store.state.appName }}</h3>
    <div>
      <ul>
        <li v-for="contact in contacts" :key="contact.phone">{{ contact.name }}</li>
      </ul>
      <ul>
        <li v-for="address in infoAddress" :key="address.city">{{ address.city }}</li>
      </ul>
    </div>
    <button @click="changeAppName">changeAppName</button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default{
  computed:{
    ...mapGetters(["contacts","infoAddress"])
  },
  methods: {
    changeAppName(){
      const newName= "GET INFO"
      this.$store.dispatch("changeName", newName)
    }
  },
}
</script>