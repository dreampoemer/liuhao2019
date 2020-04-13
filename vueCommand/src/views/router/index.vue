<template>
    <div>
        <el-page-header class="header" @back="goBack" content="详情页面"></el-page-header>
        <div class="info">
            <h3>{{ message }}</h3>
            <el-timeline>
                <el-timeline-item timestamp="router起步" placement="top">
                    <el-card>
                        <button @click="goToPage1">路由页面1</button>
                        <button @click="goToPage2">路由页面2</button>
                        <router-page1 v-show="currentIndex == 1"></router-page1>
                        <router-page2 v-show="currentIndex == 2"></router-page2>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="动态路由" placement="top">
                    <el-card>
                        <router-link to="/login/libai" class="links">进入user（李白）组件</router-link>
                        <router-link to="/login/dufu" class="links">进入user（杜甫）组件</router-link>
                        <router-view class="container"></router-view>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="嵌套路由" placement="top">
                    <el-card>
                        <button @click="toNextPage">嵌套路由页面</button>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="命名路由" placement="top">
                    <el-card>
                        命名路由，很简单，因为根据名字就可以知道，这个路由有一个名字，那就直接给这个路由加一个name 属性，就可以了。
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
    import RouterPage1 from '@/components/routerPageDemo1'
    import RouterPage2 from '@/components/routerPageDemo2'
  export default {
    name:'',
    props:[''],
    data () {
      return {  
          message:'Hello ,vue router!',
          currentIndex: null
      };
    },
    components: {
        RouterPage1,
        RouterPage2
    },
    computed: {

    },
    beforeMount() {},
    mounted() {},
    methods: {
         goBack(){
            // window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            this.$router.push({
                // name: 'Demolist'
                // path: '/'
                path: '/demolist',
            })
        },
        goToPage1(){
            this.currentIndex = 1
        },
        goToPage2(){
            this.currentIndex = 2
        },
        toNextPage(){
            this.$router.push({
                path: "router/page1"
            });
        }
    },
    watch: {

    }
  }

</script>
<style lang='scss'>
.slide-left-enter{
  transform: translate(100%, 0);
}
.slide-left-leave-active{
  transform: translate(-50%, 0);
}
.slide-right-enter {
  transform: translate(-50%, 0);
}
.slide-right-leave-active{
  transform: translate(100%, 0);
}
.header{
    padding: 20px;
    background-color: #ddd;
}
.info{
    width:70%;   
    margin: 0 auto;
    padding: 60px 0;
    h3{
        color: #3399ff;
        padding: 10px 0;
        background-color: #000;
    }
    .container{
        margin-top: 30px;
        border: 3px dashed #f00;
    }
    .links{
        margin-right: 30px;
    }
}
.list{

    li{
        padding: 10px 0;
        a{
            color: #00ff91;
            cursor: pointer;
        }
    }
}
</style>