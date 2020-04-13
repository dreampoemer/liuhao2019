<template>
  <div class="range">
      <h2>{{ message }}</h2>
    <dl>
        <dd>姓名：{{detailData.name}}</dd>
        <dd>生日：{{detailData.date}}</dd>
        <dd>住址：{{detailData.address}}</dd>
    </dl>
    
    <el-button :plain="true" @click="open">打开消息提示</el-button>
  </div>
</template>

<script>

  export default {
    name:'',
    props:['detailData'],
    data () {
      return {
          message:'欢迎来到keep-alive动态组件页面~'
      };
    },
    filters: {},
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {
        open(){
            const h = this.$createElement;
            this.$message({
                message: h('p',null,[
                    h('span',null,'欢迎来到'),
                    h('i',{ style: 'color:#3399ff' },'<keep-laive>内置动态组件页面')
                ]),
                type: 'success'
            })
        }
    },
    watch: {}
  }

</script>
<style lang='scss'>
dl{
    background-color: #000;
    dt{
        color: #9233ff;
    }
    dd{
        padding: 10px;
        color: #fff;   
    }
}
.range{
    padding: 0 30px;
    border: 3px dashed #ccc;
    h2{
        color: #9233ff;
    }
}
</style>