import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';

Vue.use(VueRouter);

const Routers=[
    {
    //    路由重定向
        path:'*',
        redirect:'/index'
    },
    {
        path:'/user/:id',
        component:(resolve)=>require(['./component/user.vue'],resolve)
    },
    {
        path:'/index',
        component:(resolve)=>require(['./component/index.vue'],resolve)
    },
    {
        path:'/about',
        component:(resolve)=>require(['./component/about.vue'],resolve)
    }
];
const RouterConfig={
//   使用html5的History模式
    mode:'history',
    routes:Routers
};
const router=new VueRouter(RouterConfig);
new Vue({
   el:'#app',
    router:router,
    render:h=>{return h(App)}
});