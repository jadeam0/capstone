<template>
  <div>
    <NavBarComp />
    <router-view />
    <FooterComp />
  </div>
</template>

<script>
import NavBarComp from "./components/navBarComp.vue";
import FooterComp from "./components/footerComp.vue";

export default {
  components: {
    NavBarComp,
    FooterComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Kalam:wght@300;400;700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Shojumaru&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: #f5f5f5;
  color: #333;

  /* font-family: 'Josefin Sans', sans-serif; */
  /* font-family: 'Kalam', cursive; */
  font-family: "Open Sans", sans-serif;
  /* font-family: 'Shojumaru', cursive; */
}
</style>
