<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is hello page'
    }
  },
  beforeRouteEnter:(to, from, next) => {
    console.log('beforeRouteEnter--准备进入heloworld页面');
    next();
  },
  beforeRouteLeave:(to, from, next) => {
    // TODO 在离开路由回调，<transition></transition>标签如果包含多个<router-view></router-view>层，会报错提示你用<transition-group></transition-group>
    console.log('beforeRouteLeave--即将离开helloworld页面');
    next();  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
