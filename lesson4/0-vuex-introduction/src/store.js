import { createStore } from 'vuex';

const store = createStore({
  state: {
    person: {
      name: 'Omar',
      surname: 'Sultanov',
      age: '26',
    },
    theme: 'dark',
    dates:["23434545"],
    itemList: [
      { id: '1', name: 'ALi', sex: 'M' },
      { id: '2', name: 'Josh', sex: 'M' },
      { id: '3', name: 'Bush', sex: 'M' },
    ],
  },
  mutations:{
    newItem(state, payload){
      state.itemList.push(payload)
    }
  },
  actions:{
    newTime(context, payload){
      context.state.dates.push(payload)
    }
  },
  getters:{
    list:state=>state.itemList.filter(item=>item.sex==="M"),
    dates:state=>state.dates.filter(date=>date)
  }
});

export default store;
