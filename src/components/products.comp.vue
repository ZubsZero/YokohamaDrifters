<template>
    <div class="hero">
        <div class="hero-info">
            <h1 class="heading"><span class="yokohama">Yokohama</span>Drifters</h1>
         <div class="sub-heading">
            <p class="sub-text">
                View All Products
            </p>
        </div>
    </div>
  </div>

  <div class="navigation">
    <div class="sort">
        <label for="search">Sort by Price</label>
    <select name="sort" id="sort">
        <option value="lowest" id="lowest">Lowest</option>
        <option value="highest" id="highest">Highest</option>
    </select> 
    </div>
   <div class="search">
    <div class="icon">
        <img src="https://i.postimg.cc/Qd5jtmBR/icons8-search-50-removebg-preview.png" alt="icon" class="icon">
    </div>
    <div class="search-bar">
        <label for="search">Search</label>
        <input type="text" class="type-s" placeholder="Name of item">
        <button type="button" class="btn"><img src="https://i.postimg.cc/Qd5jtmBR/icons8-search-50-removebg-preview.png" alt="search-img" class="search-img"></button>
    </div>
   </div>
   </div>

   <div class="products-body">
    <div class="product-cards">
        <div class="card" v-for="product in products" :key="product.prodID">
            <div class="card-img">
                <img :src="product.prodUrl" :alt="product.prodName" class="example-img">
            </div>
            <div class="card-info">
                <div class="name">
                    <h4>{{ product.prodName }}</h4>
                </div>
                <div class="price">
                    <h5>R {{ product.amount }}</h5>
                </div>
                <div class="cart">
                    <button type="button" class="cart-btn">Add to Cart</button>
                    <button type="button" class="view-btn">View More</button>

                </div>
            </div>
        </div>
    </div>
   </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      products: []
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("https://yokohamaapi.onrender.com/products");
        this.products = response.data.results;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  },
  mounted() {
    this.fetchProducts();
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap');
.product-cards {
    display: grid;
    grid-template-columns:1fr 1fr 1fr ;
    justify-items: center;
}
.card {
    width: 17rem;
    height: 19rem;
    background-color: black ;
    margin: 2rem;
    border-radius: 1rem;

}

.example-img {
    width: 17rem;
    height: 11rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;

}

.card-info {
    color: white;
    font-size: 1.1rem;
    font-family: 'Julius Sans One', sans-serif;

}

.name , .price{
    margin-bottom: 1rem;
}



.cart-btn {
    background-color:rgb(255, 255, 255);
    color:rgb(0, 0, 0);
    width: 6rem;
    height: 2rem;
    border:none;
    border-radius: 0.4rem;
    font-family: 'Julius Sans One', sans-serif;


}

.view-btn {
    background-color:rgb(255, 255, 255);
    color:rgb(0, 0, 0);
    width: 6rem;
    height: 2rem;
    margin-left: 1rem;
    border:none;
    border-radius: 0.4rem;
    font-family: 'Julius Sans One', sans-serif;

}

.cart-btn:hover {
transition: 0.5s;
background-color: rgb(0, 0, 0);
color: rgb(255, 255, 255);
box-shadow: 0 0 10px white
}
.view-btn:hover {
transition: 0.5s;
background-color: rgb(0, 0, 0);
color: rgb(255, 255, 255);
box-shadow: 0 0 10px white;
}
.cart{
    margin: 1rem;
}

.hero {
    background-color: black;
    width: 100%;
    height: 30rem;
    border-bottom: 3px solid white;

}

.hero-info{
    position: relative;
    top: 40%;
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

.navigation {
    display: flex;
    gap: 20rem;
    align-items: center;
    justify-content: center;
    height: 3rem;
}

.sort{
    font-family: 'Julius Sans One', sans-serif;
    font-weight: bold;
}
.search {
    display: flex;
    font-family: 'Julius Sans One', sans-serif;
    font-weight: bold;
    margin-bottom: 1rem;
}

option {
    font-family: 'Julius Sans One', sans-serif;

}

select {
    font-family: 'Julius Sans One', sans-serif;
    margin-left: 1rem;
    height: 2rem;

}

input {
    height: 1.5rem;
    border:none;
    width: 15rem;
    border-bottom: 2px solid black;
    margin-left: 1rem;
}
.icon {
    width: 1.4rem;
    margin-top: 0.5rem;
}

.search-img{
    width:2rem;
    height: 2rem;
}

.btn {
    width:3rem;
    height: 2.5rem;
    position: relative;
    top: 22%;
    background-color: rgb(255, 255, 255);
    border:none;
    cursor: pointer;
}

.btn:hover {
border-left: 2px solid black;
border-right: 2px solid black;
border-top: 2px solid black;
border-bottom: 2px solid black;

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

.navigation {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 3rem;
}

.sort{
    font-family: 'Julius Sans One', sans-serif;
    font-weight: bold;
}
.search {
    display: flex;
    font-family: 'Julius Sans One', sans-serif;
    font-weight: bold;


}

.btn {
    width: 1rem;
    height: 1rem;
    background: transparent;
}

option {
    font-family: 'Julius Sans One', sans-serif;

}
label {
    font-size: 0.8rem
}
select {
    font-family: 'Julius Sans One', sans-serif;
    margin-left: 1rem;
    height: 2rem;
    width: 4rem;

}

input {
    height: 1.5rem;
    border:none;
    width: 5rem;
    border-bottom: 2px solid black;
    margin-left: 1rem;
    background: transparent;
}
.icon {
    width: 1.4rem;
}

.product-cards {
    display: grid;
    grid-template-columns: 1fr;
}
}
</style>