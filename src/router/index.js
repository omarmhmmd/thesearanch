import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Buildings from '@/components/Buildings'
import Exhibition from '@/components/Exhibition'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Buildings',
      name: 'Buildings',
      component: Buildings
    },
    {
      path: '/Exhibition',
      name: 'Exhibition',
      component: Exhibition
    },
  ],
})
