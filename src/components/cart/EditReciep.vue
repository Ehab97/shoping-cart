<template>
     <div class="row justify-center">
          <div class="col-12 parent">
               <div class="contain">
                    <form>
                         <div class="q-gutter-md">
                              <h5 class="text-center">Edit Reciep</h5>
                              <q-input filled v-model="name" @input="reciep.name" label="name" />
                              <q-input filled v-model="imageUrl" @input="reciep.imageUrl" label="image url" />
                              <q-input filled v-model="descrption" @input="reciep.descrption" label="descrption" />
                              <label>Ingredients:</label>
                              <span class="clarification">press Enter <font-awesome-icon icon="keyboard" />  after each Ingredient you enter,Don't repeate the type please.</span>
                              <q-input class="gred" type="text" v-model="temp" @keyup="addOption" :required="bool" />
                              <div v-for="(item,index) in option" :key="index" class="pill text-center">
                                   <span  @mouseover="showByIndex=index" 
                                          @mouseleave="showByIndex=false"
                                          @click="deleteSkill(item)">{{ item }}
                                        <font-awesome-icon v-if="showByIndex===index" icon="trash-alt" />
                                   </span>
                              </div>
                              <div class="text-center">
                                   <q-btn label="Save" color="dark" @click="onSubmit" />
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
     data() {
          return {
               reciep: null,
               id: null,
               name: '',
               imageUrl: '',
               descrption: '',
               option: [],
               temp: '',
               bool: true,
               error: false,
               msg: '',
               del:false,
               showByIndex: null

          }
     },
  methods:{
       ...mapMutations(['editReciep']),
            addOption(e) {
                 if (e.keyCode === 13 && this.temp) {
                      if (!this.option.includes(this.temp)) {
                           this.option.push(this.temp);
                           this.temp = '';
                      }
                      this.temp = '';
                 }

            },
            mouseOver(id){
                 this.option = this.option.filter(e => e != id);
            },
            deleteSkill(id) {
                 this.option = this.option.filter(e => e != id);
            },
            onSubmit(e) {
                 e.preventDefault();
                 /*requerd skills*/
                 if (this.option.length > 0) {
                      this.bool = false
                 }
                 if (this.imageUrl === '') {
                    this.imageUrl='https://picsum.photos/id/225/1500/979';
               } 
                 if (this.name === '') {
                      this.msg = 'Enter The name';
                      this.error = true;
                 }  else if (this.descrption === '') {
                      this.msg = 'Enter The descrption';
                      this.error = true;
                 } else if (this.option.length === 0) {
                      this.msg = 'Enter The grediant';
                      this.error = true;
                 } else {
                      this.pushUpdate();
                      this.$router.push('/home');

                 }
            }, pushUpdate() {
                 //set the receip to new reicep and goto home page
                 let id = this.$route.params.id;
                 let recieps = {
                      name: this.name,
                      descrption: this.descrption,
                      imageUrl: this.imageUrl,
                      option: this.option,
                      id: this.$route.params.id
                 };
                 this.editReciep({
                      recieps,
                      id
                 });
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
  form{
       max-width: 650px;
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
@media (max-width:600px) {
  form{
       width: 90%;
  }
}
</style>