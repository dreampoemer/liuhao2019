import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

//state && mutations,此常量名固定，不是自定义名称
const state ={
    num:1
}

const mutations = {
    add(state,val){
        state.num+=val;
    },
    reduce(state,val){
        state.num-=val;
    }
}

const getters={
    num(state){
        return state.num+=100;
    }
}

const actions= {
    /*
        context:上下文对象，相当于store本身
        {commit}:直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了
    */
    addAction(context){
        context.commit('add',20);
        setTimeout(()=>{context.commit('reduce',10)},5000);
        console.log("校验actions异步，我比reduce先执行");
    },
    reduceAction({commit}){
        commit('reduce',20);
    }
}
// 用export default 封装代码，让外部可以引用。
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});