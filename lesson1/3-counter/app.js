const app = Vue.createApp({
    data() {
        return {
            counter:0,
            counter2:0
        }
    },
    methods: {


        // plusCount(){
        //     this.counter=this.counter+1
        // },
        // minusCount(){
        //     this.counter=this.counter-1
        // }
    },
    computed:{
        getResultCounter(){
            console.log("COUNTER 1");
            return this.counter>5?"HIGH":"LOW"
        },
        getResultCounter2(){
            console.log("COUNTER 2");
            return this.counter2>5?"HIGH":"LOW"
        }
    },
    watch:{
        counter(newValue, oldValue){
            console.log(oldValue,"=>",newValue);
        },
        getResultCounter(newValue, oldValue){
            console.log(oldValue,"=>",newValue);
        }
    }
}).mount('#app')