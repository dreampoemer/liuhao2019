import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/pos'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    // path: '*' 指找不到页面的配置
    {
      path: '*',
      component: Error
    },
    {
      path: '/',
      name: 'Pos',
      component: Pos
    }
  ]
})
