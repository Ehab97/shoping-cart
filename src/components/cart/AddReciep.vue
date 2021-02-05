<template>
     <div class="row justify-center">
          <div class="col-12 parent">
               <div class="contain">
                    <form>
                         <div class="q-gutter-md">
                              <h5 class="text-center">Add Reciep</h5>
                              <q-input filled type="text" v-model="name" label="name" />
                              <q-input filled type="text" v-model="imageUrl" label="image url" />
                              <q-input filled type="text" v-model="descrption" label="descrption" />
                              <label>Ingredients:</label>
                              <span class="clarification">press Enter <font-awesome-icon icon="keyboard" />  after each Ingredient you enter,Don't repeate the type please.</span>
                              <q-input class="gred" type="text" v-model="temp" @keyup="addOption" :required="bool" />
                              <div v-for="(item,index) in option" :key="index" class="pill text-center">
                                   <span @click="deleteSkill(index)">{{ item }}</span>
                              </div>
                              <div class="text-center">
                                   <q-btn label="Add" color="dark" @click="onSubmit" />
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
               error: false,
               msg: '',
               temp:'',
               bool:true
          }

     },
     methods: {
          ...mapMutations(['addReciep']),
           addOption(e){
                  if (e.keyCode === 13 && this.temp) {
                     if (!this.option.includes(this.temp)) {
                          this.option.push(this.temp);
                          this.temp = '';
                     }
                     this.temp = '';
                }
         
          },
            deleteSkill(id){
               this.option= this.option.filter(e=>e!=id);
          },
          onSubmit(e) {
               e.preventDefault();
               /*requerd skills*/
               if (this.option.length > 0) {
                    this.bool = false
               }
               if (this.imageUrl === '') {
                    this.imageUrl = 'https://picsum.photos/id/225/1500/979';
               }
               if (this.name === '') {
                    this.msg = 'Enter The name';
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
                    // this.setReciep(reciep);
                    this.$router.push('/home').catch(() => {});;

               }
          }
          }
          }
</script>

<style scoped>
.parent{
     display: flex;
     justify-content: center;
     align-items: center;
}
 label {
    color: #000;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: .8em;
    /* text-transform: uppercase; */
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
   .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  .pill:hover{
       background: #ffc0c6;
       color:#000;
  }
  
  .contain{
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
       padding: 25px 0;
       flex-direction: column;
  }
  .q-btn{
           margin-top: 50px;
  }
  .clarification{
     display: block;
    margin: 0;
    margin-bottom: -10px;
    color: #000;
    font-weight: 700;
    text-transform: capitalize;
  }
  .gred{
       background: rgba(0,0,0,0.05);
       border-radius: 4px 4px 0 0;
  }
  form{
       max-width: 650px;
  }
@media (max-width:600px) {
  form{
       width: 90%;
  }
}
</style>