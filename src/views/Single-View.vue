<template>
    <NavBar/>
    <div>
      <div class="product-cards" v-if="product">
        <div
          class="card"
        >
          <div class="card-img">
            <img
              :src="product.prodUrl"
              :alt="product.prodName"
              class="example-img"
            />
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
              <!-- <button type="button" class="view-btn" @click="viewSingle(product.prodID)">View More</button> -->
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <spinner />
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  import spinner from '@/components/spinner-comp.vue'
  import NavBar from '@/components/NavBar-comp.vue'
  // import { mapGetters } from 'vuex';
  export default {
    components: {spinner,NavBar},
      computed: {
        product() {
          return this.$store.state.product
        },
      },

       mounted() {
        this.$store.dispatch('getProduct', this.$route.params.id)
      }
         
      }
    
      
    
  </script>
  <style scoped>

  .product-cards {
    padding-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .card {
    
  width: 17rem;
  height: 19rem;
  background-color: black;
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
  font-family: "Julius Sans One", sans-serif;
}

.name,
.price {
  margin-bottom: 1rem;
}

.router {
  color: rgb(0, 0, 0);
  font-size: 0.9rem;
}
.cart-btn {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  width: 6rem;
  height: 2rem;
  border: none;
  border-radius: 0.4rem;
  font-family: "Julius Sans One", sans-serif;
}

.view-btn {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  width: 6rem;
  height: 2rem;
  margin-left: 1rem;
  border: none;
  border-radius: 0.4rem;
  font-family: "Julius Sans One", sans-serif;
}

.cart-btn:hover {
  transition: 0.5s;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  box-shadow: 0 0 10px white;
}
  </style>