<template>
    <div>
         {{title}}
         <p>id：{{$route.params.newsId}}---标题：{{$route.params.newsTitle}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:"这是params.vue组件"
        }  
    }
}
</script>

<style>

</style>
