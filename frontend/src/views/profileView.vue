<template>
<!-- <div v-if="products"> -->

    <div class="background">
        <h2>Profile</h2>
        <img class="img-fluid" :src="$store.state.user?.userProfile">
        <div class="profile">
        <h4>Welcome, {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}</h4>
        <h4>{{ $store.state.user?.emailAdd }}</h4>
        <h4>{{ $store.state.user?.userRole }}</h4>
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
<style scoped>
img {
  width: 50vh;
  height: auto;
  border-radius: 30px;
}

.profile {
  padding-top: 30px;
}
</style>