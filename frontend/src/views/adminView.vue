<template>
  <div id="admin">
    <!-- Side Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Toggle right offcanvas
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">...</div>
        </div>
      </div>
    </nav>
    <div id="search">
      <input
        type="text"
        class="form-control w-50 mx-auto m-5 shadow-sm"
        placeholder="Search..."
        id="searchinput"
        @keyup="searchProduct"
      />
    </div>

    <!-- Products Table -->
    <div class="products">
      <h4 class="text-center">Products</h4>
      <div class="add">
        <AddProduct />
      </div>
      <SpinnerComponent v-if="isLoading" />
      <div class="container-fluid table-responsive" v-else>
        <div id="products-table">
          <table
            class="table w-75 m-auto shadow-lg bg-danger text-light text-center rounded-3"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="product in products"
                :key="product.prodID"
                :product="product"
              >
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodDesc }}</td>
                <td>{{ product.prodName }}</td>
                <td>{{ product.catID }}</td>
                <td>{{ product.prodPrice }}</td>
                <td>{{ product.quantity }}</td>
                <td><img class="product-img" :src="product.prodUrl" /></td>
                <td>
                  <button
                    class="btn btn-outline-dark"
                    :data-bs-toggle="'#editProducts' + product.prodID"
                  >
                    <i class="fa-solid fa-pen-to-square">Edit</i>
                  </button>
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'editProducts' + product.prodID"
                    tabindex="-1"
                    aria-labelledby="editProduct"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="editProducts">
                            Edit
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="updateProduct(product)">
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="product.prodName"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="product.prodDesc"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="product.catID"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="product.prodPrice"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="product.prodUrl"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="product.quantity"
                                class="form-control"
                              />
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                class="btn btn-outline-dark"
                                @click="updateProduct(product.prodID)"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    type="submit"
                    @click="deleteProduct(product.prodID)"
                    class="btn btn-outline-dark"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Users -->
    <div id="users">
      <h4 class="text-center">Users</h4>
      <div class="add">
        <AddUser />
      </div>
      <SpinnerComponent v-if="isLoading" />
      <div class="container-fluid table-responsive" v-else>
        <div id="products-table">
          <table
            class="table w-75 m-auto shadow-lg bg-danger text-light text-center rounded-3"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Gender</th>
                <th>userRole</th>
                <th>Birth</th>
                <th>Email</th>
                <th>Image</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userID" :user="user">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.userAge }}</td>
                <td>{{ user.gender }}</td>
                <td>{{ user.userRole }}</td>
                <td>{{ user.userDOB }}</td>
                <td>{{ user.emailAdd }}</td>
                <td>{{ user.userPW }}</td>
                <td>{{ user.phone }}</td>
                <td><img class="user-img" :src="user.userProfile" /></td>
                <td>
                  <button
                    class="btn btn-outline-dark"
                    :data-bs-toggle="'#editusers' + user.userID"
                  >
                    <i class="fa-solid fa-pen-to-square">Edit</i>
                  </button>
                  <!-- Modal -->
                  <div
                    class="modal fade"
                    :id="'editusers' + user.userID"
                    tabindex="-1"
                    aria-labelledby="user.userID"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="editusers">Edit</h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="updateUser(user)">
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.firstName"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.lastName"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.userAge"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.gender"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.userRole"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.userDOB"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.emailAdd"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.userPW"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.userProfile"
                                class="form-control"
                              />
                            </div>
                            <div class="form-outline mb-4">
                              <input
                                type="text"
                                v-model="user.phone"
                                class="form-control"
                              />
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-outline-dark"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                class="btn btn-outline-dark"
                                @click="updateUser(user.userID)"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button
                    type="submit"
                    @click="deleteUser(user.userID)"
                    class="btn btn-outline-dark"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- suppliers -->
    <div id="suppliers"></div>
  </div>
</template>
<script>
import AddProduct from "../components/addProduct.vue";
import AddUser from "@/components/addUser.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import SpinnerComponent from "@/components/spinnerComp.vue";
export default {
  components: {
    SpinnerComponent,
    AddProduct,
    AddUser,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  setup() {
    const store = useStore();
    store.dispatch("getProducts");
    store.dispatch("getUsers");
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);
    return {
      products,
      users,
    };
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
    },
    updateProduct(product) {
      this.$store.dispatch("updateProduct", {
        prodID: product.prodID,
        prodName: product.prodName,
        prodDesc: product.prodDesc,
        catID: product.prodID,
        prodPrice: product.prodPrice,
        prodUrl: product.prodUrl,
        quantity: product.quantity,
      });
    },
    updateUser(user) {
      this.$store.dispatch("updateUser", {
        userID: user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        gender: user.gender,
        userRole: user.userRole,
        userDOB: user.userDOB,
        emailAdd: user.emailAdd,
        userPW: user.userPW,
        userProfile: user.userProfile,
        phone: user.phone,
      });
    },

    // searchProduct() {
    //   Implement your search logic here
    // },
  },
};
</script>
<style scoped>
#admin {
  width: 100%;
  height: 100vh;
}
</style>