<template>
    <div>
        <h3>{{msg}}</h3>
        <button @click="add">增加</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'page02',
    data(){
        return {
            msg:10
        }
    },
    methods:{
        add:function(){
            this.msg++;
        }
    }
}
</script>

<style scoped>

</style>

