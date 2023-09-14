<template>
<!-- <div v-if="products"> -->

    <div id="container" >
    <div class="card">
  <span class="title">Give Feedback</span>
  <form class="form">
    <div class="group">
    <input placeholder="" type="text" required="">
    <label for="name">Name</label>
    </div>
<div class="group">
    <input placeholder="" type="email" id="email" name="email" required="">
    <label for="email">Email</label>
    </div>
<div class="group">
    <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">Comment</label>
</div>
    <button type="submit">Sent Feedback</button>
  </form>
</div>
</div>
<!-- </div>
<div v-else><SpinnerComponent/></div> -->

</template>

<script>
import SingleProduct from '../components/productSingleComp.vue'
import SpinnerComponent from '../components/spinnerComp.vue'

export default {
  components: {
        SingleProduct,
        SpinnerComponent
    }
}
</script>

<style>
#container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  padding: 2.5rem;
  width: 32rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
}

.title {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 0rem;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
}

.form .group label {
  font-size: 14px;
  color: rgb(99, 102, 102);
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #fff;
  transition: all .3s ease;
}

.form .group input,
.form .group textarea {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
}

.form .group input:placeholder-shown+ label, .form .group textarea:placeholder-shown +label {
  top: 10px;
  background-color: transparent;
}

.form .group input:focus,
.form .group textarea:focus {
  border-color: #ff69b4;
}

.form .group input:focus+ label, .form .group textarea:focus +label {
  top: -10px;
  left: 10px;
  background-color: #fff;
  color: #ff69b4;
  font-weight: 600;
  font-size: 14px;
}

.form .group textarea {
  resize: none;
  height: 10rem;
}

.form button {
  background-color: #ffa500;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form button:hover {
  background-color: #eeac31;
}


</style>