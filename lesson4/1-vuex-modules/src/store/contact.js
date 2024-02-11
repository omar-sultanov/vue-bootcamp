export default{
    state:{
        contacts:[
            {name:"Omar", phone:"9273655789"},
            {name:"Josh", phone:"9273633389"}
        ]
    },
    getters:{
        contacts:state=>state.contacts.map(item=>item)
    }
    
}