const app = Vue.createApp({
    data() {
        return {
            title:"test header"
        }
    },
    beforeCreate() {
        console.log("beforeCREATED");
    },
    created() {
        console.log("CREATED")

        setTimeout(()=>{
            this.title= "TEST 2"
        }, 2000)
    },
    beforeMount() {
        console.log("beforeMOUNTED")
    },
    mounted() {
        console.log("MOUNTED")
    },
    beforeUpdate() {
        console.log("beforeUpdated")
    },
    updated() {
        console.log("UPDATED")
    },
    beforeUnmount() {
        console.log("beforeUNMOUNTED")
    },
    unmounted() {
        console.log("UNMOUNTED")
    },
});
app.mount("#app")

setTimeout(()=>{
    app.unmount()
    console.log("Ddd");
}, 4000)