<template>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <div class="nav">
        <nav>
            <div class="logo">
                <img src="https://i.postimg.cc/V5QyFjst/Screenshot-2023-08-21-102500-removebg-preview.png" alt="logo" class="logo">
            </div>
            <ul class="NavBar">
                <router-link to="/" class="list-item">Home</router-link>
                <router-link to="/about" class="list-item">About</router-link>
                <router-link to="/products" class="list-item">Products</router-link>
                <router-link to="/admin" class="list-item">Admin</router-link>
                <router-link to="/contact" class="list-item">Contact</router-link>





            </ul>
         
        </nav>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap');


.list-item {
    color: rgb(255, 255, 255);
    text-decoration: none;
    margin-left: 9rem;
    position: relative;
    font-size: 0.9rem;
    font-family: 'Julius Sans One', sans-serif;

}

nav {
    background-color: black ;
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 1;
}

.logo {
width: 5rem;
height: 4rem;    
}

.NavBar {
    margin-top: 1.4rem ;
}

.list-item:after{
    content: "";
    position: absolute;
    background-color: #ce0505;
    height: 4px;
    width: 0;
    left: 0px;
    bottom: -9px;
    transition: 0.3s;
}
.list-item:hover{
    color: #ffffff;
}
.list-item:hover:after{
    width: 100%;
}

@media only screen and (max-width:400px) {
    html,body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x:hidden;
    }
    .NavBar {
        display: flex;
        margin-left: 1rem;
    }
    .list-item {
        margin-left: 0.6rem;
        font-size: 0.7rem;
    }
    .list-item:after{
    content: "";
    position: absolute;
    background-color: #ce0505;
    height: 4px;
    width: 0;
    left: 0px;
    bottom: 14px;
    transition: 0.3s;
}

}


</style>