<template>
  <NavBar/>
  <Hero/>
  <Body/>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/hero-comp.vue'
import Body from '@/components/body-comp.vue'
import NavBar from '@/components/NavBar-comp.vue'


export default {
  name: 'HomeView',
  components: {
   Hero,Body,NavBar
  }
}
</script>
<style>
body {
  box-shadow: 0 0 600px black inset;
}

</style>