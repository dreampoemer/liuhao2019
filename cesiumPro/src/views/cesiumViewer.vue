<template>
  <div id="cesiumContainer">
  </div>
</template>

<script>
// import '../../node_modules/cesium/Build/Cesium/Widgets/widgets.css'
  export default {
    name:'cesiumViewer',
    props:[''],
    data () {
      return {
        viewer:''
      };
    },
    filters: {},
    components: {},
    computed: {},
    beforeMount() {},
    mounted() {
        this.viewer = new Cesium.Viewer("cesiumContainer",{
            animation:false,//是否显示动画组件
            baseLayerPicker: false,//是否显示图层选择控件
            fullscreenButton: false,//是否显示全屏按钮
            geocoder: false,//是否显示地名查找控件
            homeButton: false,//是否显示Home按钮
            infoBox: false,//是否显示点击要素之后显示的信息
            sceneModePicker: true,//是否显示投影方式控件
            selectionIndicator: false, 
            requestRenderMode: true, //启用请求渲染模式
            timeline: false,//是否显示时间线控件
            navigationHelpButton: false,//是否显示帮助信息控件
            navigation: true,
            navigationInstructionsInitiallyVisible: false,
            sceneModel: Cesium.SceneMode.SCENE3D,//初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
            
            imageryProvider : new Cesium.UrlTemplateImageryProvider({
                url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
            })
        });

	    // //引入谷歌地图,
        // this.viewer.imageryLayers.addImageryProvider(
        //     new Cesium.UrlTemplateImageryProvider({
        //     url: "https://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali"
        // }));
        //引入天地图标注,
        this.viewer.imageryLayers.addImageryProvider(
            new Cesium.WebMapTileServiceImageryProvider({
                url: "https://t0.tianditu.gov.cn/cva_w/wmts?tk=c4e3a9d54b4a79e885fff9da0fca712a&service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
                layer: "tdtAnnoLayer",
                style: "default",
                format: "image/jpeg",
                tileMatrixSetID: "GoogleMapsCompatible",
                show: false
            })
        );
        //相机设置
        this.viewer.camera.setView({
            destination: Cesium.Cartesian3.fromDegrees(113.85,34.403,2000),//(经度，纬度，视距)
            orientation:{
                heading: Cesium.Math.toRadians(0),
                pitch: Cesium.Math.toRadians(-90),
                roll: Cesium.Math.toRadians(0)
            }
        })

        this.viewer._cesiumWidget._creditContainer.style.display = 'none';//左下角水印
        this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)//取消默认双击行为？？？
    },
    methods: {},
    watch: {}
  }

</script>
<style lang='scss'>
#cesiumContainer{
    width:100%;
    height: 100%;
}
</style>