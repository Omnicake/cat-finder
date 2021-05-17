const state = () => ({
    username: "",
    password: "",
    isAuth: false,
    isLoading: false,
    error: undefined
});

const mutations = {
    USERNAME_CHANGE(state, payload) {
        state.username = payload;
    },
    PASSWORD_CHANGE(state, payload) {
        state.password = payload;
    },
    LOG_IN(state) {
        state.isAuth = true;
    },
    LOG_OUT(state) {
        state.isAuth = false;
    },
    SET_LOADING(state, payload) {
        state.isLoading = payload;
    },
    SET_ERROR(state, payload) {
        state.error = payload;
    }
};

const actions = {
    onUsernameChange({commit}, value) {
        commit('USERNAME_CHANGE', value);
    },
    onPasswordChange({commit}, value) {
        commit('PASSWORD_CHANGE', value);
    },
    logIn({commit}) {
        return new Promise((res) => {
            commit('SET_ERROR', undefined);
            commit('SET_LOADING', true);
            setTimeout(() => {
                localStorage.setItem('auth', 'true');
                commit('LOG_IN');
                commit('SET_LOADING', false);
                res();
            }, 3000);
        });
    },
    logOut({commit}) {
        localStorage.removeItem('auth');
        commit('LOG_OUT');
    }
};

const getters = {
    username: state => state.username,
    password: state => state.password,
    isAuth: state => state.isAuth,
    isLoading: state => state.isLoading,
    error: state => state.error
};

const auth = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default auth;
