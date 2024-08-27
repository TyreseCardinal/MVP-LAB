import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Cookies from 'vue-cookies';
import axios from 'axios';
import './styles/global.scss'; // Import global styles

Vue.config.productionTip = false;

Vue.use(Cookies);
Vue.prototype.$http = axios.create({
  baseURL: 'http://127.0.0.1:5000', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer $cookies.get{access_token}`,
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
