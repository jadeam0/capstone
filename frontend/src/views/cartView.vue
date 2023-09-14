<template>
<div v-if="products">

    <Cart/>
</div>
<div v-else><SpinnerComponent/></div>
</template>

<script>
import Cart from '../components/cartComp.vue'
import SingleProduct from '../components/productSingleComp.vue'
import SpinnerComponent from '../components/spinnerComp.vue'

export default {
    components: {
        Cart,
        SingleProduct,
        SpinnerComponent
    }
}
</script>

<style scoped>

</style>