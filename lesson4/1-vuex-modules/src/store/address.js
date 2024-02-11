export default{
    state:{
        infoAddress:[
            {city:"Gusar", street:"shaxhdag"},
            {city:"Baku", street:"Asimov"}
        ]
    },
    getters:{
        infoAddress:state=>state.infoAddress.map(item=>item)
    }
}