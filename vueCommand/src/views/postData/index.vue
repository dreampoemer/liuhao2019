<template>
    <div>
        <common-header></common-header>
        <div class="info">
            <!-- tab1 [[ -->
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="父组件向子组件传值" name="first">
                    <p class="detail">详情看@/components/props.vue组件</p>
                    <props :dataFromParent="filmDetail"></props>
                    <div class="step-wrap">
                        <el-steps :active="active" direction="vertical" finish-status="success">
                            <el-step title="步骤 1" description="子组件在props中创建一个属性，用以接收父组件传过来的值"></el-step>
                            <el-step title="步骤 2" description="父组件中注册子组件"></el-step>
                            <el-step title="步骤 3" description="在子组件标签中添加子组件props中创建的属性"></el-step>
                            <el-step title="步骤 4" description="把需要传给子组件的值赋给该属性"></el-step>
                        </el-steps>
                        <el-button class="btn-next" style="margin-top: 12px;" @click="next(3)">下一步</el-button>
                    </div>
                </el-tab-pane>
                <!-- tab1 ]] -->
                <!-- tab2 [[ -->
                <el-tab-pane label="子组件向父组件传值" name="second">
                    <p class="detail">详情看@/components/emit.vue组件</p>
                    <child v-on:listenToChildrenEvent="showMsgFromChild"></child>
                    <p class="tips">{{ msgFromChild }}</p>
                    <div>
                        <el-steps :active="active" finish-status="success">
                            <el-step title="步骤 1" description="子组件中需要以某种方式例如点击事件的方法来触发一个自定义事件"></el-step>
                            <el-step title="步骤 2" description="将需要传的值作为$emit的第二个参数，该值将作为实参传给响应自定义事件的方法"></el-step>
                            <el-step title="步骤 3" description="在父组件中注册子组件并在子组件标签上绑定对自定义事件的监听"></el-step>
                        </el-steps>
                    </div>
                    <el-button style="margin-top: 12px;" @click="next(2)">下一步</el-button>
                </el-tab-pane>
                <!-- tab2 ]] -->
            </el-tabs>

            <p class="tips">在通信中，无论是子组件向父组件传值还是父组件向子组件传值，他们都有一个共同点就是有中间介质，子向父的介质是$emit自定义事件，父向子的介质是props中的属性。抓准这两点对于父子通信就好理解了</p>
        </div>
    </div>
</template>

<script>

import CommonHeader from '@/components/commonHeader'
import Child from '@/components/emit'
import Props from '@/components/props'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        activeName: 'first',
        active: 0,
        filmDetail:{
            title:'大话西游',
            author:{
                name:'周星驰'
            }
        },
        msgFromChild:''
      };
    },
    components: {
        CommonHeader,
        Child,
        Props
    },
    computed: {

    },
    beforeMount() {},
    mounted() {
        this.updateMessage = this.oldVal;
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        next(num) {
            if (this.active++ > num) this.active = 0;
        },
        showMsgFromChild(data){
            console.log(data)
            this.msgFromChild = data;
        }
    },
    watch: {}
  }

</script>
<style lang='scss'>
.info{
    width: 800px;
    margin: 60px auto;
    .detail{
        text-align: center;
        color: #3399ff;
        background-color: #ddd;
    }
    .step-wrap{
        height: 300px;
        position: relative;
        .btn-next{
            position: absolute;
            top: 50%;
            right: 50px;
            margin-top: -20px;
        }
    }
    .tips{
        padding: 8px;
        border: 1px solid #ccc;
        color: #f00;
    }
}
</style>