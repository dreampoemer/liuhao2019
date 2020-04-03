<template>
  <div>
    <common-header></common-header>
    <div class="info">
        <h2 v-text="filtersTitle"></h2>
        <input type="text" v-model="songID">
        <div class="result">{{ songID | filterSongs }}</div>
    </div>
  </div>
</template>

<script>

import CommonHeader from '@/components/commonHeader'
let vm ={}
  export default {
    name:'',
    props:[''],
    data () {
      vm = this;
      return {
            filtersTitle:'vue过滤器学习,filters',
            songList:[
                {
                    "id":1,
                    "name":'搁浅/by-周杰伦'
                },
                {
                    "id":2,
                    "name":'十年/by-陈奕迅'
                },
                {
                    "id":3,
                    "name":'最幸运的人/by-林二汶'
                },
                {
                    "id":4,
                    "name":'后来/by-刘若英'
                },
                {
                    "id":5,
                    "name":'慢慢/by-莫文蔚'
                },
                {
                    "id":6,
                    "name":'够钟/by-周柏豪'
                }
            ],
            songID: 1
      };
    },
    components: {
        CommonHeader
    },
    computed: {},
    filters:{
        filterSongs:function(number){
            let songList = vm.songList;
            let result = "没有找到歌曲";
            for(let item of songList){
                if(item.id == number){
                    result = item.name;
                    break;
                }
            }
            return result;
        }
    },
    beforeMount() {},
    mounted() {},
    methods: {},
    watch: {}
  }

</script>
<style lang='scss'>
.info{
    width: 800px;
    margin: 50px auto;
    .result{
        padding: 10px 0;
        background-color: #000;
        color: #3399ff;
        text-indent: 20px;
    }
}
</style>