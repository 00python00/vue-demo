import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home/Home"
import yyy from '@/components/yyy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/y',
      name: 'yyy',
      component: yyy
    }
  ]
})
