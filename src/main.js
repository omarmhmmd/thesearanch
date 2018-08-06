// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import VueSimpleSVG from 'vue-simple-svg'
Vue.use(VueSimpleSVG)

import VueMq from 'vue-mq'
Vue.use(VueMq, {
  breakpoints: {
    small: 576,
    medium: 768,
    large: 992,
  }
})

import VueAnime from 'vue-animejs';
Vue.use(VueAnime)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
