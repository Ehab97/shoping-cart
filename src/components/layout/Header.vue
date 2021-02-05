<template>
     <q-toolbar class="bg-dark text-white shadow-2">
          <!-- <div class="wrapper"> -->
               <router-link to="/home">
                    <q-btn flat label="HomePAge" />
               </router-link>
               <q-space />
               <q-tabs v-model="tab" shrink stretch>
                     <router-link to="/cart" v-if="show">
                        <font-awesome-icon icon="shopping-cart"/>
                    </router-link>
                     <span style="margin-left:5px" v-if="show">
                          {{this.$store.getters.totalCart}}
                     </span>
                    <router-link to="/cart" v-if="show">
                         <q-tab name="tab2" label="Cart"/>
                    </router-link>
                    <router-link to="/add-receip" v-if="show">
                         <q-tab name="tab3" label="add new reciep" />
                    </router-link>
                    <router-link v-if="show" to="/" @click.native="logout">
                         <q-tab name="tab4" label="logout" />
                    </router-link>
                    <router-link to="/" v-if="!show">
                         <q-tab name="tab4" label="login/signup" />
                    </router-link>
               </q-tabs>

          <!-- </div> -->
     </q-toolbar>
</template>

<script>
export default {
     data(){
          return{
               tab:'',
               show:null
          }
     },
     methods:{
          logout(){
               this.$store.state.auth=false;
          }
     },
     created(){
          this.show=this.$store.state.auth;
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