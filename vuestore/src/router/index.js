import Vue from 'vue'
import Router from 'vue-router'
import HelloVuex from '@/components/HelloVuex'
import Book from '@/components/book'
import Add from '@/components/my'
import Pass from '@/components/pass'
import Brother from '@/components/brother'

Vue.use(Router)

const router = new Router({
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
          component: Book,
          //在配置路由时在路由中写钩子函数
          beforeEnter(to,from,next){
            console.log('欢迎来到'+to.name+'页面~');
            next();
          }
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
    },
    {
      path:'/brother',
      name:'/brother',
      component:Brother
    }
  ]
});

//路由全局钩子
router.beforeEach((to,from,next)=>{
    console.log('router.js提示：进入路由全局钩子:'+to.name);
    next();
});
router.afterEach(router=>{
  //after 钩子没有 next 方法，不能改变导航

});
export default router;
