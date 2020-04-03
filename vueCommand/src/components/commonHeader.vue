<template>
  <div>
    <el-page-header class="header" @back="goBack" content="详情页面"></el-page-header>
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
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {
         goBack(){
            this.$router.push({
                // name: 'Demolist'
                // path: '/'
                path: '/demolist'
            })
        }
    },
    watch: {}
  }

</script>
<style lang='scss'>
.header{
    padding: 20px;
    background-color: #ddd;
}
</style>