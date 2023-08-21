<template>
  <Hero/>
  <Body/>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/hero-comp.vue'
import Body from '@/components/body-comp.vue'

export default {
  name: 'HomeView',
  components: {
   Hero,Body
  }
}
</script>
<style>
body {
  box-shadow: 0 0 600px black inset;
}

</style>