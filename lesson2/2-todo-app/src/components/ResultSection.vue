<template>
    <div>
        <p>amount of items: {{ provideData.todoList.length }}</p>
    </div>
</template>
<script>
    export default{
        inject:["provideData"]
        // props:["itemList"]
    }
</script>