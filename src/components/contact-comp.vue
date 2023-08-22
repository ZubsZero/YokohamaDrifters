<template>
    <div class="hero">
        <div class="hero-info">
            <p class="sub-text">
                Contact
            </p>
            <h1 class="heading"><span class="yokohama">Yokohama</span>Drifters</h1>
         <div class="sub-heading">
            <p class="sub-text">
                For Services/Feedback and Complaints
                <br><br>
                Fill in the Form below

            </p>
        </div>
    </div>
    </div>

<div class="form">
    <form
  action="https://formspree.io/f/xzblrryk"
  method="POST"
>
  <label>
    <b>Your Name:</b>
    <input type="text" name="name" class="name">
  </label>
  <label>
    <b>Your Surname:</b>
    <input type="text" name="surname" class="surname">
  </label>
  <!-- your other form fields go here -->
  <label>
    <b>Your Email:</b>
    <input type="email" name="email" class="email">
  </label>
  <label for="select"><b>Reason for Contact:</b>

    <select name="reason for contact" class="select">
    <option value="Service">Service</option>
    <option value="Feedback">Feedback</option>
    <option value="Complaint">Complaint</option>
  </select>
  </label>
 
  <label for="message" class="message"><b>Your Message</b>
    <textarea name="message" class="textarea"></textarea>

  </label>
  <button type="submit" class="submit">Send</button>
</form>
</div>
</template>
<script>

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Monoton&display=swap');

.hero {
    background-image: url('https://i.postimg.cc/7Zv5rJ2X/hassan-ouajbir-IYU-Ym-MRm7s-unsplash.jpg');
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
    color: rgb(0, 0, 0);
    font-size: 3rem;
    border-left: 3px solid black;
    font-family: 'Monoton', cursive;

}

.yokohama {
    color: rgba(179, 16, 16, 0.9);
}

.sub-text {
    color: rgb(0, 0, 0);
    font-size: 1.3rem;
    font-family: 'Julius Sans One', sans-serif;

}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem;
    gap: 3rem;
    font-family: 'Julius Sans One', sans-serif;

    
}

textarea {
    width: 16rem;
    height: 2rem;
    border: none;
    border-bottom: 1.4px solid  ;
}

input {
    border: none;
    height: 2rem;
    border-bottom: 1.4px solid  ;
}

.submit {
width: 12rem;
height: 3rem;
display: flex;
align-items: center;
justify-content: center;
border: none;
background-color: black;
color: #f8f8f8;
font-family: 'Julius Sans One', sans-serif;

}

option {
    font-family: 'Julius Sans One', sans-serif;

}

select {
    font-family: 'Julius Sans One', sans-serif;

}

.email {
    width: 14rem;
}

.submit:hover {
    transition: 0.4s;
    background-color: white;
    box-shadow: 0 0 20px black;
    color: black;

}





</style>