import Vue from 'vue'
import Router from 'vue-router'
import cesiumViewer from '@/views/cesiumViewer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component: cesiumViewer
    },
    {
      path: '/cesiumViewer',
      name: 'cesiumViewer',
      component: cesiumViewer
    }
  ]
})
