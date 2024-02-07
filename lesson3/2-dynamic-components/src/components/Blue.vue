<template>
    <div  class="p-3 mb-2 bg-primary text-white">
        <h1 class="display-4">Display 4</h1>
        <input type="text" name="" id="">
    </div>
</template>
<script>
export default{
    mounted() {
        console.log("MOUNTED")
    },
    activated(){
        console.log('BLUE ACTIVATED');
    },
    deactivated(){
        console.log("BLUE DEACTIVATED");
    }
}
</script>