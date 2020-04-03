<template>
  <div>
    <h2>这是嵌套页面page1</h2>
    <router-link to="/router/page1/page1-1">进入下级嵌套页面</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },
    filters: {},
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {},
    watch: {}
  }

</script>
<style lang='scss'>

</style>