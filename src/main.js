import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "@/routes";
import store from "@/store";

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
