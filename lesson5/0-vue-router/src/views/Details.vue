<template>
    <div>
        <h3 class="text-center">DETAILS</h3>
        <h4>{{ $route.params.userID }}</h4>
    </div>
</template>
<script>
export default{
    created(){
    console.log(this.$route);
    console.log(this.$router);
  }
}
</script>