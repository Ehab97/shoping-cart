<template>
  <div id="app">
    <Header v-if="$route.path !== '/'"/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from "./components/layout/Header";
import { mapMutations }  from 'vuex'            
export default {
  components: {
    Header
  },
  methods: {
...mapMutations(['setUser']),      
  },
  mounted() {
    this.setUser(this.$store.getters.getUsers);

  }
}
</script>

<style>
.error{
     background-color: #ffc0c6;
    border-radius: 4px;
    margin: 16px 0;
    padding: 16px 24px;
    font-size: 1em;
    border-width: 0 5px;
    border-style: solid;
    border-color: #c10015;
    letter-spacing: 0.5px;
}
.d-none{
  display: none  !important;
}
.row{
  width: 100%;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  /* for edge cases: */
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .container{
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container{
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container{
    width: 1170px;
  }
}
</style>
