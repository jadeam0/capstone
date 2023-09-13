<template>
<!-- <div v-if="products"> -->
    <div class="row row-cols-1 row-cols-md-4 g-4">
        <SingleProduct/>
    </div>
<!-- </div> -->
<!-- <div v-else><SpinnerComponent/></div> -->
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