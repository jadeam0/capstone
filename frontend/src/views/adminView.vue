<template>
<div id="admin">

  <!-- Side Bar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        Toggle right offcanvas
      </button>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">...

        </div>
      </div>
    </div>
  </nav>

  <div id="search">
    <input type="text" class="form-control w-50 mx-auto m-5 shadow-sm" placeholder="Search..." id="searchinput" onkeyup="searchProduct()"/>

    <div class="add">
      <AddUser />
    </div>
  </div>

  <!-- Products Table -->
  <h4 class="text-center">Products</h4>
  <SpinnerComponent v-if="isLoading"/>
  <div class="container-fluid table-responsive" v-else>
  <div class="add">
    <AddProduct/>
  </div>

  <div id="products-table">
    <table class="table w-75 m-auto shadow-lg bg-danger text-light text-center rounded-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Image</th>
          <th>Edit/Delete</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="product in products" :key="product">
          <td>{{ product.prodID }}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.catID }}</td>
          <td>{{ product.prodPrice }}</td>
          <td>{{ product.quantity }}</td>
          <td><img class="product-img" :src="product.prodUrl" /></td>
          <td>
            <button class="btn btn-outline-dark" data-bs-toggle="modal" :data-bs-target="'#editProducts' + `${product.prodID}`">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <!-- Modal -->
            <div class="modal fade" :id="'editProducts' + `${product.prodID}`" tabindex="-1" aria-labelledby="editProduct" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="editProducts">Edit</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    </button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="updateProduct(product)">
                      <div class="form-outline mb-4">
                        <input type="text" v-model="product.prodName" class="form-control"/>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" v-model="product.prodDesc" class="form-control"/>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" v-model="product.catID" class="form-control"/>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" v-model="product.prodPrice" class="form-control"/>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" v-model="product.prodUrl" class="form-control"/>
                      </div>
                      <div class="form-outline mb-4">
                        <input type="text" v-model="product.quantity" class="form-control"/>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-outline-dark">Save</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <td>
            <button type="submit" @click="deleteProduct(product.prodID)" class="btn btn-outline-dark">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div> 
</div>

  <!-- Users -->
  <div id="users"></div>

  <!-- suppliers -->
  <div id="suppliers"></div>
  </div>
</template>

<script>
import AddProduct from "../components/addProduct.vue";
import addUserVue from "@/components/addUser.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import spinnerComp from "@/components/spinnerComp.vue";

export default {
  components: {
    spinnerComp,
    AddProduct,
    addUserVue
  },

  data() {
    return {
      isLoading: true
    }
  },

  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },

  setup() {
    const store = useStore()
    store.dispatch('getProducts')

    const products = computed(() => store.state.products)

    return {
      products
    }
  },

  methods: {
    deleteProduct(id) {
      this.$store.dispatch('deleteProduct', id);
    },
    updateProduct: function(product) {
      return this.$store.dispatch('updateProduct', {
        prodID: product.prodID,
        prodName: product.prodName,
        prodDesc: product.prodDesc,
        catID: product.prodID,
        prodPrice: product.prodPrice,
        prodUrl: product.prodUrl,
        quantity: product.quantity
      })
    }
  }

};
</script>

<style scoped>
#admin{
width: 100%;
height: 100vh;
}
</style>