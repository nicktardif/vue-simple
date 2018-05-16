import Vue from 'vue'
import Router from 'vue-router'
import Buttes from '@/components/Buttes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Buttes',
      component: Buttes
    }
  ]
})
