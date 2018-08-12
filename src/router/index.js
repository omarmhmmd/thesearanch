import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Buildings from '@/components/Buildings'
import CondominiumOne from '@/components/CondominiumOne'
import Moonraker from '@/components/Moonraker'
import Hedgerow from '@/components/Hedgerow'
import Cluster from '@/components/Cluster'
import Exhibition from '@/components/Exhibition'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Buildings',
      name: 'Buildings',
      component: Buildings,
    },
    {
      path: '/CondominiumOne',
      name: 'CondominiumOne',
      component: CondominiumOne
    },
    {
      path: '/Moonraker',
      name: 'Moonraker',
      component: Moonraker
    },
    {
      path: '/Hedgerow',
      name: 'Hedgerow',
      component: Hedgerow
    },
    {
      path: '/Cluster',
      name: 'Cluster',
      component: Cluster
    },
    {
      path: '/Exhibition',
      name: 'Exhibition',
      component: Exhibition
    },
  ],
})
