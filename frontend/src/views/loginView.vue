<template>
<div v-if="products">

  <div id="container">
    <form @submit.prevent="login">
      <p class="logo">
        <img
          src="https://i.postimg.cc/MKr8bZpZ/Free-Sample-By-Wix.jpg"
          alt=""
          class="logo"
        />
      </p>
      <input
        type="text"
        placeholder="Email"
        required=""
        v-model="emailAdd"
      />
      <input
        type="password"
        placeholder="Password"
        required=""
        v-model="userPW"
      />
      <button class="login" type="submit">Log In</button>
      <a href="#">Forgot Password ?</a>
      <hr />
      <a class="create-account" href="/signup">Create New Account</a>

      <div class="form-outline mb-4">
        <p class="text-white">{{ user?.firstName }} {{ user?.lastName }}</p>
        <p class="text-white">{{ message }}</p>
      </div>
    </form>
  </div>
  </div>
<div v-else><SpinnerComponent/></div>
</template>

<script>
import SingleProduct from '../components/productSingleComp.vue'
import SpinnerComponent from '../components/spinnerComp.vue'

export default {
  components: {
        SingleProduct,
        SpinnerComponent
    },

  data() {
    return {
      emailAdd: "",
      userPW: "",
    };
  },
  computed: {
    message() {
      return this.$store.state.message;
    },

    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
    //   console.log("Debug:", this.emailAdd, this.userPW);
      this.$store.dispatch("login", {
        emailAdd: this.emailAdd,
        userPW: this.userPW
      });
      this.$router.push('/profile')
    },
  },

  mounted() {
    console.log(localStorage.getItem("setToken"));
  },
};
</script>

<style>
.logo {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
  /* color: #1877f2; */
  font-weight: 700;
  height: 6rem;
}

#container {
  display: flex;
  justify-content: center;
  margin: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 3rem 5rem;
  width: 30rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

form input {
  outline: none;
  padding: 0.4rem 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
}

form input:focus {
  border: 1.8px solid #ff69b4;
}

form .login {
  outline: none;
  border: none;
  background: #ffa500;
  padding: 0.5rem 0.2rem;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  color: #fff;
}

form .login:hover {
  background: #eca31a;
  cursor: pointer;
}

form a {
  text-decoration: none;
  text-align: center;
  font-size: 0.9rem;
  padding-top: 0.8rem;
  color: #00ff00;
}

form hr {
  background: #f7f7f7;
  margin: 0.5rem;
}

form .create-account {
  outline: none;
  border: none;
  background: #ff69b4;
  padding: 0.5rem 0.2rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  color: #fff;
  width: 75%;
  margin: 0 auto;
}

form .create-account:hover {
  background: #e265a3;
  cursor: pointer;
}
</style>