<template>
  <div>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
      quas atque. Vero dolor ad delectus sapiente nulla error, atque facere
      deserunt veniam aliquam modi voluptatum qui molestiae amet est. Omnis.
    </p>
    <UserList />
    <AddUser />
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue';
import UserList from './components/UserList.vue';

export default {
  components: { UserList, AddUser },
  name: 'App',
};
</script>
