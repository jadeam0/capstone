<template>
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img class="bi me-2 logo" width="40" height="32" role="img" aria-label="Bootstrap" src="https://i.postimg.cc/MKr8bZpZ/Free-Sample-By-Wix.jpg">
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/" class="nav-link px-2 link-secondary"><img width="30" height="30" src="https://i.postimg.cc/RZfJdX2p/home.png" alt="home"></router-link></li>
        <li><router-link to="/menu" class="nav-link px-2 link-dark"><img width="30" height="30" src="https://i.postimg.cc/qRrFqDHP/fast-food.png" alt="menu"></router-link></li>
        <li><router-link to="/about" class="nav-link px-2 link-dark"><img width="30" height="30" src="https://i.postimg.cc/hG4gv0W3/guide-book.png" alt="about"></router-link></li>
        <li><router-link to="/feedback" class="nav-link px-2 link-dark"><img width="30" height="30" src="https://i.postimg.cc/ZqNgTB0D/feedback.png" alt="feedback"></router-link></li>
        <li><router-link to="/admin" class="nav-link px-2 link-dark"><img width="30" height="30" src="https://i.postimg.cc/k46xrK4B/admin-panel.png" alt="admin"></router-link></li>
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
          <a href="#" class="d-block link-dark text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>

          <!-- <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul> -->
        </div>
    </header>




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
export default {
    
}
</script>

<style scoped>
header{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: #1e90ff;
    padding: 5px;
    /* padding-block-end: 10px; */
}
ul{
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
a{
    text-decoration: none;
    color: white;
}
.logo{
    height: 60px;
    width: 60px;
    border-radius: 50%;
    /* margin-top: 9px; */
}
.butt1,.butt2{
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
.butt2{
    background-color:#ffa500;
    color: #fff; 
    font-weight: bold;
}
.butt1:hover{
    /* background-color: ; */
    color: #fff; 
    font-size: 20px;
    text-decoration: underline solid 1px#0f0;
}
.butt2:hover{
    /* opacity: 0.8; */
    color: #fff; 
    font-size: 20px;
    text-decoration: underline solid 1px#0f0;
}
li:hover{
    opacity: 0.9;
    text-decoration: underline solid 2px#0f0;
    text-underline-offset: 3px ;
}
ul li a:active {
    background: rgb(199, 245, 199);
    color: #0f0;
}
</style>