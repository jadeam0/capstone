import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import Vue from 'vue';
// import SpinnerComponent from './Spinner.vue';

// Vue.component('SpinnerComponent', SpinnerComponent);

createApp(App).use(store).use(router).mount('#app')
