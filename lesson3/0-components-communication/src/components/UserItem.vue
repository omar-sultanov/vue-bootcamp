<template>
    <div>
        <li v-for="time in timeData" :key="time">time {{ time }}</li>
    </div>
</template>
<script>
    export default{
        inject:['timeData']
    }
</script>