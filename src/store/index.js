import Vue from 'vue'
import Vuex from 'vuex'

import auth from "@/store/auth";
import form from "@/store/form";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        form
    }
});

export default store;
