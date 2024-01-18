const app = Vue.createApp({
    data() {
        return {
          todoList:[
            {id:1, text:"Vue lesson 1", completed:false, },
            {id:2, text:"Vue lesson 2", completed:false, },
            {id:3, text:"Vue lesson 3", completed:false, },
            {id:4, text:"Vue lesson 4", completed:false, }
          ]
     
        }
    },
    methods: {
        addNewItem(event){
            // console.log(item);
            this.todoList.push({
                id:new Date().getTime(),
                text:event.target.value,
                comleted:false
            })
            event.target.value=""
        },
        removeItem(id){
            this.todoList = this.todoList.filter(todo=>todo.id!==id)
        }
    },
    computed:{
        completedAmount(){
            return this.todoList.filter(item=>item.completed===true).length
        },
        unCompletedAmount(){
            return this.todoList.filter(item=>item.completed===false).length
        }
    }

})
app.mount("#app")
