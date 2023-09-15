<template>
<!-- <div class="col-4"> -->
            <div class="card g-4"  v-for="product of products" :key="product.prodID">
                <img :src="product.prodUrl"  class="card-img-top" alt="product.prodID">
                <div class="card-body">
                    <h5 class="card-title">{{ product.prodName }}</h5>
                    <p class="card-text">{{ product.prodDesc }}</p>
                    <p class="card-text">R{{ product.prodPrice }}</p>
                    <button type="button" class="btn btn-sm butt2" @click="addOrder(product)">Add to cart</button>
                    <!-- <button type="button" class="btn btn-sm btn-outline-secondary">view</button> -->

                </div>
            </div>
            <!-- </div> -->
</template>

<script>
// import {useStore} from 'vuex'
// import {computed} from '@vue/runtime-core'
export default {
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('getProducts', this.$route.params.id)
    },

    methods: {

    addOrder(product) {
      this.$store.dispatch('addOrder', product);
    },
  }
}
</script>

<style scoped>
.card-img-top {
    height: 22rem;
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
</style>