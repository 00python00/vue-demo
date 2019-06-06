import Vue from 'vue'
import Router from 'vue-router'
import hhh from '@/components/hhh'
import yyy from '@/components/yyy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hhh',
      component: hhh
    },
    {
      path: '/y',
      name: 'yyy',
      component: yyy
    }
  ]
})
