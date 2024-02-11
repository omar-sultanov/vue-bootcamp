<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
    <ul>
        <li v-for="date in dates" :key="date">{{ date }}</li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['list','dates']),
  },
};
</script>
