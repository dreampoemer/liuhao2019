<template>
  <div class="hello">
    <router-link to='/add'>my页面</router-link>
    <router-link to='/book'>book页面</router-link>
    <router-link to='/pass'>pass页面</router-link>
    <p><em>状态管理</em> &&<em>modules 模块化 </em> 以及 <em>组件中引入 mapGetters、mapActions 和 mapStates的使用</em> </p>
    <Footer v-show='isShow'></Footer>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex'
import Footer from '../common/footer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
    Footer
  },
  computed:{
    ...mapState({
      isShow:state=>state.footerStatus.showFooter//注意这些与上面的区别就是state.footerStatus,
                                                //里面定义的showFooter是指footerStatus.js里state的showFooter
    }),
    // //或者用mapGetters来获取isShow的值
    // ...mapGetters('footerStatus',{ //footerStatus指的是modules文件夹下的footerStatus.js模块
    //   isShow:'isShow'//第一个isShow是我自定义的只要对应template里v-if="isShow"就行
                        //第二个isShow是对应的footerStatus.js里的getters里的isShow
    // })
  },
  watch:{
    '$route' (to,from){//跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
      if(to.name == 'book'){
        this.$store.dispatch('footerStatus/hideFooter');//指footerStatus.js里actions里的showFooter方法
      }else if(to.name == 'add'){
        this.$store.dispatch('footerStatus/getNewNum',10);
        this.$store.dispatch('footerStatus/showFooter');
      }else{
        this.$store.dispatch('footerStatus/showFooter');//同上注释
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
p{
  width: 40%;
  text-align:center;
  margin: 0 30%;
  line-height: 40px;
}
em{
   margin: 0 10px;
   font-style: normal;
   background-color: #3399ff; 
   color: #fff;
  }
</style>
