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
        <button @click="getFullName">点击获得全称</button>
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
          { type: '', label: 'this.$refs的用法', link:'refs' },
          { type: 'success', label: '$router && $route', link:'router'  },
          { type: 'info', label: '父子组件传值', link:'PostData'  },
          { type: 'danger', label: '过滤器filters', link:'filters'  },
          { type: 'warning', label: '标签五', link:'ref'  }
        ],
        firstName:'星驰',
        lastName:'周',
        fullName:''
      };
    },
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {
        routerToLink(index){
            this.$router.push({path : index})
        },
        getFullName:function(){
            this.fullName = this.lastName + this.firstName;
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