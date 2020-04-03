<template>
  <div class="wrap">
      <h2>这是child组件</h2>
      <button @click="sendMessageToParent">向父组件传值</button>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          tips:'this message is from childNode~'
      };
    },
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {
        sendMessageToParent(){
            this.$emit("listenToChildrenEvent", this.tips );
        }
    },
    watch: {}
  }

</script>
<style lang='scss'>
.wrap{
    width: 800px;
    margin:  0 auto;
}
</style>