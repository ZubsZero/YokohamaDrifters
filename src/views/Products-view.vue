<template>
    <NavBar/>
    <productspage/>
   
</template>
<script>
import productspage from '@/components/products.comp.vue'
import NavBar from '@/components/NavBar-comp.vue'
export default {
    name: "Products",
    components: {productspage,NavBar}
}
</script>
<style scoped>

</style>