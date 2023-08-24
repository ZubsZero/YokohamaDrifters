<template>
  <div class="footer">
    <div class="heading">
      <h2>YokohamaDrifters<sup>™</sup></h2>
    </div>
    <div class="content">
      <div class="services">
        <h4>Services</h4>
        <p><a href="#">Buy a Car</a></p>
        <p><a href="#">Value Your Car</a></p>
      </div>
      <div class="social-media">
        <h4>Social</h4>
        <p>
          <a href="#"><i class="fab fa-linkedin"></i> Linkedin</a>
        </p>
        <p>
          <a href="#"><i class="fab fa-twitter"></i> Twitter</a>
        </p>
        <p>
          <a href=""
            ><i class="fab fa-facebook"></i> Facebook</a
          >
        </p>
        <p>
          <a href=""
            ><i class="fab fa-instagram"></i> Instagram</a
          >
        </p>
      </div>
      <div class="links">
        <h4>Quick links</h4>
        <p><router-link to="/" class="list-item">Home</router-link></p>
        <p><router-link to="/about" class="list-item">About</router-link></p>
        <p><router-link to="/products" class="list-item">Products</router-link></p>
        <p><router-link to="/contact" class="list-item">Contact</router-link></p>
      </div>
      <div class="details">
        <h4 class="mobile">Mobile</h4>
        <p><a href="#">082 345 6789</a></p>
        <h4 class="mail">Email</h4>
        <p><a href="#">YokohamaDrifters@gmail.com</a></p>
      </div>
    </div>
    <footer>
      <hr color="red"/>
      © 2023 Yokohama drifters
    </footer>
  </div>
</template>
<script></script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap');

.footer {
  background-color: black;
  color: #fefefe;
  top: 100%;
  bottom: 0;
  left: 0;
}

.footer .heading {
  color: #fefefe;
  max-width: 1010px;
  width: 90%;
  text-transform: uppercase;
  margin: 0 auto;
  font-family: 'Julius Sans One', sans-serif;

}

.footer .content {
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem;
  font-family: 'Julius Sans One', sans-serif;

}

.footer .content p {
  margin-bottom: 1.3rem;
}

.footer .content a {
  text-decoration: none;
  color: #fefefe;
}

.footer .content a:hover {
  border-bottom: 1px solid #971717;
}

.footer .content h4 {
  margin-bottom: 1.3rem;
  font-size: 19px;
}

footer {
  text-align: center;
  font-family: 'Julius Sans One', sans-serif;

}

footer hr {
  margin: 2rem 0;

}



@media (max-width: 767px) {
  .footer .content {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  .footer {
    position: unset;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .footer .content,
  .footer {
    font-size: 14px;
  }
}


</style>
