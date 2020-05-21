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

        /*
            地图容器 container
            图层 Layers
            矢量图形 Vector OverLays
            点标记 Markers
            地图控件 Map Controls
        */ 

        //1.****** 创建高德地图 *******
        // 构造官方卫星、路网图层
        // var layer1 = new AMap.TileLayer.Satellite();
        // var layer2 =  new AMap.TileLayer.RoadNet();
        var map = new AMap.Map('amap', {
            center: [113.64, 34.68],//中心点坐标
            layers:[
                // layer1,
                // layer2
            ],
            features:['road', 'building', 'point', 'bg'],
            // zooms: [4,18],//设置地图级别范围
            mapStyle: 'amap://styles/darkblue',  //设置地图的显示样式
            pitch: 60, // 地图俯仰角度，有效范围 0 度- 83 度
            viewMode: '3D',  //设置地图模式
            lang:'zh_cn',  //设置地图语言类型
        });

        //异步同时加载多个插件
        AMap.plugin([ 'AMap.ToolBar', 'AMap.OverView', 'AMap.Geolocation'], function(){
            map.addControl(new AMap.ToolBar());
            map.addControl(new AMap.OverView({isOpen:true}));
            map.addControl(new AMap.Geolocation());
        });

        //实时路况图层
        var trafficLayer = new AMap.TileLayer.Traffic({
            zIndex:10
        });
        map.add(trafficLayer);

        //点标记与矢量图形
        var marker = new AMap.Marker({
            position:[113.851532, 34.526884],
            icon: new AMap.Icon({
                size: new AMap.Size(60, 80), //图标的大小
                image:'../../static/image/map/marker.png',
                imageOffset: new AMap.Pixel(0, -20)
            }),
            anchor:'top-left', // 设置锚点方位
        });
        map.add(marker);
        //信息窗体
        var infoWindow = new AMap.InfoWindow({
            isCustom: false,  //使用自定义窗体
            content:'<div class="info-window">新郑国际机场</div>',
            offset: new AMap.Pixel(16, -45)
        });
        var onMarkerClick  =  function(e) {
            infoWindow.open(map, e.target.getPosition());
        }
        // map.remove(marker);
        marker.on('click',onMarkerClick);

        /*
            覆盖物
            1. 折线 Polyline 
            2. 多边形 Polygon
            3. 圆形 Circle
            4. 矩形 Rectangle 
            5. 椭圆形覆盖物 Ellipse 
            6. 贝赛尔曲线 BesizerCurve 
        */ 

        var polyline = new AMap.Polygon({
            path: [
                [113.830034, 34.547537],
                [113.903202, 34.52629],
                [113.89167, 34.49689],
                [113.816348, 34.519164],
                [113.830034, 34.547537]
            ],//设置线覆盖物路径        
            strokeColor: "#3399ff", //线颜色
            strokeWeight: 16,        //线宽
            strokeStyle: "solid",   //线样式 
            fillColor: '#3399ff', // 多边形填充颜色
            fillOpacity:0.4, //填充透明度
        });
        map.add(polyline);
 
        //地图绑定click事件
        map.on('click',function(e){
            console.log(e)
            // 触发事件的对象
            var target = e.target;
            // 触发事件的地理坐标，AMap.LngLat 类型
            var lnglat = e.lnglat;
            // 触发事件的像素坐标，AMap.Pixel 类型
            var pixel = e.pixel;
            // 触发事件类型
            var type = e.type;
        });

        //2.****** 地图加载完成 *******
        map.on('complete', function(){
            //地图图块加载完成后触发
            console.log('地图加载完成~');
            //获取当前地图中心点
            var currentCenter = map.getCenter(); 
            // 获取已经添加的覆盖物
            var overLays = map.getAllOverlays();
            console.log(currentCenter, overLays); 
        });

        // 菜单内容
        var content = [
            '<div class="context-menu-content">',
                '<ul class="context_menu">',
                    '<li onclick="menu.zoomMenu(0)">缩小</li>',
                    '<li class="split_line" onclick="menu.zoomMenu(1)">放大</li>',
                    '</ul>',
            '</div>'
        ];

         //创建右键菜单
        var contextMenu = new AMap.ContextMenu();

        //右键放大
        contextMenu.addItem("放大一级", function () {
            map.zoomIn();
        }, 0);

        //右键缩小
        contextMenu.addItem("缩小一级", function () {
            map.zoomOut();
        }, 1);

        //右键显示全国范围
        contextMenu.addItem("缩放至全国范围", function (e) {
            map.setZoomAndCenter(4, [108.946609, 34.262324]);
        }, 2);

        //地图绑定鼠标右击事件——弹出右键菜单
        map.on('rightclick', function (e) {
            contextMenu.open(map, e.lnglat);
        });
        
        // map.remove(marker);//移除标记点  
        // map.remove([marker, polyline]);// 移除标记点和覆盖物
        // map.clearMap();// 使用clearMap方法删除所有覆盖物

        //3.****** 销毁地图，并清空地图容器 *******
        // map.destroy( );
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
.amap-icon{
    overflow: unset!important;
}
.amap-info-content{
    background-color: #000;
    padding: 15px 32px;
    .info-window{
        color: #fff;
    }
}
</style>