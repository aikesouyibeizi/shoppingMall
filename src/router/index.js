import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav from '@/components/Nav'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/nav',name: 'Nav',component: Nav},
    {path: '/helloword',name: 'HelloWorld',component: HelloWorld},
    {path: '/',name: 'Home',component: Home},
    
  ]
})