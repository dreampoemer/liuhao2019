<template>
    <p v-html='msg'></p>
</template>
<script>
export default {
    data(){
        return{
            msg:"welcome to my vueCenter~<br><strong>Let's Do it!</strong>"
        }
    }
}
</script>
<style>
p{
    padding: 10px 20px;
    background-color: #3399ff;
    color: #fff;  
}
strong{
    font-size: 20px;
    color:#000;
}
</style>


