// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MainMenu from './components/navigation/mainMenu.vue'
import MainMenuSub from './components/navigation/mainMenuSub.vue'
import AdminMenu from './components/navigation/adminMenu.vue'
import MainFooter from './components/navigation/mainFooter.vue'
import router from './router'

Vue.config.productionTip = false

// Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.use(Vuetify)
// SNOTIFY
import Snotify from 'vue-snotify'
import 'vue-snotify/styles/material.css'
Vue.use(Snotify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#main-menu',
  router,
  components: { MainMenu },
  template: '<MainMenu/>'
})

new Vue({
  el: '#main-menu-sub',
  router,
  components: { MainMenuSub },
  template: '<MainMenuSub/>'
})

new Vue({
  el: '#admin-menu',
  router,
  components: { AdminMenu },
  template: '<AdminMenu/>'
})

new Vue({
  el: '#main-footer',
  router,
  components: { MainFooter },
  template: '<MainFooter/>'
})
