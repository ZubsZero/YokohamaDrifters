<template>
    <NavBar/>
    <admintable/>
</template>
<script>
import NavBar from '@/components/NavBar-comp.vue'
import admintable from '@/components/Admin-comp.vue'

export default {
    name: "Admin",
    components: {NavBar, admintable}

}
</script>
<style scoped>

</style>