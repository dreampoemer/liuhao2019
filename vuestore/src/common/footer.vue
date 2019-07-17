<template>
    <div class="footer">
        当前第{{pageNum}}页
    </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
export default {
    data(){
       return{
           
       }
    },
    computed:{
        ...mapState({
           pageNum:state=>state.footerStatus.changableNum 
        }),
        // ...mapGetters('footerStatus',{
        //     pageNum:'getChangeNum'
        // })
    }
}
</script>

<style>
.footer{
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-size: 24px;
    color: #fff;
    background-color: #000;
}
</style>
