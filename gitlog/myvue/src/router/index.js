import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page02 from '@/components/page02'
import page0201 from '@/components/page02-1'
import page0202 from '@/components/page02-2'
import Params from '@/components/params'
import Error from '@/components/error'
import Count from '@/components/count'


Vue.use(Router)

export default new Router({
  // mode:'hash',
  // mode:'history', //路径名不含#
  routes: [
    {
      path: '/',//链接路径
      name: 'HelloWorld',//路由名称
      component: HelloWorld,//对应的组建模板
      beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        console.log(11111111111);
        next();
      }
    },
    {
      path: '/page02',
      components: {
        default:page02,
        left:page0202,
        right:page0201
      },
      // components在子组件无效？？？TODO
      children:[{
        path:'/',
        name: 'page02',
        component:page02
      },{
        path:'page02-1',
        name: 'page02-1',
        component:page0201
      },{
        path:'page02-2',
        name: 'page02-2',
        component:page0202
      }]
    },{
      path:'/params/:newsId/:newsTitle',
      component:Params
    },{
      path:'/goHome',
      redirect:'/'
    },{
      path:'/goParams/:newsId/:newsTitle',
      redirect:'/params/:newsId/:newsTitle'
    },{
      // 1。别名无法传参；2。根目录文件别名不起作用
      path:'/page02',
      component:page02,
      alias:'/gotoPage02'
    },{
      // 1。别名无法传参；2。根目录文件别名不起作用
      path:'*',
      component:Error
    },{
      path:'/count',
      component:Count
    }
  ]
})
