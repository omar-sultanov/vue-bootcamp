<template>
    <div class="text-center">
        <h3 >Home</h3>
        <input type="text" @keydown.enter="addPathToHead"/>
    </div>
</template>
<script>

export default{
 methods: {
    addPathToHead(e){
        console.log(e.target.value);
        // this.$router.push(`/details/${e.target.value}`)
        this.$router.push({
            name:"DetailsPage",
            params:{
                userID:e.target.value
            },
            query:{
                type:"DetailsAuth",
                user:"Omar"
            }
        })
    }
 },
}
</script>