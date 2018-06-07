<template>
    <div>
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
        <img src="./images/1.jpg" style="width:200px;"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import vTitle from './component/title.vue';
    import vButton from './component/button.vue';
    export default {
        components:{
            vTitle,
            vButton
    },
        methods:{
            handleClick(e){
                console.log(e);
            }
        }
    }
</script>

<style scoped>
    div{
        color: #ff6600;
        font-size: 24px;
    }

</style>