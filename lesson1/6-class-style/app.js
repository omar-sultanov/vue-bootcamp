const app = Vue.createApp({
    data() {
        return {
            isColor:false,
            isBorder:false,
            bgColor:"yellow"
        }
    },
    computed:{
        addClasses(){
            return {red:this.isColor, bord:this.isBorder}
        }
    }
})
app.mount("#app")