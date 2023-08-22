<template>
  <router-view/>
  <FooterComp/>
</template>
<script>
import NavBar from '@/components/NavBar-comp.vue'
import FooterComp from '@/components/Footer-comp.vue'
export default {
  name: 'Home',
  components: { FooterComp}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

*{
  margin: 0;
  padding: 0;
}


</style>
