import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../view/Index.vue'
import Classify from '../view/Classify.vue'
import Shopping from '../view/Shopping.vue'
import My from '../view/My.vue'
import Footer from '../components/Footer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
  
  ]
})
