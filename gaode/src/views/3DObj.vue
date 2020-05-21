<template>
  <div class="map-container">
    <div id="myMap"></div>
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
        //开启3D视图
        var map = new AMap.Map('myMap', {
            viewMode:'3D'
        });

        //添加Object3DLayer
        var object3DLayer = new AMap.Object3DLayer();
        map.add(object3DLayer);

        //创建Object3D类型的实例
        var bounds = [
            new AMap.LngLat(118.87,32.04),
            new AMap.LngLat(118.83,32.04),
            new AMap.LngLat(118.83,32.08),
            new AMap.LngLat(118.87,32.08)
        ];
        var height = 200000;
        var color = '#0088ff';//rgba
        var prism = new AMap.Object3D.Prism({
            path:bounds,
            height:height,
            color:color
        });

        //添加Object3D实例到Object3DLayer
        object3DLayer.add(prism);//添加
        //object3Dlayer.remove(prism);//移除

         //地圖的光照
        map.on('complete',function(){
            //获取
            var ambientLight = map.AmbientLight;//获取环境光
            var directionLight = map.DirectionLight;//获取平行光

            //修改
            // map.AmbientLight = new AMap.Lights.AmbientLight([1, 1, 1], 0.5);
            // map.DirectionLight = new AMap.lights.DirectionLight([-6, -2, 14], [1, 1, 1], 0.5);

            /*
                光照强度[0,1] ---- 0 最暗， 1最亮
                光照颜色 R, G, B
                光照方向
            */ 

            //修改光照的属性
            ambientLight.setIntensity(0.5);//修改强度
            directionLight.setColor([0,0,0]);//修改颜色
            directionLight.setDirection([0,-1,2]);//修改方向
        });
        
        var rectangle = new AMap.Object3D.Mesh();
        var geometry = rectangle.geometry;//创建之后获取geometry
    },
    methods: {},
    watch: {}
  }

</script>
<style lang='scss'>
.map-container{
    height: 100vh;
    #myMap{
       height: 100vh; 
    }
}
</style>