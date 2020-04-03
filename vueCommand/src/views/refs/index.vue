<template>
  <div>
    <common-header @getDate="getDate"></common-header>
    <div class="info">
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="1.ref使用在父组件上">
                <code>
                    <'information ref='childonemyyy'></'information><br><br>
                    在父组件上使用子组件的值，<br>js :this.$refs.childonemyyy.isAdd;   isAdd是information组件的data的属性。
                    this.$refs["childonemyyy"].isAdd;//"mychildone"用在父组件上引用子组件值，返回子组件上的data数据
                </code>
            </el-tab-pane>
            <el-tab-pane label="2.ref使用在普通元素上">
                <code>
                    <'span ref="myspan" class="redmy">23232</'span><br><br>
                    本组件js使用：this.$refs["myspan"].className  //redmy<br>
                    this.$refs["myspan"]  // 指代对象<'span class="redmy">23232</'span>
                </code>
            </el-tab-pane>
            <el-tab-pane label="3.ref使用在子组件上">
                <code>
                    <'h5 ref='insideDomRef'>我是子组件</'h5><br><br>
                    父组件上可以引用子组件的值：this.$refs.insideDomRef// <'h5 >我是子组件</'h5>
                </code>
            </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
import CommonHeader from '@/components/commonHeader'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        tabPosition: 'left'
      };
    },
    components: {
        CommonHeader
    },
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
        },
        getDate(data){
            console.log(data)
        }
    },
    watch: {}
  }

</script>
<style lang='scss'>
.info{
    width:70%;   
    margin: 0 auto;
    padding: 60px 0;
    .code{
        font-family: 'Times New Roman', Times, serif;
    }
}
</style>