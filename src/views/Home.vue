<template>
    <div class="home">
      <div class="container">
        <Recieps />
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Recieps from '../components/cart/Recieps'


export default {
  name: 'Home',
  components: {
    Recieps,
  }
}
</script>
<style scoped>
.home{
  margin: 25px 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

</style>