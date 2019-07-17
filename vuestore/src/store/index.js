import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import footerStatus from './modules/footerStatus'
import collection from './modules/collection'

export default new Vuex.Store({
    modules:{
        footerStatus,
        collection
    }
});