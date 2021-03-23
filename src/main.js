import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import axios from 'axios'

Vue.prototype.axios = axios //можем использовать в каждом компоненте vue, чтобы не импортировать в каждый компонент с this

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
