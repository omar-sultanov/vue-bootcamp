<template>
    <div>
        <h3>Time</h3>
        <input type="text" placeholder="add new time" @keydown.enter="addTime"/>
    </div>
</template>
<script>
export default{
    inject:["addTime"]
}
</script>