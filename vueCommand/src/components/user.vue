<template>
  <div>
    <h2>我是user组件</h2>
    <div>欢迎回来，{{ loginUserName }}</div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          loginUserName:'libai'
      };
    },
    filters: {},
    components: {},
    computed: {

    },
    beforeMount() {},
    mounted() {},
    methods: {},
    watch: {
        $route(to, from){
            console.log(to, from);
            this.loginUserName = to.params.username
        }
    }
  }

</script>
<style lang='scss'>

</style>