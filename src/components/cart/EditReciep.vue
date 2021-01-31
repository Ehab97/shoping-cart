<template > 
     <div class="row justify-center">
          <div class="col-12 parent">
               <div class="q-pa-md">
                    <form>
                    <div class="q-gutter-md" style="max-width: 300px">
                         <h3>Edit Reciep</h3>
                         <q-input filled 
                                   v-model="name"
                                   @input="reciep.name"       
                                   label="name" />
                         <q-input filled
                                  v-model="imageUrl"
                                  @input="reciep.imageUrl"
                                  label="image url" />
                         <q-input filled 
                                   v-model="descrption" 
                                   @input="reciep.descrption"
                                   label="descrption" />
                         <div class="q-pa-lg">
                              <h5>Grediants</h5>
                              <q-option-group 
                              v-model="option" 
                              :options="options" 
                              color="green" 
                              type="checkbox"
                               />
                         </div>
                           <div class="text-center">
                                   <q-btn label="Add" type="submit" 
                                   color="dark" @click="onSubmit" />
                              </div>
                    </div>
                    </form>
                       <div class="error" v-if="error">
                         {{msg}}
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
     data () {
    return {
     reciep: null,
     id:null,    
     name:'',
     imageUrl:'',
     descrption:'',
     option: [ ],
     options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ],
      error:false,
      msg:''
    }
  },
  methods:{
       ...mapMutations(['editReciep']),
         onSubmit(e) {
               e.preventDefault();
               if (this.name === '') {
                    this.msg = 'Enter The name';
                    this.error = true;
               } else if (this.imageUrl === '') {
                    this.msg = 'Enter The iamge';
                    this.error = true;
               } else if (this.descrption === '') {
                    this.msg = 'Enter The descrption';
                    this.error = true;
               } else if (this.option.length === 0) {
                    this.msg = 'Enter The grediant';
                    this.error = true;
               } else {
                    this.pushUpdate();
                    this.$router.push('/home');

               }
          },pushUpdate(){
               //set the receip to new reicep and goto home page
                    let id=this.$route.params.id;
                    let recieps = {
                         name: this.name,
                         descrption: this.descrption,
                         imageUrl: this.imageUrl,
                         option: this.option,
                         id: this.$route.params.id
                    };
                    this.editReciep({recieps,id});
          }
  },
  async created() {
      this.reciep=this.$store.getters.getReciep(parseInt(this.$route.params.id));
       this.id=this.$route.params.id;
       this.imageUrl=this.reciep.imageUrl;
       this.name=this.reciep.name;
       this.option=this.reciep.option;
       this.descrption=this.reciep.descrption;
  },
}
</script>

<style>
.parent{
     display: flex;
     justify-content: center;
     align-items: center;
}
</style>