import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router'
// import {sweet} from 'sweet';
// import { useCookies } from 'vue-cookies';
// import { values } from 'core-js/core/array';
// import { error } from 'console';

// const {cookies} = useCookies()
const jdAPI = "https://capstone-wv10.onrender.com/";

export default createStore({
  state: {
    user: null || JSON.parse(localStorage.getItem('user')),
    users: null,
    userAuth: null,
    product: null,
    products: null,
    category: null,
    categories: null,
    orders: [],
    payment: [],
    showSpinner: null,
    token: null,
    isLogIn: false,
    message: null
  },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user,
      state.userAuth = true,
      localStorage.setItem('user', JSON.stringify(user));
    },
    setUsers(state, values) {
      state.users = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setProducts(state, values) {
      state.products = values
    },
    setCategory(state, value) {
      state.category = value
    },
    setCategories(state, value) {
      state.categories = value
    },
    setOrders(state, value) {
      state.orders = value
    },
    setToken(state, value) {
      state.token = value
    },
    setSpinner(state, value) {
      state.showSpinner = value
    },
    setMessage(state, value) {
      state.message = value
    },
    setSortPrice: (state) => {
      state.products.sort((a, b) => {
        return a.productPrice - b.productPrice;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc
    },
    setIsLogIn(state, isLogIn) {
      state.isLogIn = isLogIn;
    },
    setCookie(state, value) {
      state.value = value
    },
    deleteCategory(state, categoryId) {
      state.categories = state.categories.filter((category) => category.catID !== categoryId);
    }
  },
  actions: {
    // -------User---------
    async getUsers(context) {
      try{
        const res = await axios.get(`${jdAPI}user/users`);
        let { results, err } = await res.data;
        if(results) {
          context.commit('setUsers', results)
        } else {
          alert("setMessage", err)
        }
      } catch(err) {
        console.log(err)
      }
    },

    async getUser(context, id) {
      try {
        const res = await axios.get(`${jdAPI}user/user/${id}`);
        let {results, err} = await res.data;
        if(results) {
          context.commit('setUser', results)
        } else {
          alert('setMessage', err)
        }
      } catch(e) {
        console.log(err)
      }
    },

    async updateUser(context, payload) {
      try {
        const res = await axios.put(`${jdAPI}user/user/${payload.userID}`, payload)
        console.log('Response: ', res);
        alert ('USER SUCCESSFULLY UPDATED')
        let {results, err} = await res.data;
        if(results) {
          context.commit('setUser', results[0])
        } else {
          alert('user could not update', err)
        }
      } catch(err) {
        console.log(err);
      }
    },

    async deleteUser({commit, dispatch}, id) {
      try {
        await axios.delete(`${jdAPI}user/user/${id}`);
        commit('setMessage', 'user successfully deleted');
        alert('USER SUCCESSFULLY DELETED')
        dispatch('getUsers');
      } catch(err) {
        alert('setMessage', 'Failed to delete user');
      }
    },

    //--------Register-----------
    async registerUser(context, payload) {
      try {
        const res = await axios.post(`${jdAPI}user/register`, payload);
        console.log('Response: ', res);
        const {msg, err} = await res.data
        if(msg) {
          // context.commit('setUser', result);
          context.commit('setMessage', msg);
          alert('USER SUCCESSFULLY CREATED')
        } else {
          alert('user not added', err)
        }
      } catch(err) {
        console.error(err)
      }
    },

    //-------Login--------
    async login(context, payload) {
      try {
        const { emailAdd, userPW } = payload;
        const response = await axios.post(`${jdAPI}user/login`, payload);
        console.log('FULL Response', response);
        const { result, token, msg, err } = response.data;
        if (result) {
          context.commit('setUser', {result, msg});
          cookies.set('LegitUser', {result, token, msg, err});
          authentication.applyToken(token);
          context.commit('setMessage', msg);
          alert('LOGIN SUCCESSFUL');
          this.$router.push('/profile');
        } else {
          alert('LOGIN FAILED: ', err);
        }
      } catch (err) {
        console.error(err);
      }
    },
    async logout(context) {
      // context.commit("setToken", null);
      context.commit("setUser");
      location.reload()
      cookies.remove("LegitUser");
    },

    //-------Product---------
    async getProducts(context) {
      try{
        const res =  await axios.get(`${jdAPI}product/products`);
        // console.log(res);
        let {results, err} = await res.data;
        // console.log(res.data);
        if(results) {
          // console.log(results);
          context.commit('setProducts', results)
        } else {
          alert('could not find products', err)
        }
      } catch(error){
        console.log(error)
      }
   },

   async getProduct(context, id) {
    try{
      context.commit('setSpinner', true)
      const res= await axios.get(`${jdAPI}product/product/${id}`);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setProduct', result[0]);
        context.commit('setSpinner', false);
      } else {
        alert('setMessage', err)
        context.commit('setSpinner', true);
      }
    } catch(err) {
      console.log(err)
    }
   },

   async addProduct(context, payload) {
    try {
      const res = await axios.post(`${jdAPI}product/addProduct`, payload);
      console.log('Response: ', res);
      alert('PRODUCT SUCCESSFULLY CREATED')
      let {result, msg, err} = await res.data;
      if(result) {
        context.commit('setProduct', result);
        context.commit('setMessage', msg);
      } else {
        alert('setMessage', err)
      }
    } catch(err) {
      console.log(err)
    }
   },

   async updateProduct(context, payload) {
    try {
      const res = await axios.put(`${jdAPI}product/product/${payload.prodID}`, payload)
      console.log('Response: ', res);
      alert('PRODUCT UPDATED')
      let {result, err} = await res.data;
      if(result){
        context.commit('setProduct', result[0])
      } else {
        context.commit('could not update', err)
      }
    } catch(err) {
      console.log(err);
    }
   },

   async deleteProduct({commit, dispatch}, id) {
    try {
      await axios.delete(`${jdAPI}product/product/${id}`);
      commit('setMessage', 'product deleted');
      alert('PRODUCT DELETED')
      dispatch('getProducts');
    } catch(err){
      alert('failed to delete product', err);
    }
   },

   //------orders-----
   async getOrders(context, id) {
    try{
      const res = await axios.get(`${jdAPI}users/${id}/carts`);
      context.commit('setOrders', res.data)
      console.log(id);
    } catch(err) {
      console.log(err)
    }
   },

   async addOrder({ commit }, { payload }) {
    try {
      console.log(payload);
      let userID = localStorage.getItem('userID');
  
      const response = await axios.post(`${jdAPI}user/${userID}/addOrder`, payload);
  
      if (response.data.res) {
        commit('setOrders', response.data.res.data);
      } else {
        alert(response.data.msg);
      }
    } catch (error) {
      // console.error(error);
      console.error('AxiosError:', error);
  console.log('Server Response:', error.response); 
    }
  },
   async updateOrder(context, id) {
    try{
      const res = await axios.put(`${jdAPI}/user/${id}/cart/${id}`);
      let {result, err} = await res.data
      if (result) {
        context.commit('setOrders', result)
      } else {
        alert('setMessage', err)
      }
    } catch(err) {
      console.log(err)
    }
   },

   async deleteOrders({commit, dispatch}, id) {
    try {
      await axios.delete(`${jdAPI}/user/${id}/cart`);
      commit('setMessage', 'Cart cleared');
      dispatch('getOrders');
    } catch(err) {
      console.log(err)
      alert('setMessage', 'failed to clear cart')
    }
   },

   async deleteOrder({commit, dispatch}, id) {
    try {
      await axios.delete(`${jdAPI}/user/${id}/cart/${id}`);
      commit('setMessage', 'Cart Item deleted')
      dispatch('getOrders');
    } catch(err) {
      commit('setMessage', 'Failed to delete Item');
      console.log(err)
    }
   },

   //------Categories-------
   async getCategories(context) {
    try{
      const res = await axios.get(`${jdAPI}category/Categories`);
      let {results,err} = await res.data;
      if(results) {
        context.commit('setCategories', results)
      } else {
        alert('could show categories', err)
      }
    } catch(err) {
      console.error(err)
    }
   },

   async addCategory(context, payload) {
    try {
      const res = await axios.post(`${jdAPI}category/addCategory`, payload);
      console.log('Response: ', res);
      alert('CATEGORY ADDED')
      let {result, msg, err} = await res.data;
      if(result) {
        context.commit('setCategory', result)
        context.commit('setMessage', msg)
      } else {
        alert('COULD NOT ADD CATEGORY', err)
      }
    } catch(err) {
      console.error(err)
    }
   },

  //  async deleteCategory(id) {
  //   try {
  //     await axios.delete(`${jdAPI}category/category/${id}`);
  //     // Assuming a successful response means the category was deleted
  //     this.$store.commit('setMessage', 'Category Deleted');
  //     this.$store.dispatch('getCategories');
  //     alert('CATEGORY DELETED');
  //   } catch (err) {
  //     console.error('FAILED TO DELETE CATEGORY', err);
  //     let errorMessage = 'Failed to delete category';
      
  //     if (err.response) {
  //       // If the server responded with an error message, use it
  //       errorMessage = err.response.data.message || errorMessage;
  //     }
      
  //     alert(errorMessage);
  //   }
  // }
  

  //  async deleteCategory(id) {
  //   try {
  //     console.log(`Deleting category with ID ${id}`);
  //     const response = await axios.delete(`${jdAPI}category/category/${id}`);
  //     console.log('Response:', response.data);
  //     commit('setMessage', 'Category Deleted');
  //     dispatch('getCategories');
  //     alert('CATEGORY DELETED');
  //   } catch (err) {
  //     console.error('FAILED TO DELETE CATEGORY', err);
  //     alert('FAILED TO DELETE CATEGORY: ' + err.message);
  //   }
  // }
  

   async deleteCategory(id) {
    try {
      await axios.delete(`${jdAPI}category/category/${id}`);
      // console.log('Response:', response.data);
      commit('setMessage', 'Category Deleted');
      dispatch('getCategories');
      alert('CATEGORY DELETED');
    } catch (err) {
      // console.error('FAILED TO DELETE CATEGORY', err);
      // alert('FAILED TO DELETE CATEGORY: ' + err.message);

      console.error('FAILED TO DELETE CATEGORY', err);
      let errorMessage = 'Failed to delete category';
      
      if (err.response) {
        // If the server responded with an error message, use it
        errorMessage = err.response.data.message || errorMessage;
      }
      
      alert(errorMessage);
    }
  }

  },

  modules: {
  }
})
