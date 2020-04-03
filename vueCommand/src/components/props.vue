<template>
  <div>
      <dl>
          <dt>{{"《"+dataFromParent.title+"》"}}</dt>
          <dd>{{dataFromParent.author.name}}</dd>
      </dl>
  </div>
</template>

<script>

  export default {
    name:'',
    props:['dataFromParent'],
    data () {
      return {

      };
    },
    components: {},
    computed: {
        
    },
    beforeMount() {},
    mounted() {
      
    },
    methods: {},
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
</style>