<template>
    <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#cart" data-bs-whatever="@cart"><i class="fa-solid fa-cart-buy"></i></button>

    <!--Modal-->
<div class="modal fade" id="cart" aria-hidden="true" aria-labelledby="cart" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-dark" id="cart">CART</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-dark" v-for="product in getOrders" :key="product.orderID">
        <img src="products.prodUrl">  
        <h4>{{product.prodName}}</h4> 
        <p>{{product.prodDesc}}</p>
        <!-- <p>{{categories.catName}}</p> -->
        <p>R{{product.prodPrice}}</p>
        <!-- <p>{{product.quantity}}</p>      -->
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Checkout</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    Name: 'Cart',
    computed: {
        getOrders() {
            console.log(this.$store.state.orders)
            return this.$store.state.orders

            // this.$router.push('/payment')
        },
    },

    mounted() {
        this.$store.dispatch('getOrders', this.id)
    }
}
</script>

<style>

</style>