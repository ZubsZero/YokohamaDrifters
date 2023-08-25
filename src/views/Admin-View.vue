<template>
    <NavBar/>
    <tables/>
</template>
<script>
import NavBar from '@/components/NavBar-comp.vue'
import tables from '@/components/Admin-comp.vue'

export default {
    name: "Admin",
    components: {NavBar, tables}

}
</script>
<style scoped>

</style>