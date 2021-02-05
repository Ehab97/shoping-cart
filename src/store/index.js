import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recieps:[
      {id:1,name:'pizza',imageUrl:'https://cdn.quasar.dev/img/parallax2.jpg',descrption:'good',option:['1','3']},
      {id:2,name:'Cheese',imageUrl:'https://cdn.quasar.dev/img/parallax1.jpg',descrption:'good',option:['1','3']},
      {id:3,name:'meat',imageUrl:'https://cdn.quasar.dev/img/parallax2.jpg',descrption:'good',option:['1','3']}
    ],
    users:[
      {id:1,email:'ehab@gmail.com',password:'12345678'}
    ],
    cart:[
      
    ],
    auth:false
  },
  getters:{
    getUsers:(state) => state.users,
    getRecieps:(state) => {
      state.recieps
      let recieps = JSON.parse(localStorage.getItem('recieps'))
      return recieps
    },
    getReciep:state=>(id) =>  {
      let recieps=JSON.parse(localStorage.getItem('recieps'));
      state.recieps=null;
      state.recieps=JSON.parse(localStorage.getItem('recieps'));
      return recieps.find(reciep => reciep.id === id);
    },
    getAllcart:(state) => state.cart,
    totalCart:(state)=> state.cart.reduce((a, b) =>  a + b.counter, 0)
  },
  mutations: {
    setUser:(state)=>localStorage.setItem('users', JSON.stringify(state.users)),
    addUser:(state, user) =>state.users.push(user),
    addReciep:(state,receip)=>{
      (state.recieps.push(receip),
      localStorage.removeItem('recieps'),
      localStorage.setItem('recieps', JSON.stringify(state.recieps)))
    },
    deleteReciep:(state,id)=>{
      state.recieps= state.recieps.filter(recep=>recep.id!==id),
      localStorage.removeItem('recieps'),
      localStorage.setItem('recieps', JSON.stringify(state.recieps))
    },
    editReciep: (state, payload) => {
        let recieps = JSON.parse(localStorage.getItem('recieps'))
        recieps.find(receip => receip.id === payload.id)
        let objIndex = recieps.findIndex((obj => obj.id == payload.id));
        state.recieps[objIndex] = payload.recieps;
        recieps[objIndex] = payload.recieps;
        localStorage.removeItem('recieps');
        localStorage.setItem('recieps', JSON.stringify(recieps));
      },
      addToCart: (state, payload) => {
        const found = state.cart.some(el => el.id === payload.id);
        if (!found) {
          state.cart.push({
            id: payload.id,
            name: payload.name,
            userId:1,
            counter: 1
          });
          localStorage.setItem('cart', JSON.stringify(state.cart));
        } else {
          let index = state.cart.findIndex(item => item.id === payload.id)
          state.cart[index].counter++;
          localStorage.removeItem('cart');
          localStorage.setItem('cart', JSON.stringify(state.cart))
        }
      },
      deleteCart:(state,id)=>{
        state.cart= state.cart.filter(item=>item.id!==id),
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(state.cart))    
      },
      raiseQuantity: (state, id) => {
        let index = state.cart.findIndex(item => item.id === id);
        state.cart[index].counter++;
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(state.cart));
        
      }, 
      lowQuantity: (state, id) => {
        let index = state.cart.findIndex(item => item.id === id);
        if(state.cart[index].counter >0){state.cart[index].counter--}
        else{state.cart=state.cart.filter(item=>item.id!==id);}
       
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(state.cart));   
      },
    },
  actions: {
  },
  modules: {
  }
})
