<template>
  <div id="adman">
    <div v-if="products" id="admin">
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

        <div class="container-fluid">
          <div id="products-table">
            <table
              class="table w-75 m-auto shadow-lg bg-danger text-light text-center rounded-3"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="product in products"
                  :key="product.prodID"
                  :product="product"
                >
                  <td class="data-prod">{{ product.prodID }}</td>
                  <td class="data-prod">{{ product.prodName }}</td>
                  <td class="data-prod">{{ product.prodDesc }}</td>
                  <td class="data-prod">{{ product.catID }}</td>
                  <td class="data-prod">{{ product.prodPrice }}</td>
                  <td class="data-prod">{{ product.quantity }}</td>
                  <td><img class="product-img" :src="product.prodUrl" /></td>
                  <td>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      :data-bs-target="'#editProducts' + product.prodID"
                    >
                      Edit
                    </button>

                    <!-- model  -->
                    <div
                      class="modal fade"
                      :id="'editProducts' + product.prodID"
                      tabindex="-1"
                      aria-labelledby="product.prodID"
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
                                  placeholder="Name"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="product.prodDesc"
                                  class="form-control"
                                  placeholder="Description"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="product.catID"
                                  class="form-control"
                                  placeholder="Category number"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="product.prodPrice"
                                  class="form-control"
                                  placeholder="Price"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="product.prodUrl"
                                  class="form-control"
                                  placeholder="Image"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="product.quantity"
                                  class="form-control"
                                  placeholder="Quantity"
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

        <div class="container-fluid table-responsive">
          <div id="products-table">
            <table
              class="table w-75 m-auto shadow-lg bg-danger text-light text-center rounded-3 tafel"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Firstname</th>
                  <th>Surname</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>userRole</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Phone</th>
                  <th>Image</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody v-if="users">
                <tr v-for="user in users" :key="user.userID" :user="user">
                  <td>
                    <div class="data">{{ user.userID }}</div>
                  </td>
                  <td>
                    <div class="data">{{ user.firstName }}</div>
                  </td>
                  <td>
                    <div class="data">{{ user.lastName }}</div>
                  </td>
                  <td>
                    <div class="data">{{ user.userAge }}</div>
                  </td>
                  <td>
                    <div class="data">{{ user.gender }}</div>
                  </td>
                  <td>
                    <div class="data">{{ user.userRole }}</div>
                  </td>
                  <td>
                    <div class="data">{{ user.emailAdd }}</div>
                  </td>
                  <td>
                    <div class="data-pass">{{ user.userPW }}</div>
                  </td>
                  <td>
                    <div class="data">{{ user.phone }}</div>
                  </td>
                  <td><img class="user-img" :src="user.userProfile" /></td>
                  <td>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      :data-bs-target="'#editusers' + user.userID"
                    >
                      Edit
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
                            <h5 class="modal-title" id="user.userID">
                              User Edit
                            </h5>
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
                                  placeholder="first Name"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="user.lastName"
                                  class="form-control"
                                  placeholder="Surname"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="user.userAge"
                                  class="form-control"
                                  placeholder="Age"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="user.gender"
                                  class="form-control"
                                  placeholder="Gender"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="user.userRole"
                                  class="form-control"
                                  placeholder="Role"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="user.emailAdd"
                                  class="form-control"
                                  placeholder="Email"
                                />
                              </div>
                              <div class="form-outline mb-4">
                                <input
                                  type="text"
                                  v-model="user.userPW"
                                  class="form-control"
                                  placeholder="Password"
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
                                  placeholder="Phone Number"
                                />
                              </div>
                            </form>
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
    <div v-else><SpinnerComponent /></div>
    <!-- <footerComp /> -->
  </div>
</template>

<script>
import AddProduct from "../components/addProduct.vue";
import AddUser from "@/components/addUser.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import SpinnerComponent from "@/components/spinnerComp.vue";
import footerComp from "@/components/footerComp.vue";
export default {
  components: {
    SpinnerComponent,
    AddProduct,
    AddUser,
    footerComp,
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
.modal {
  color: black;
}

td img {
  width: 3rem;
  height: 3rem;
}

#adman {
  width: 100%;
  height: 100%;
}

.data{
  width: 6rem !important;
  /* background: black; n  */
  word-break: break-all;
}
.data-pass{
  width: 6rem !important;
  /* background: black; */
  font-size: 12px;
  word-break: break-all;
}
.data-prod {
  word-break: break-all
  ;
}
</style>