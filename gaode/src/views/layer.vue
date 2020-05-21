<template>
  <div class="map-container">
    <div id="amap"></div>
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
    mounted() {
        //默认室内图层
        var map = new AMap.Map('amap', {
            resizeEnable: true,
            center:[118.87,32.08],
            zoom:18
        });
    },
    methods: {},
    watch: {}
  }

</script>
<style lang='scss'>
.map-container{
    height: 100vh;
    #amap{
       height: 100vh; 
    }
}
</style>