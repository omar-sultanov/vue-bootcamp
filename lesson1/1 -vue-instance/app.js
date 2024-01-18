const app = Vue.createApp({
    data() {
        return {
            //properties
            title:"Vue.js Bootcamp 1",
            description:"Lorem impson ...",
            url:"https://www.patika.dev",
            course:{
                title:"Vue",
                alt:"edu",
                target:"edu.target",
                url:"https://www.patika.dev",
            },
            owner:"kablosuzkedi",
            coords:{
               x:0,
               y:0
            }
        }
    },
    methods: {
        changeTitle(item){
            this.title=item
        },
        changeCoords(message,event){
            console.log(event);
            this.coords.x=event.x
            this.coords.y = event.y
        }
    },
}).mount('#app')