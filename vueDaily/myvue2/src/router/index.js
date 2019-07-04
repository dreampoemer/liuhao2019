import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/page/pos'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/hi'
import D3Charts from '@/components/d3Charts'
import ECharts from '@/components/echarts'
import Error from '@/components/404'

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
    },
    {
      path: '/hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/d3Charts',
      name: 'D3Charts',
      component: D3Charts
    },
    {
      path: '/eCharts',
      name: 'ECharts',
      component: ECharts
    }
  ]
})
