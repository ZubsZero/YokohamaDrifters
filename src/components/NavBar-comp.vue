<template>
    <div class="nav">
        <nav>
            <div class="logo">
                <img src="https://i.postimg.cc/V5QyFjst/Screenshot-2023-08-21-102500-removebg-preview.png" alt="logo" class="logo">
            </div>
            <ul class="NavBar">
                <router-link to="/" class="list-item">Home</router-link>
                <router-link to="/" class="list-item">About</router-link>
                <router-link to="/" class="list-item">Products</router-link>
                <router-link to="/" class="list-item">Admin</router-link>
                <router-link to="/" class="list-item">Contact</router-link>




            </ul>
            <div class="buttons">
                <router-link to="#" class="login"> <button type="button" class="btn-login">Login</button></router-link>
                <router-link to="#" class="signup"><button type="button" class="btn-signup">Sign Up</button></router-link>

            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>
<style scoped>

.list-item {
    color: rgb(255, 255, 255);
    text-decoration: none;
    margin-left: 9rem;
    position: relative;
    font-size: 0.9rem;
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

.buttons {
    margin-left: 17rem;;
    margin-top: 0.9rem;
}

.btn-signup{
    margin-left: 1rem;
    background-color: white;
    width: 5rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.9rem;

}

.btn-login{
    background-color: white;
    width: 5rem;
    height: 2.5rem;
    border: none;
    border-radius: 0.9rem;
}

.btn-login:hover{
transition: 0.5s;
box-shadow: 0 0 12px 3px white;
background-color: black ;
color: white;

}

.btn-signup:hover{
transition: 0.3s;
box-shadow: 0 0 12px 3px white;
background-color: black ;
color: white;

}



.login {
    text-decoration: none;
    color: black;
    
}

.signup {
    text-decoration: none;
    color: black;
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



</style>