<template>
  <q-card class="my-card">
    <q-img :src="receip.imageUrl">
      <div class="absolute-bottom">
        <div class="text-h6">{{receip.name}}</div>
        <p>{{receip.descrption}}</p>
        <ul>
          <li v-for="item in receip.option" :key="item">{{item}}</li>
        </ul>
      </div>
    </q-img>

    <q-card-actions class="justify-center">
      <q-btn v-if="!show" @click="login"  flat>
        <font-awesome-icon icon="plus" />
      </q-btn>
       <q-btn v-if="show" @click="addToCart(receip)" flat>
        <font-awesome-icon icon="plus" />
      </q-btn>
      <q-btn flat>
        <router-link v-if="!show" @click.native="login" :to="{name:'edit-reciep',params:{id:receip.id}}">
          <font-awesome-icon icon="pencil-alt" />
        </router-link>
        <router-link v-if="show" :to="{name:'edit-reciep',params:{id:receip.id}}">
          <font-awesome-icon icon="pencil-alt" />
        </router-link>
      </q-btn>
      <q-btn v-if="!show" @click="login" flat>
        <font-awesome-icon icon="trash-alt" />
      </q-btn>
        <q-btn v-if="show" @click="deleteReciep(receip.id)" flat>
        <font-awesome-icon icon="trash-alt" />
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'  
export default {
props:['receip'],
data(){
  return{
    show:null
  }
},
methods:{
  ...mapMutations(['addToCart']),
  deleteReciep(id){
    this.$store.commit("deleteReciep", id);
    // this.$router.push("/home");
  },login(){
    let v=confirm('you need to login/sign up to full access servcie create update delete modify and so on');
    if (v) {
      this.$router.push("/");
    }
  }
},
computed:{...mapGetters(['getRecieps'])}, 
created(){
          this.show=this.$store.state.auth;
     }
}
</script>

<style scoped>
.q-card{
    width: 90%;
    margin: 15px 5px;
    height: 280px;
    contain: content;
}
.q-card .q-img{
  height: 230px  !important;
  /* object-fit: cover; */
  background-size: cover;
}
.q-card a{
  text-decoration: none;
  color:#000;
}
.absolute-bottom{
   transition: height 1s;
   height: 25%;
}
.absolute-bottom p,.absolute-bottom ul{
  padding: 0;
  display: none;
}
.absolute-bottom ul li{
  list-style: none;
}
.absolute-full:hover .absolute-bottom{
height: 80%;
}
.absolute-full:hover .absolute-bottom p ,.absolute-bottom ul{
  display: block;
}
</style>