<template>
     <div class="form">
          <div class="bg-content">
               <div class="q-pa-md">
                    <q-form @reset="onReset" class="q-form">
                         <q-input filled v-model="email" label="Your email *" type="email" hint="Email" />

                         <q-input filled type="password" v-model="password" label="Your password *" />

                         <q-toggle v-model="accept" label="I accept the license and terms" />

                         <div class="btn">
                              <q-btn label="sign-in" color="dark" @click="signIn" />
                              <q-btn label="Reset" type="reset" color="black" flat class="q-ml-sm" />
                              <p>If you are not register you can Sign up here</p>
                              <q-btn label="sign-up" color="dark" @click="signUp" />
                         </div>
                    </q-form>
               </div>
          </div>
          <div class="error" v-if="bool">
               Please review your inputs
               {{msg}}
          </div>
     </div>
</template>


<script>
import { mapMutations } from 'vuex'
export default {
     data() {
          return {
               email: null,
               password: null,
               accept: false,
               bool: false,
               msg: '',
               userId:null
          }
     },
     methods: {
          ...mapMutations(['addUser', 'setUser']),
          onReset() {
               this.password = null
               this.email = null
               this.accept = false
          },
          signIn(e) {
               // e.preventDefault();
               if (this.password < 8) {
                    this.msg = 'password < 8';
                    this.bool = true;
               } else if (!this.validEmail(this.email)) {
                    this.msg = 'mail not valid ';
                    this.bool = true;
               } else if (!this.isExistUser(this.email)) {
                    this.msg = 'user is not exist';
                    this.bool = true;
               } else {
               //      if (this.isExistUser(this.email)) {
               //      if(!this.checkPassword(this.password,this.userId)){
               //           this.msg = 'password is wrong ';
               //           this.bool = true;
               //      }    
               // }
                    this.$store.state.auth=true;
                    this.$router.push('/home')
               }
               // console.log(this.msg)

          },
          signUp(e) {
               //  e.preventDefault();
               if (this.password < 8) {
                    this.msg = 'password < 8';
                    this.bool = true;
               } else if (!this.validEmail(this.email)) {
                    this.msg = 'mail not valid';
                    this.bool = true;
               } else if (this.isExistUser(this.email)) {
                    this.msg = 'user is exist';
                    this.bool = true;
               } else if (!this.accept) {
                    this.msg = 'you should accept agreement';
                    this.bool = true;
               } else {
                    let user = {
                         email: this.email,
                         password: this.password,
                         id: parseInt(
                              new Date().getTime().toString().concat(performance.now()),
                              10
                         )
                    };
                    this.addUser(user);
                    this.setUser(user);
                    this.$store.state.auth=true;
                    this.$router.push('/home');
               }
               // console.log(this.msg)
          },
          validEmail(email) {
               var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return re.test(email);
          },
          isExistUser(mail) {
               for (let i = 0; i < this.$store.getters.getUsers.length; i++) {
                    if (this.$store.getters.getUsers[i].email === mail) {
                        this.userId=this.$store.getters.getUsers[i].id;
                        return true;
                    }
               }
               return false;
          },checkPassword(password,id){
               let temp= this.$store.getters.getUsers.filter(x => x.id === id)
               let pass=temp.password;
               if(pass===password) return true;
               else return false;
          }
     },

}
</script>

<style>
.form  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
     
}
.bg-content{
     background-color: #ededed;
    border-color: #000;
    border-radius: 4px;
    margin: 16px 0;
    padding: 16px 24px;
    font-size: 1em;
    border-width: 0 5px;
    border-style: solid;
    letter-spacing: 0.5px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1em;
}
.btn{
     text-align: center;
}
.btn >p{
     margin: 0;
     margin: 15px 0;
}

</style>