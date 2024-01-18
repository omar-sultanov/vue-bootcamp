const app = Vue.createApp({
    data() {
        return {
            itemList:["apple","Cherry","Mango","Apricot"],
            search:""
        }
    },
    computed:{
        filteredList(){
            return this.itemList.filter(i=>i.includes(this.search))
        }
    }
}).mount("#app")