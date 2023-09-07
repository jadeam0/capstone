<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProduct" data-bs-whatever="@addProduct">Add Product</button>

    <!--Modal-->
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Show a second modal and hide this one with the button below.
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-dark" id="addProducts">Add New Product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="addProduct">
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.prodName" placeholder="Name" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.proDesc" placeholder="Description" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.catID" placeholder="Category Number" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.prodPrice" placeholder="Price" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.prodUrl" placeholder="Image" class="form-control"/>
            </div>
            <div class="form-outline mb-4">
                <input type="text" v-model="payload.quantity" placeholder="Quantity" class="form-control"/>
            </div>
        </form>
      </div>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add Product</button>
      </div>
    </div>
  </div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>


</template>

<script>
export default {
    Name: 'AddProduct',
    data() {
        return {
            payload:{
                prodName:'',
                prodDesc:'',
                catID:'',
                prodPrice:'',
                prodUrl:'',
                quantity:''
            },
        }
    },

    computed: {
        message() {
            return this.$store.state.message
        }
    },

    methods: {
        addProduct() {
            console.log('Debug', this.payload);
        }
    }
}
</script>