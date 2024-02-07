<template>
  <div>
    <Card>
      <template #card-title>
        <h5 class="card-title">Card title</h5>
      </template>
      <template v-slot:card-text>
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in
          alias, aliquid iusto vitae labore sequi dolorem architecto, est
          debitis incidunt porro quaerat quos quasi illum vel doloremque itaque
          consectetur.
        </p>
      </template>
      <template #default>
        <a href="#" class="btn btn-primary">Download</a>
      </template>
    </Card>
  </div>
</template>
<script>
import Card from './components/Card.vue';

export default {
  components: { Card },
};
</script>
