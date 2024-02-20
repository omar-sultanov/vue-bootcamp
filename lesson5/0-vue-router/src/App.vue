<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <nav class="navbar navbar-light bg-light">
          <form class="container-fluid justify-content-start">
            <router-link
              class="btn btn-outline-success me-2"
              type="button"
              to="/"
              >Home</router-link
            >
            <router-link
              class="btn btn-outline-success me-2"
              type="button"
              to="/about"
              >About</router-link
            >
            <router-link
              class="btn btn-outline-success me-2"
              type="button"
              to="/details"
              >Details</router-link
            >
          </form>
        </nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
