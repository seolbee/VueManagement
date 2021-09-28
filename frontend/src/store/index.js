import { createStore } from 'vuex';
import {io} from 'socket.io-client';
import router from '../router';

const client = io('http://localhost:3000');

export default createStore({
  state: {
    user : {},
    token : ''
  },
  mutations: {
    // setUser(state, payload) {
      
    // },
    // setToken(state, payload) {

    // }
  },
  actions: {
    login(context, data){
      client.emit('login', data);
      client.on('login-res', res => {
        if(res.success) {
          // console.log(res);
          // commit('setUser', state, {...user}); 
          // router.push('/');
        } else {
          alert(res.msg);
        }
      });
    },
    register(context, data){
      client.emit('register', data);
      client.on('register-res', res => {
        if(res.success) router.push('/login');
        else alert(res.msg);
      })
    }
  }
});