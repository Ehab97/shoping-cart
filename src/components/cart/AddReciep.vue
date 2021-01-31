<template > 
     <div class="row justify-center">
          <div class="col-12 parent">
               <div class="q-pa-md">
                    <form>
                         <div class="q-gutter-md" style="max-width: 300px">
                              <h3>Add Reciep</h3>
                              <q-input filled type="text" v-model="name" label="name" />
                              <q-input filled type="text" v-model="imageUrl" label="image url" />
                              <q-input filled type="text" v-model="descrption" label="descrption" />
                              <div class="q-pa-lg">
                                   <h5>Grediants</h5>
                                   <q-option-group v-model="option" :options="options" color="green" type="checkbox" />
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
import { mapMutations }  from 'vuex'
export default {
     data() {
          return {
               name: '',
               imageUrl: '',
               descrption: '',
               option: [],
               id: '',
               options: [{
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
               error: false,
               msg: ''
          }

     },
     methods: {
          ...mapMutations(['addReciep', 'setReciep']),
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
                    //set the receip to new reicep and goto home page
                    let reciep = {
                         name: this.name,
                         descrption: this.descrption,
                         imageUrl: this.imageUrl,
                         option: this.option,
                         id: parseInt(new Date().getTime().toString().concat(performance.now()), 10)
                    };
                    this.addReciep(reciep);
                    this.setReciep(reciep);
                    this.$router.push('/home');

               }
          }
     }
}
</script>

<style>
.parent{
     display: flex;
     justify-content: center;
     align-items: center;
}

</style>