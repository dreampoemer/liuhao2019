<template>
    <div class="hello">
        {{msg}}
    </div>
</template>

<script>
export default {
    name:"hi",
    data(){
        return {
            msg:"你好~"
        }
    }
}
</script>

<style>
    .hello{
        text-align: center;
        color: #3399ff;
        font-size: 20px;
    }
</style>
