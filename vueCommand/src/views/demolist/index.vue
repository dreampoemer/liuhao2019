<template>
  <div class="tag-group">
    <el-tag
        v-for="item in items"
        :link="item.link"
        :key="item.label"
        :type="item.type"
        effect="dark"
        @click="routerToLink(item.link)">
        {{ item.label }}
    </el-tag>
    <div class="computed">
        <input type="text" v-model="firstName">
        +
        <input type="text" v-model="lastName">
        =
        <input type="text" v-model="fullName">
    </div>
  </div>
</template>

<script>
  export default {
    name:'',
    props:[''],
    data () {
      return {
        items: [
          { type: '', label: 'this.$refs的用法', link:'refs'},
          { type: 'success', label: '$router && $route', link:'router'},
          { type: 'info', label: '父子组件传值', link:'PostData'},
          { type: 'danger', label: '过滤器filters', link:'filters'},
          { type: 'warning', label: 'keep-alive生命周期', link:'alive'}
        ],
        firstName:'星驰',
        lastName:'周'
      };
    },
    components: {},
    computed: {
      //每个计算属性都包含一个getter和一个setter
      fullName:{
        get(){
          return this.lastName + " " + this.firstName
        },
        set(newValue){
          const names = newValue.split(' ');
          this.firstName = names[1];
          this.lastName = names[0];
        }
      }
    },
    beforeMount() {},
    mounted() {},
    methods: {
        routerToLink(index){
            console.log(index)
            this.$router.push({path : index})
        }
    },
    watch: {}
  }

</script>
<style lang='scss'>
.tag-group{
    width: 800px;
    margin: 50px auto;
    .el-tag{
        margin-left: 20px;
        cursor: pointer;
    }
    .computed{
      margin: 50px 0;
    }
}
</style>