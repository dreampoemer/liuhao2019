<template>
  <div id="app" class="clearfix"></div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  color: #2c3e50;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,.fade-leave{
  opacity: 0;
}
/* .fade-enter-active{
  animation:bounceInLeft 0.5s;
}
.fade-leave-active{
  animation: bounceInOutRight .5s;
} */
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
}
.main{
  float:left;
  width:95%; 
  background-color: #EFF2F7;
  height:100%;
  overflow: auto;
  padding-left: 20px;
  box-sizing: border-box;
}
.clearfix:after{content:"";display:block;height:0;clear:both;visibility:hidden;}
.clearfix{zoom:1}
</style>
