import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Portfolio1 from '@/components/Portfolio1'
import Portfolio2 from '@/components/Portfolio2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { 
      path: '/', 
      name: 'Home', 
      component: Home 
    },
    {
      path: '/portfolio/1',
      name: 'Portfolio1',
      component: Portfolio1
    },
    {
      path: '/portfolio/2',
      name: 'Portfolio2',
      component: Portfolio2
    }
  ]
})