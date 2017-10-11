import Vue from 'vue';
import App from './App';
import router from 'vue-router';
import vuex from 'vuex';

const vue = new Vue(App);
Vue.use(vue);
Vue.use(router);
Vue.use(vuex);

// if (module.hot) {
//   console.log(1111, module.hot);
//   module.hot.accept('./App.vue', function () {
//     console.log(123);
//   });
// }
