import { createStore } from 'vuex';
import address from './address';
import contact from './contact';
const store = createStore({
  state: {
    appName: 'GETCONTACT',
  },
  modules: {
    address,
    contact,
  },
  actions: {
    changeName(context, payload) {
      context.state.appName = payload;
    },
  },
});

export default store;
