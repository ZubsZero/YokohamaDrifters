<template>
    <div class="hero">
        <div class="hero-info">
            <h1 class="heading"><span class="yokohama">Yokohama</span>Drifters</h1>
         <div class="sub-heading">
            <p class="sub-text">
                We <span class="red">sell</span> top quality second and brand new <span class="red">Japanese </span>Motors <br>from trusted sources
            </p>
        </div>
    </div>
    </div>
    <tr>
    <td>{{product.prodID}}</td>
    <td>{{product.prodName}}</td>
    <td>{{product.quantity}}</td>
    <td>{{product.amount}}</td>
    <td>{{product.category}}</td>
    <td>{{product.prodUrl}}</td>
    <td>
        <div>
            <Modal/>
            <button @click="deleteProduct(product.prodID)">Delete</button>
        </div>
    </td>
</tr>
</template>
<script>
import axios from 'axios'
import Modal from '@/components/add-modal-comp.vue'
export default{
    props: [
        "product"
    ],
    components:{Modal},
    methods: {
        async deleteProduct(id){
            try{
                await axios.delete(`https://yokohamaapi.onrender.com/products/${id}`)
                this.$store.dispatch("fetchProducts")
                window.location.reload();
            }
            catch(err){
                alert(err)
            }
        }
    }
}
</script>
<style>
.hero {
    background-image: url('https://i.postimg.cc/vBtfz4gD/peakpx-3.jpghttps://i.postimg.cc/vBtfz4gD/peakpx-3.jpg');
    background-repeat:no-repeat ;
    background-size: cover;
    width: 100%;
    height: 40rem;
}

.hero-info{
    position: relative;
    top: 35%;
    right: 25%;
}

h1 {
    color: white;
    font-size: 3rem;
    border-left: 3px solid black;
    font-family: 'Monoton', cursive;

}

.yokohama {
    color: rgba(179, 16, 16, 0.9);
}

.sub-text {
    color: rgb(255, 255, 255);
    font-size: 1.3rem;
    font-family: 'Julius Sans One', sans-serif;

}

.red {
    color: rgb(255, 0, 0);
    font-weight: 700;
}
@media only screen and (max-width:400px){
    h1 {
    color: white;
    font-size: 1.9rem;
    border-left: 3px solid black;
    font-family: 'Monoton', cursive;

}
.hero-info {
    position: relative;
    top: 35%;
    right: 0%;
}

.hero {
    height: 30rem;
    background-position-x: -10rem;
}
}
</style>