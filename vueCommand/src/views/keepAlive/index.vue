<template>
  <div>
    <common-header></common-header>
    <div class="info">
        <div class="texts">
            <p>keep-alive生命周期：</p>
            初次进入时：<span>created > mounted > activated</span>；退出后触发 <span>deactivated</span>；再次进入：会触发<span>activated</span>；事件挂载的方法等，只执行一次的放在<span>mounted</span>中；组件每次进去执行的方法放在 <span>activated</span> 中
        </div>
        <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
            label="Name"
            prop="name">
            </el-table-column>
            <el-table-column
            label="Date"
            prop="date">
            </el-table-column>
            <el-table-column
            label="Address"
            prop="address">
            </el-table-column>
            <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
                <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template>
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <keep-alive>
            <range :detailData="tableData[currentIndex]"></range>
        </keep-alive>
    </div>
  </div>
</template>

<script>

import CommonHeader from '@/components/commonHeader'
import Range from '@/components/range'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          currentIndex: 0,
          tableData: [{
            date: '2006-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '1999-05-04',
            name: '王贰浪',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '1956-05-01',
            name: '王老虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '1976-05-03',
            name: '王胖虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          search: ''
      };
    },
    filters: {},
    components: {
        CommonHeader,
        Range
    },
    computed: {},
    beforeMount() {},
    mounted() {
        
    },
    methods: {
        handleEdit(index, row) {
            this.currentIndex = index;
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    },
    watch: {}
  }

</script>
<style lang='scss'>
.info{
    width: 800px;
    margin: 60px auto;
    button{
        margin-bottom: 20px;
    }
    .texts{
        background-color: #000;
        color: #fff;
        padding: 10px 20px;
        line-height: 30px;
        p{
            color: #3399ff;
            font-weight: bold;
            font-size: 22px;
        }
        span{
            color: #000;
            background-color: #f00;
            padding: 0 15px;
        }
    }
}
</style>