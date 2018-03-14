import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'
var VueFire = require('vuefire')
const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.use(VueFire)
Vue.component('app-alert', AlertCmp)

Vue.use(Vuetify, { theme: {
  primary: '#2098ed',
  secondary: '#0d7ecf',
  accent: '#12e6a5',
  error: '#e80528',
  info: '#92229c',
  success: '#44af5c',
  warning: '#ff9530'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  },
  render: h => h(App)
})
