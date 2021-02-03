<template>
     <div class="row justify-center">
          <div class="col-12 col-md-4" v-for="(receip,index) in getRecieps" :key="index">
               <Reciep :receip="receip" />
          </div>
     </div>
</template>

<script>
import Reciep from './Receip'
import { mapGetters } from 'vuex'  
export default {
components:{
     Reciep
},
computed:{
     ...mapGetters(['getRecieps'])
}
}
</script>

<style>

</style>