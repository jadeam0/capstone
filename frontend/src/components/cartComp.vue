<template>
  <div>
    <button
      type="button"
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#cart"
    >
      <i class="fa-solid fa-cart-buy"></i>
    </button>

    <!-- Modal -->
    <div class="modal fade" id="cart" aria-hidden="true" aria-labelledby="cart" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-dark" id="cart">CART</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-dark">
            <div v-for="order in getOrders" :key="order.orderID">
              <img :src="order.product.prodUrl" alt="Product Image">
              <h4>{{ order.product.prodName }}</h4>
              <p>{{ order.product.prodDesc }}</p>
              <p>R{{ order.product.prodPrice }}</p>
              <p>Quantity: {{ order.quantity }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    getOrders() {
      return this.$store.state.orders;
    },
  },

  mounted() {
    this.$store.dispatch('getOrders', this.id);
  },
};
</script>


<style>

</style>