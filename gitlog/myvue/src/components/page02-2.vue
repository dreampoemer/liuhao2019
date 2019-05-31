<template>
    <div>
        {{msg}}--{{$route.params.username}}--{{$route.params.sex}}
    </div>
</template>

<script>
export default {
    name:"page02-2",
    data(){
        return{
            msg:"这是page02页面的子路由页面page02-2"
        }
    }
}
</script>

<style>

</style>