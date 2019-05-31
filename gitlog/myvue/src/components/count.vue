<template>
    <div>
        {{msg}}
        <hr>
         {{$store.state.num}}&lt;==&gt;{{num}}
         <div>
             <button @click="add(7)">+</button>
             <button @click="reduce(1)">-</button>
         </div>
         <div>
             <button @click="addAction">+</button>
             <button @click="reduceAction">-</button>
         </div>
    </div>
</template>

<script>
import store from "@/vuex/store";
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
    data(){
        return{
            msg:"欢迎来到vuex"
        }
    },
    // computed:{
    //     doit(){
    //         return this.$store.state.num;
    //     }
    // },
    // computed:mapState({
    //     doit:state=>state.num
    // }),
    // computed:mapState(['num']),
    computed:{
        ...mapState(['num'])
    },
    methods:{
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction'])
    },
    store
}
</script>

<style>

</style>
