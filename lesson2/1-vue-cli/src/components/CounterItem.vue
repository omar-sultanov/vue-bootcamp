<template>
    <div class="counter border">
        <div class="counter-sm">
        <h3 class="mb-2">{{counter}}</h3>
        <button @click="counter--" class="red sm">-</button>
        <button @click="counter++" class="green sm">+</button>
    </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            counter:0
        }
    },
}
</script>
<style>
.border{
    border: solid rgb(34, 44, 34) 1px;
    padding: 10px;
}
</style>