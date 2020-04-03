import Vue from 'vue'
import Router from 'vue-router'

import Demolist from '@/views/demolist/index'
import Refs from '@/views/refs/index'
import Routeres from '@/views/router/index'
import PostData from '@/views/postData/index'
import Filters from '@/views/filters/index'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/demolist',
      name: 'Demolist',
      component: Demolist
    },
    //重定向
    {
      path: '/',
      redirect:'/demolist'
    },
    {
      path: '/refs',
      name: 'Refs',
      component: Refs
    },
    {
      path: '/router',
      name: 'Routeres',
      component: Routeres,
      // 子路由
      children:[
        {
          /*新增user路由，配置了动态的username*/
          path:'/login/:username',
          name:'user',
          params:{
            age:28
          },
          query:{
            sex:'male'
          },
          component:() => import('@/components/user')
        },
        {
          path:'page1',
          component:() => import('@/components/doublepages'),
          children:[
            {
              path:'page1-1',
              component:() => import('@/components/page1-1')
            }
          ]
        }
      ]
    },
    {
      path: '/postdata',
      name: 'PostData',
      component: PostData
    },
    {
      path: '/filters',
      name: 'Filters',
      component: Filters,
      //路由独享的守卫
      beforeEnter:(to, from, next) =>{
        //...
      }
    }
  ]
});
//路由全局前置守卫
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth){
    if(localStorage.getItem('username') !== null){
      next();
    }else{
      alert(111)
      next({
        path:'/'
      });
    }
  }else{
    next();
  }
});
export default router;
/**
*	源码 install 安装依赖时，Router（路由版本不一致）
*	也可以修改 package.json 里面的 Router 版本
*/
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

