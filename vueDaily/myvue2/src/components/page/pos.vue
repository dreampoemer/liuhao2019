<template>
    <div class="pos">
        <el-row>
            <el-col :span='7' id="order-list">
                <el-tabs>
                    <el-tab-pane label='点餐'>
                        <el-table border style='width:100%' :data='tableData'>
                            <el-table-column prop='goodsName' label='商品名称'></el-table-column>
                            <el-table-column prop='count' label='数量' width='50'></el-table-column>
                            <el-table-column prop='price' label='金额' width='70'></el-table-column>
                            <el-table-column label='操作' width='100' fixed='right'>
                                <template scope='scope'>
                                    <el-button type='text' size='small' @click='addOrderToList(scope.row)'>添加</el-button>
                                    <el-button type='text' size='small' @click='deleteSingleGoods(scope.row)'>删除</el-button>
                                </template>
                            </el-table-column>                          
                        </el-table>
                        <div class="total-count">
                            数量：{{totalCount}}       金额：￥{{totalMoney}}元
                        </div>
                        <div class="btn-wrap">
                            <el-button type='warning'>挂单</el-button>
                            <el-button type='danger' @click="emptyGoods">清空购物车</el-button>
                            <el-button type='success' @click='payForGoods'>结账</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label='挂单'>挂单</el-tab-pane>
                    <el-tab-pane label='外卖'>外卖</el-tab-pane>
                </el-tabs>
            </el-col>
            <!-- 商品展示 -->
            <el-col :span='17' style="padding-left:20px;">
                <div class="title">常用商品</div>
                <div class="often-goods-list clearfix">
                    <ul class="clearfix">
                        <li v-for = "goods in oftenGoods" @click='addOrderToList(goods)'>
                            <span class="title">{{goods.goodsName}}</span>
                            <span class="o-price">￥{{goods.price}}元</span>
                        </li>
                    </ul>
                </div>
                <div class="goods-type">
                    <el-tabs>
                        <el-tab-pane label='汉堡'>
                            <ul class="cook-list clearfix">
                                <li v-for = "goods in type0Goods" @click='addOrderToList(goods)'>
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label='小食'>
                            <ul class="cook-list clearfix">
                                <li v-for = "goods in type1Goods" @click='addOrderToList(goods)'>
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label='饮料'>
                             <ul class="cook-list clearfix">
                                <li v-for = "goods in type2Goods" @click='addOrderToList(goods)'>
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                        <el-tab-pane label='套餐'>
                             <ul class="cook-list clearfix">
                                <li v-for = "goods in type3Goods" @click='addOrderToList(goods)'>
                                    <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                    <span class="foodName">{{goods.goodsName}}</span>
                                    <span class="foodPrice">￥{{goods.price}}元</span>
                                </li>
                            </ul>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
           tableData:[],
            oftenGoods:[{
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }],
          type0Goods:[],
          type1Goods:[],
          type2Goods:[],
          type3Goods:[],
          totalCount:0,
          totalMoney:0
        }
    },
    methods:{
        addOrderToList(goods){
            this.totalCount = 0;
            this.totalMoney = 0;
            //判断点餐台是否存在所选商品
            let isExsit =false;
            for(let i = 0;i < this.tableData.length; i++){
                if(this.tableData[i].goodsId == goods.goodsId){
                    isExsit = true;
                }
            }

            if(isExsit){
                //如果存在数量，金额++
               let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
               arr[0].count++;
            }else{
                //不存在就推入数组，渲染展示
                let newGoods = {
                    goodsId:goods.goodsId,
                    goodsName:goods.goodsName,
                    price:goods.price,
                    count:1
                };
                this.tableData.push(newGoods);
            }

            this.getAllMoney();
            
        },
        deleteSingleGoods(goods){
            this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
            this.getAllMoney();
        },
        getAllMoney(){
            this.totalCount=0;
            this.totalMoney=0;
            if(this.tableData){
                //进行数量和价格的汇总计算
                this.tableData.forEach((element) => {
                    this.totalCount += element.count;
                    this.totalMoney = this.totalMoney+(element.price*element.count);   
                });
            }
        },
        //清空购物车
        emptyGoods(){
            this.tableData=[];
            this.totalCount=0;
            this.totalMoney=0;
        },
        //模拟结账
        payForGoods(){
            if(this.totalCount != 0){
                this.$message({
                    message:'结账成功，共支付'+ this.totalMoney +'元。感谢你又为店里出了一份力!',
                    type:'success'
                });
                this.tableData=[];
                this.totalCount=0;
                this.totalMoney=0;
            }else{
                this.$message.error('不能空结。老板了解你急切的心情！');
            }
        }
    },
    created(){
        let url ='https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods';
        axios.get(url).then(response=>{
            console.log(response);
            this.type0Goods=response.data[0];
            this.type1Goods=response.data[1];
            this.type2Goods=response.data[2];
            this.type3Goods=response.data[3];
        })
        .catch(error=>{
            console.log(error);
        });
    },
    mounted(){
        let orderHeight = document.body.clientHeight;
        document.getElementById('order-list').style.height = orderHeight + 'px'
    }
}
</script>

<style lang="scss" scoped>
.btn-wrap{
    margin-top: 20px;
}
.title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    padding:10px;
    background-color: #fff;
}
.often-goods-list ul,.cook-list{
    padding: 0;
}
.often-goods-list ul li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:5px;
    background-color:#fff;
    cursor: pointer;
}
.o-price{
    color:#58B7FF; 
}
.cook-list li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
        cursor: pointer;
   }
.cook-list li span{
    
    display: block;
    float:left;
}
.foodImg{
    width: 40%;
    height: 100%;
    img{
        height: 100%;
    }
}
.foodName{
    font-size: 18px;
    padding-left: 10px;
    color:brown;

}
.foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:10px;
}
.total-count{
    padding: 10px;
    border-bottom: 1px solid #E5E9F2;
    background-color: #fff;
}
</style>
