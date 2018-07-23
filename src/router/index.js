import Vue from 'vue'
import Router from 'vue-router'
import bgVid from '@/components/bgVid'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'bgVid',
      component: bgVid
    }
  ],
})
