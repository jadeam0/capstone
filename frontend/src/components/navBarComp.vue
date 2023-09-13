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

      <li>
        <router-link to="/cart" class="nav-link px-2 link-dark"
          ><img
            width="30"
            height="30"
            src="https://i.postimg.cc/k46xrK4B/admin-panel.png"
            alt="cart"
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
    <div class="input-icons">
      <input class="input" type="text" />
      <!-- <i class="fa fa-search icon"></i> -->
    </div>
    <a href=""><img src="shopping-cart.png" alt="cart-icon" /></a>
  </div>
  <!-- 
<div class="bottom_nav">
      <div class="left">
        <div class="logo"><p><span>Archie-Vable</span>Gaming</p></div>
        <div class="search_bar">
            <input type="text" placeholder="Search" style="color: black;" v-model="searchText" @keyup="handleSearch">
        </div>
    </div> 
    <div class="right">
      <ul>
        <li class="dropdown">
          <button class="comp">
            <router-link to="/products" class="Comp-hover">PC Components</router-link>
          </button>
          <div class="dropdown-content">
            <div class="input-items">
              <button class="Input-button">
                <a class="text-c" href="#">Input items</a>
              </button>
              <div class="nested-dropdown-content">
                <a class="text-c" href="#">Mouse</a>
                <a class="text-c" href="#">Keyboard</a>
              </div>
            </div>
            <div class="output-items">
              <button class="Output-button">
                <a class="text-c" href="#">Output item</a>
              </button>
              <div class="nested-dropdown-content1">
                <a class="text-c" href="#">Monitor</a>
                <a class="text-c" href="#">Headphones</a>

              </div>
            </div>
            <button class="GC-button">
              <a class="text-c" href="#">Gaming chairs</a>
            </button>
          </div>
        </li>
        <li>
          <router-link to="/cart">
            <div class="icon-cart" >
              <div class="cart-line-1"></div>
              <div class="cart-line-2"></div>
              <div class="cart-line-3"></div>
              <div class="cart-wheel"></div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    
    </div> -->

  <!-- <div style="padding: 1rem;" class="header">
          <div class="sub1">
            <img src="https://i.postimg.cc/MKr8bZpZ/Free-Sample-By-Wix.jpg" alt="" class="logo">
          </div>
          <div class="sub2">
            <ul>
                <li>
                    <router-link to="/"><img class="bi" width="30" height="30" src="https://i.postimg.cc/RZfJdX2p/home.png" alt="home"></router-link>
                </li>
                <li>
                    <router-link to=""><img class="bi" width="30" height="30" src="https://i.postimg.cc/qRrFqDHP/fast-food.png" alt="menu"></router-link>
                </li>
                <li>
                    <router-link to="/about"><img class="bi" width="30" height="30" src="https://i.postimg.cc/hG4gv0W3/guide-book.png" alt="about"></router-link>
                </li>
                <li>
                    <router-link to="/feedback"><img class="bi" width="30" height="30" src="https://i.postimg.cc/ZqNgTB0D/feedback.png" alt="feedback"></router-link>
                </li>
                <li>
                    <router-link to="/admin"><img class="bi" width="30" height="30" src="https://i.postimg.cc/k46xrK4B/admin-panel.png" alt="admin"></router-link>
                </li>
            </ul>
          </div>
          <div>
            <button class="butt1">
                <router-link to="/login">Log In</router-link>
            </button>
            <button class="butt2">
                <router-link to="/signup">Sign Up</router-link>
            </button>
            
          </div>
        </div> -->
</template>

<script>
export default {};
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
.butt1:hover {
  /* background-color: ; */
  color: #fff;
  font-size: 20px;
  text-decoration: underline solid 1px#0f0;
}
.butt2:hover {
  /* opacity: 0.8; */
  color: #fff;
  font-size: 20px;
  text-decoration: underline solid 1px#0f0;
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

#second-nav img {
  width: 1.5rem;
}

#second-nav {
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
}
@media screen and (min-width: 640px) {
  #second-nav img {
    width: 2rem;
  }
}
</style>
