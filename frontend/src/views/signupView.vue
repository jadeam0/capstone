<template>
    <div id="container">
    <form class="form">
    <p class="title"><img src="https://i.postimg.cc/MKr8bZpZ/Free-Sample-By-Wix.jpg" alt="" class="logo"></p>
    <!-- <p class="message">Signup now and get full access to our app. </p> -->
        <div class="flex">
        <label>
            <input class="input" type="text" placeholder="" required="">
            <span>Firstname</span>
        </label>

        <label>
            <input class="input" type="text" placeholder="" required="">
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input class="input" type="email" placeholder="" required="">
        <span>Email</span>
    </label> 

    <label>
        <input class="input" type="text" placeholder="" required="">
        <span>Phone Number</span>
    </label>

    <label>
        <input class="input" type="date" placeholder="" required="">
        <!-- <span>Date of Birth</span> -->
    </label>

    <label>Gender</label>
        <div class="gender-option">
          <div class="gender">
            <input checked="" name="gender" id="check-male" type="radio">
            <label for="check-male">Male</label>
          </div>
          <div class="gender">
            <input name="gender" id="check-female" type="radio">
            <label for="check-female">Female</label>
          </div>
        </div>

    <label>
        <input class="input" type="password" placeholder="" required="">
        <span>Password</span>
    </label>
    <!-- <label>
        <input class="input" type="password" placeholder="" required="">
        <span>Confirm password</span>
    </label> -->
    <button class="submit">Signup</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
</div>
</template>

<script></script>

<style>
#container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 52rem;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  /* position: relative; */
  margin: 3rem;
}

.logo {
    width: 8rem;
}

.signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
  text-align: center;
  color: #333;
}

.form .gender-box {
  margin-top: 10px;
}

.form :where(.gender-option, .gender) {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
  flex-wrap: wrap;
}

.form .gender {
  column-gap: 5px;
}

.gender input {
  accent-color: #ff69b4;
}

.form :where(.gender input, .gender label) {
  cursor: pointer;
}

.gender label {
  /* color: #000; */
}

.signin a:hover {
  text-decoration: underline #00ff00;
  color: #00ff00;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,.form label .input:valid + span {
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  color: #00ff00;
}

.submit {
  border: none;
  outline: none;
  background-color: #ffa500;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}

.submit:hover {
  background-color: #e7a52a;
  cursor: pointer;
}

</style>