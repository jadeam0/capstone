<template>
<!-- <div class="col-4"> -->
            <div class="card g-4"  v-for="product of products" :key="product.prodID">
                <img :src="product.prodUrl"  class="card-img-top" alt="product.prodID">
                <div class="card-body">
                    <h5 class="card-title">{{ product.prodName }}</h5>
                    <p class="card-text">{{ product.prodDesc }}</p>
                    <p class="card-text">R{{ product.prodPrice }}</p>
                    <button type="button" class="btn btn-sm btn-outline-secondary" @click="addOrder(product)">Add to cart</button>
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

//     setup() {
//     const store = useStore();
//     const product = computed(() => store.state.product)
//     return {
//       product
//     }
//   },

    mounted() {
        this.$store.dispatch('getProducts', this.$route.params.id)
    },

    methods: {
    async addOrder(product) {
      const userID = localStorage.getItem('user', );
      console.log(userID, product.prodID);
      this.$store.dispatch('addOrder', {
        userID: userID,
        payload: {
          userID: userID,
          productID: product.prodID
        }
      })
    }
  }
}
</script>

<style scoped>

</style>