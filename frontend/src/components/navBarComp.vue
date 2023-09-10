<template>
    <div style="padding: 1rem;" class="header">
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
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header{
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
.sub1{
    flex-grow: 2;
    /* margin-left: 20px;
    padding-right: 10vh; */
}
.sub2{
    flex-grow: 4;
    margin-top: 1.5vh;
    /* padding-left: 30vh; */
}
.butt1,.butt2{
    height: 35px;
    width: 110px;
    margin-top: 10px;
    background-color: #ff69b4;
    color: white;
    /* border: 3px solid; */
    border-radius: 20px;
    font-size: 15px;
    font-weight: bold;
    margin: .5rem;

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

@media screen and (max-width: 360px) {
    body {
      background-color:rgb(129, 17, 235); 
    }
    .container{
        display: flex;
        flex-direction: column;
    }
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 20px;
    }
    .sub2{
        margin-right: 2.4rem;
        padding: 1.2rem;
    }

}

@media screen and (min-width: 361px){
    .sub2{
        margin-right: 2.4rem;
    }
}
</style>