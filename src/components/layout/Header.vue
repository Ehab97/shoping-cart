<template>
     <q-toolbar class="bg-dark text-white shadow-2">
          <!-- <div class="wrapper"> -->
               <router-link to="/home">
                    <q-btn flat label="HomePAge" />
               </router-link>
               <q-space />
               <q-tabs v-model="tab" shrink stretch>
                     <router-link to="/cart">
                        <font-awesome-icon icon="shopping-cart"/>
                    </router-link>
                     <span style="margin-left:5px">
                          {{this.$store.getters.totalCart}}
                     </span>
                    <router-link to="/cart">
                         <q-tab name="tab2" label="Cart"/>
                    </router-link>
                    <router-link to="/add-receip">
                         <q-tab name="tab3" label="add new reciep" />
                    </router-link>
                    <router-link to="/">
                         <q-tab name="tab4" label="logout" />
                    </router-link>
               </q-tabs>

          <!-- </div> -->
     </q-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
     data(){
          return{
               tab:''
          }
     },
     // methods:{...mapMutations(['totalCart'])}
     created(){
          // ...mapGetters(['totalCart']),
     }
}
</script>

<style>
a{
text-decoration: none !important;
color: #fff;
}
.wrapper{
     width: 100% !important;
     /* aspect-ratio: 16/9; */
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: row;
}
</style>