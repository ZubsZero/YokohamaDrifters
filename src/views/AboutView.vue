<template>
  <NavBar/>
  <aboutpage/>
</template>
<script>
import NavBar from '@/components/NavBar-comp.vue'
import aboutpage from '@/components/Aboutbody.comp.vue'
export default{
  name: 'about',
  components: {NavBar, aboutpage} 
}
</script>
<style>

</style>
