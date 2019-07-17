const state ={//要设置的全局访问的state对象
    showFooter:true,
    changableNum:10
     //要设置的初始属性值
}

//this.$store.state.showFooter或this.$store.state.changebleNum在任何一个组件里面获取showfooter和changebleNum定义的值.但这不是理想的获取方式vuex官方API提供了一个getters，和vue计算属性computed一样，来实时监听state值的变化(最新状态)

const getters = {//实时监听state值的变化(最新状态)
    isShow(state){
        return state.showFooter;
    },
    getChangeNum(){
        return state.changableNum
    }
}

//光有定义的state的初始值，不改变它不是我们想要的需求，接下来要说的就是mutations了，mutattions也是一个对象，这个对象里面可以放改变state的初始值的方法，具体的用法就是给里面的方法传入参数state或额外的参数,然后利用vue的双向数据驱动进行值的改变

const mutations = {
    show(state){
        state.showFooter = true;
    },
    hide(state){
        state.showFooter = false;
    },
    newNum(state,num){
        state.changableNum += num;
    }
}

//这时候你完全可以用 this.$store.commit('show') 或 this.$store.commit('hide') 以及 this.$store.commit('newNum',6) 在别的组件里面进行改变showfooter和changebleNum的值了，但这不是理想的改变值的方式；因为在 Vuex 中，mutations里面的方法 都是同步事务，意思就是说：比如这里的一个this.$store.commit('newNum',sum)方法,两个组件里用执行得到的值，每次都是一样的，这样肯定不是理想的需求。好在vuex官方API还提供了一个actionsactions也是个对象变量，最大的作用就是里面的Action方法 可以包含任意异步操作，这里面的方法是用来异步触发mutations里面的方法，actions里面自定义的函数接收一个context参数和要变化的形参，context与store实例具有相同的方法和属性，所以它可以执行context.commit(' ')

const actions = {
    showFooter(context){ //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('show');
    },
    hideFooter(context){
        context.commit('hide');
    },
    getNewNum(context,num){
        context.commit('newNum',num);
    }
}
//而在外部组件里进行全局执行actions里面方法的时候，你只需要用执行
// this.$store.dispatch('hideFooter')
// 或this.$store.dispatch('showFooter')
// 以及this.$store.dispatch('getNewNum'，6) //6要变化的实参，这样就可以全局改变改变showfooter或changebleNum的值了。

export default{
    namespaced:true,//用于在全局引用此文里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}