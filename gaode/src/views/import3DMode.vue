<template>
  <div class="map-container">
    <div id="map"></div>
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
    computed: {
        
    },
    beforeMount() {},
    mounted() {
      // 创建地图实例
      var map = new AMap.Map("map",{
          viewMode:'3D',
          center:[121.50, 31.233366],
          zoom:16,
          pitch: 60,
      });

      // 创建Object3DLayer图层
      var object3Dlayer = new AMap.Object3DLayer();
      map.add(object3Dlayer);

      // 加载AMap.GltfLoader插件
      AMap.plugin(["AMap.GltfLoader"],function(){
        var urlCity = 'https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf';
        var urlDuck = 'https://a.amap.com/jsapi_demos/static/gltf/Duck.gltf';
        var paramCity = {
              position: new AMap.LngLat(121.510909, 31.233366), // 必须
              scale: 3580, // 非必须，默认1
              height: 1800,  // 非必须，默认0
              scene: 0, // 非必须，默认0
        };

        var paramDuck = {
            position: new AMap.LngLat(121.495000, 31.233366), // 必须
            scale: 800, // 非必须，默认1
            height: -100,  // 非必须，默认0
            scene: 0, // 非必须，默认0
        };

        var gltfObj = new AMap.GltfLoader();

        gltfObj.load(urlCity, function (gltfCity) {
            gltfCity.setOption(paramCity);
            gltfCity.rotateX(90);
            gltfCity.rotateZ(120);
            object3Dlayer.add(gltfCity);
        });

        gltfObj.load(urlDuck, function (gltfDuck) {
            gltfDuck.setOption(paramDuck);
            gltfDuck.rotateX(90);
            gltfDuck.rotateZ(-20);
            object3Dlayer.add(gltfDuck);
        });
      })
    },
    methods: {},
    watch: {}
  }

</script>
<style lang='scss'>
.map-container{
    height: 100vh;
    #map{
       height: 100vh; 
    }
}
</style>