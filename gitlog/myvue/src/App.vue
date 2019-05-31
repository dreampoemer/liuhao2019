<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="demo-list">
      <div><button @click='goback'>返回</button>
          <!-- 前进按钮生效的前提是，需要先点击“返回按钮” -->
           <button @click='before'>前进</button> 
           <button @click='goHome'>返回首页</button>
      </div>
        <ul>
          <li><router-link to="/">hello</router-link></li>
          <li><router-link to="/page02">page02</router-link></li>
          <li><router-link to="/page02/page02-1">page02-1</router-link></li>
          <!-- 注意01：传递参数：用$router,接受参数：用$route，少个r,注意啦 -->
          <!-- 注意02：query与params传参机制不一样，造成的差异，如果要隐藏参数用params，如果强制刷新不被清除用query -->
          <li><router-link :to="{name:'page02-2',params:{username:'台二狗',sex:'famale'}}">page02-2</router-link></li>
          <li><router-link to="/params/13062527733/vue通过url传参">params</router-link></li>
          <li><router-link to="/goHome">goHome</router-link></li>
          <li><router-link to="/goParams/18538162869/i love vue~">goParams</router-link></li>
          <li><router-link to="/gotoPage02">gotoPage02</router-link></li>
          <li><router-link to="/3434">404页面</router-link></li>
          <li><router-link to="/count">vuex---count小游戏</router-link></li>
        </ul>
    </div>
    <strong class="distance">{{$route.name}}</strong>
    <div class="content">
        <transition name="fade" mode="out-in">
          <router-view></router-view> 
        </transition>
        <router-view name="left" class="left-wrap"></router-view> 
        <router-view name="right" class="right-wrap"></router-view> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    before(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
ul {
  display: flex;
  list-style: none;
}
ul li{
    flex:1;
    text-align:left;
}
.content{
  padding: 50px 30px;
  border: 3px solid #cccccc;
}
.distance{
  display: inline-block;
  padding: 30px 0;
}
.left-wrap{
  float: left;
  width: 33%;
  background-color: pink;
}
.right-wrap{
  float: left;
  width: 67%;
  background-color: #3399ff;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
