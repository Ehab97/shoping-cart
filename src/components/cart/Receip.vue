<template>
<div class="row justify-center">
  <div class="col-12 col-md-4" v-for="(receip,index) in getRecieps" :key="index">
    <q-card class="my-card">
      <q-img :src="receip.imageUrl">
        <div class="absolute-bottom">
          <div class="text-h6">{{receip.name}}</div>
        </div>
      </q-img>

      <q-card-actions class="justify-center">
        <q-btn @click="addToCart(receip)" flat>
          <font-awesome-icon icon="plus" />
        </q-btn>
        <q-btn flat>
          <router-link :to="{name:'edit-reciep',params:{id:receip.id}}">
            <font-awesome-icon icon="pencil-alt" />
          </router-link>
        </q-btn>
        <q-btn @click="deleteReciep(receip.id)" flat>
          <font-awesome-icon icon="trash-alt" />
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'  
export default {
// props:['receip'],
methods:{
  ...mapMutations(['addToCart']),
  deleteReciep(id){
    this.$store.commit("deleteReciep", id);
    this.$router.push("/home");
  }
},
computed:{...mapGetters(['getRecieps'])}
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
</style>