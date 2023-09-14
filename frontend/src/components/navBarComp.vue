<template>
  <header
    class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom sticky-top"
  >
    <a
      href="/"
      class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
    >
      <img
        class="bi me-2 logo"
        width="40"
        height="32"
        role="img"
        aria-label="Bootstrap"
        src="https://i.postimg.cc/MKr8bZpZ/Free-Sample-By-Wix.jpg"
      />
    </a>

    <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li>
        <router-link to="/" class="nav-link px-2 link-secondary"
          ><img
            width="30"
            height="30"
            src="https://i.postimg.cc/RZfJdX2p/home.png"
            alt="home"
        /></router-link>
      </li>
      <li>
        <router-link to="/menu" class="nav-link px-2 link-dark"
          ><img
            width="30"
            height="30"
            src="https://i.postimg.cc/qRrFqDHP/fast-food.png"
            alt="menu"
        /></router-link>
      </li>
      <li>
        <router-link to="/about" class="nav-link px-2 link-dark"
          ><img
            width="30"
            height="30"
            src="https://i.postimg.cc/hG4gv0W3/guide-book.png"
            alt="about"
        /></router-link>
      </li>
      <li>
        <router-link to="/feedback" class="nav-link px-2 link-dark"
          ><img
            width="30"
            height="30"
            src="https://i.postimg.cc/ZqNgTB0D/feedback.png"
            alt="feedback"
        /></router-link>
      </li>
      <li>
        <router-link to="/admin" class="nav-link px-2 link-dark"
          ><img
            width="30"
            height="30"
            src="https://i.postimg.cc/k46xrK4B/admin-panel.png"
            alt="admin"
        /></router-link>
      </li>
    </ul>

    <div class="col-md-3 text-end">
      <button type="button" class="btn btn-outline-primary me-2 butt1">
        <router-link to="/login">Log In</router-link>
      </button>
      <button type="button" class="btn btn-primary butt2">
        <router-link to="/signup">Sign Up</router-link>
      </button>
    </div>

    <div class="text-end">
      <a
        href="#"
        class="d-block link-dark text-decoration-none"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt="mdo"
          width="32"
          height="32"
          class="rounded-circle"
        />
      </a>
    </div>
  </header>

  <div id="second-nav">
    <div class="container-fluid">
      <form class="d-flex w-50">
        <input class="form-control me-2" v-model="searchByName" type="search" placeholder="Search" aria-label="Search">
        <button class="btn butt1" type="submit">Search</button>
        <button type="button" @click.prevent="sortByPrice" class="btn butt2">Sort</button>

        <!-- <select class="btn btn-light text-start text-dark" v-model="category">
        <option value="All">All categories</option>
        <option value="categories">Hoodies</option>
        <option value="Sweatshirts">Sweatshirts</option>
        <option value="T-Shirts">T-Shirts</option>
        <option value="Sweatpants">Sweatpants</option>
      </select> -->
      </form>
    </div>
    <router-link to="/cart" class="nav-link px-2 link-secondary"><img width="30" height="30" src="https://i.postimg.cc/MTMFMrqH/shopping-cart.png" alt="cart"/></router-link>
  </div>
</template>

<script>
export default {
  methods: {
  sortByPrice() {
    this.$store.commit("setSortPrice")
  },

  data(){
      return {
        searchByName: '',
        category: '',
      }
    },

    computed: {
    search() {
  let filteredByCategory = this.products.filter(item => {
    return this.category.length === 0 || this.category.includes(item.catID);
  });

  if (this.searchByName.trim().length > 0) {
    return filteredByCategory.filter((input) =>
      input.prodName.toLowerCase().includes(this.searchByName.trim().toLowerCase())
    );
  }

  return filteredByCategory;
}

  }
},
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #1e90ff;
  padding: 5px;
  /* padding-block-end: 10px; */
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
}
li {
  margin-left: 2vh;
  color: white;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}
a {
  text-decoration: none;
  color: white;
}
.logo {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  /* margin-top: 9px; */
}
.butt1,
.butt2 {
  /* height: 35px; */
  /* width: 110px; */
  /* margin-top: 10px; */
  background-color: #ff69b4;
  color: white;
  /* border: 3px solid; */
  border-radius: 20px;
  font-size: 15px;
  font-weight: bold;
  /* margin: .5rem; */
}
.butt2 {
  background-color: #ffa500;
  color: #fff;
  font-weight: bold;
}

.butt1:hover{
    /* background-color: ; */
    color: #fff; 
    font-size: 17px;
    /* text-decoration: underline solid 1px#0f0; */
}
.butt2:hover{
    color: #fff; 
    font-size: 17px;
}
li:hover {
  opacity: 0.9;
  text-decoration: underline solid 2px#0f0;
  text-underline-offset: 3px;
}
ul li a:active {
  background: rgb(199, 245, 199);
  color: #0f0;
}

/* second navbar */
.input {
  border-radius: 1rem;
  border: 2px solid;
  background: #000;
  opacity: 10%;
  width: 15rem;
}

/* .input-icons i{
    position: absolute;
    top: 11rem;
    right: 9.5rem;
} */
/* 
#second-nav img {
  width: 1rem;
} */

#second-nav {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: #7b7b7b;
}
@media screen and (min-width: 640px) {
  #second-nav img {
    width: 2rem;
  }
}
</style>
