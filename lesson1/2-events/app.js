const app = Vue.createApp({
    data() {
        return {
            inputValue:null
        }
    },
    methods: {
        addInputValue(event){
            console.log(event.target.value);
            this.inputValue = event.target.value
        },
     
    },
}).mount("#app")