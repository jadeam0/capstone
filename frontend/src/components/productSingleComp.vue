<template>
    <div v-if="products">

    </div>
    <div v-else><SpinnerComponent/></div>
</template>

<script>
import SpinnerComponent from '../components/spinnerComp.vue'
export default {
    components: {
        SpinnerComponent
    }
}
</script>

<style scoped>

</style>