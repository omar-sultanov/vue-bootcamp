<template>
    <div>
        <p>amount of items: {{ itemList.length }}</p>
    </div>
</template>
<script>
    export default{
        props:["itemList"]
    }
</script>