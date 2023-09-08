<template>
<div id="admin">
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
      onkeyup="searchProduct()"
    />

    <div class="add">
      <AddUser />
    </div>
  </div>

  <!-- Products Table -->
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
            <button
              class="btn btn-outline-dark"
              data-bs-toggle="modal"
              :data-bs-target="'#editUsers' + `${user.userID}`"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            Modal
            <div
              class="modal fade"
              :id="'editUsers' + `${user.userID}`"
              tabindex="-1"
              aria-labelledby="editUsers"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="editUsers">Edit Users</h1>
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
                          type="email"
                          v-model="user.userEmail"
                          class="form-control"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          v-model="user.userPassword"
                          class="form-control"
                        />
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          v-model="user.userImg"
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
                          type="date"
                          v-model="user.joinDate"
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
                        <button type="submit" class="btn btn-outline-dark">
                          Save changes
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

  <!-- Users -->
  <div id="users"></div>

  <!-- suppliers -->
  <div id="suppliers"></div>
  </div>
</template>

<script>
// import AddProduct from "../components/addProduct.vue";
// import { useStore } from "vuex";
// import { computed } from "@vue/runtime-core";

export default {
//   setup() {
//     const store = useStore();
//     store.dispatch();
//   },
};
</script>

<style scoped>
#admin{
width: 100%;
height: 100vh;
}
</style>