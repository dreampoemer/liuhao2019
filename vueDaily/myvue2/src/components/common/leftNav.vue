<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-qian"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-shouye"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-canyin"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-geren"></i>
                <div>会员</div>
            </li>
            <li>    
                <i class="icon iconfont icon-bianji"></i>
                <div>统计</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'leftNav',
    data(){
        return{

        }
    }
}
</script>

<style lang='scss' scoped>
.left-nav{
     color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
       ul{
           padding:0;
           margin: 0;
           li{
               list-style: none;
                text-align: center;
                border-bottom:1px solid #20a0ff;
                padding:10px;
                .iconfont{
                    font-size:24px;
                }
           }
       }
}
</style>
