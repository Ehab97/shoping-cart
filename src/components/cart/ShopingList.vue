<template>
  <div class="row justify-center">
       <div class="col-12 col-md-4" v-for="(cart,index) in carts" :key="index">                    
          <q-card class="my-card">
               <q-card-section class="bg-grey-8 text-white">
                    <div class="text-h6">{{cart.name}}</div>
                    <div class="text-subtitle2">Quantity : <strong>{{cart.counter}}</strong></div>
               </q-card-section>

               <q-card-actions vertical align="center">
                    <q-btn @click="raiseQuantity(cart.id)" flat><font-awesome-icon icon="plus"/></q-btn>
                    <q-btn @click="lowQuantity(cart.id)" flat><font-awesome-icon icon="minus"/></q-btn>
                    <q-btn @click="deleteCart(cart.id)" flat><font-awesome-icon icon="trash-alt" /></q-btn>
               </q-card-actions>
          </q-card>
       </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
     data() {
          return {
               carts: null
          }
     },
     methods:{
          ...mapMutations(['raiseQuantity','lowQuantity']),
          deleteCart(id){
               this.$store.commit("deleteCart", id);
               this.$router.push("/home");
          }
     },
     async created() {
          this.carts = this.$store.getters.getAllcart;
          // console.log(this.carts.name);
     }
}
</script>

<style scoped>
.q-card{
     height: 280px  !important;
     width: 90%;
     margin: 15px auto;
     contain: content;
}
.q-card>div:first-child{
     height: 75%;
}
.q-card>div:not(:first-child){
     height: 25%;
     display: flex;
     justify-content: center;
     
}
</style>