import Vue from 'vue'
import Router from 'vue-router'
import HelloVuex from '@/components/HelloVuex'
import Book from '@/components/book'
import Add from '@/components/my'
import Pass from '@/components/pass'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/how-to-use-vuex'
    },
    {
      path: '/how-to-use-vuex',
      name: 'HelloVuex',
      component: HelloVuex,
      children:[
        {
          path: '/book',
          name: 'book',
          component: Book
        },
        {
          path: '/add',
          name: 'add',
          component: Add
        },
        {
          path: '/pass',
          name: 'pass',
          component: Pass
        }
      ]
    }
  ]
})
