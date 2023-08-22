<template>
<h1 class="heading">What services do we provide</h1>
<div class="cards">
    <div class="card">
        <div class="card-info">
            <h2><span class="red">Buy</span> a brand new or second hand car</h2>
        </div>
        <div class="card-img">
            <img src="https://i.postimg.cc/mZ0XwNNh/icons8-price-tag-50-1-removebg-preview.png" alt="price" class="pic1">
        </div>
    </div>
    <div class="card-2">
        <div class="card-info-2">
 <h2>We <span class="red">sell</span> just <span class="red">Japanese</span> Cars</h2>
        </div>
        <div class="card-img">
            <img src="https://i.postimg.cc/RZM5w6t3/icons8-cars-90-removebg-preview.png" alt="price" class="pic2">

        </div>
    </div>
    <div class="card-3">
        <div class="card-info-3">
            <h2><span class="red">Value</span> your car by a proffesional</h2>
        </div>
        <div class="card-img">
 <img src="https://i.postimg.cc/9fFg1scV/icons8-money-bag-100-1-removebg-preview.png" alt="bag" class="pic3">
        </div>
    </div>
</div>
<h1 class="heading">Top Sales of the Week</h1>

<div class="sale">
    <div class="sales-card">
        <div class="sales-info">
            <h4>Nissan GTR Skyline R35</h4>
        </div>
        <div class="price">
            <h4>R1 749 970</h4>
        </div>
        <div class="view">
           <router-link to="#"><button type="button" class="view-more">View More</button></router-link> 
        </div>
    </div>
    <div class="sales-card-2">
        <div class="sales-info">
            <h4>Honda NSX Type S</h4>
        </div>
        <div class="price">
            <h4>R3 249 000</h4>
        </div>
        <div class="view">
           <router-link to="#"><button type="button" class="view-more">View More</button></router-link> 
        </div>
    </div>
    <div class="sales-card-3">
        <div class="sales-info">
            <h4>Toyota Supra Carros</h4>
        </div>
        <div class="price">
            <h4>R1 479 240</h4>
        </div>
        <div class="view">
           <router-link to="#"><button type="button" class="view-more">View More</button></router-link> 
        </div>
    </div>
</div>

<div class="browse">
    <h2 class="browse-more">Browse More</h2>
    <p class="text">Click On Products to View All</p>
</div>
</template>
<script>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap');
.heading {
    text-align: center;
    color: black;
    margin-top: 2rem ;
    font-family: 'Julius Sans One', sans-serif;
}
.card,.card-2,.card-3 {
    background-color: black ;
    width: 20rem;
    height: 20rem;
    margin: 2rem;
    border-radius: 1rem;
}



.card-info, .card-info-2,.card-info-3 {
    margin: 2rem;
    font-family: 'Julius Sans One', sans-serif;
    color: white;

}


.cards {
    display: flex;
    align-items:center;
    justify-content: center;
}

.pic1 {
    width: 6rem;
    margin-top: 1rem ;
    margin-right: 1rem;
}

.pic2 {
    margin-top: 1rem;
    width: 7rem;
}

.pic3 {
    margin-top: 1rem;
    width: 7rem;
}
.red {
    color: red;
}

/* sales cards */
/* no spaces between the cards are intentional */
.sale {
    margin-top: 3rem;
    display: flex;
}
.sales-card {
    background-image: url('https://i.postimg.cc/qRMwHy3V/1451275-2.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 34rem;
    height: 20rem;
    margin-top: 3rem;
}

.sales-card-2 {
    background-image: url('https://i.postimg.cc/cHTBTmXt/peakpx-4.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 34rem;
    height: 20rem;
    margin-top: 3rem;
}

.sales-card-3 {
    background-image: url('https://i.postimg.cc/bNBrkBfS/peakpx-6.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 34rem;
    height: 20rem;
    margin-top: 3rem;
}
.sales-info {
    color: white;
    position: relative;
    top: 80%;
    right: 30%;
}

.price {
    color: white;
    position: relative;
    top: 85%;
    right: 36%;
}

.view-more {
border: none;
width: 5rem;
height: 3rem;
margin-top: 14rem;
margin-left: 21rem;
border-radius: 0.6rem;
}

.view-more:hover {
    transition: 0.5s;
    background-color: black ;
    color: white;
    box-shadow: 0 0 15px;
}

.browse-more {
    margin: 2rem;
    font-family: 'Julius Sans One', sans-serif;
    color: rgb(0, 0, 0);
}

.text {
    font-family: 'Julius Sans One', sans-serif;
    color: rgb(0, 0, 0);
}

</style>