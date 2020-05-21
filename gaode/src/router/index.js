import Vue from 'vue'
import Router from 'vue-router'
import GAODE from '@/views/gaode'
import DRAW3D from '@/views/3DObj'
import MODE3D from '@/views/import3DMode'
import LAYER from '@/views/layer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GAODE',
      component: GAODE
    },
    {
      path: '/draw',
      name: 'DRAW3D',
      component: DRAW3D
    },
    {
      path: '/mode',
      name: 'MODE3D',
      component: MODE3D
    },
    {
      path: '/layer',
      name: 'LAYER',
      component: LAYER
    }
  ]
})
