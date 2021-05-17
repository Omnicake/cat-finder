const state = {
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "male",
    height: 150,
    isAllergic: false,
    favoriteAnimal: "",
    favoriteColor: "#FFFFFF",
    zodiacSign: ""
};

const mutations = {
    FIRST_NAME_CHANGE(state, payload) {
        state.firstName = payload;
    },
    LAST_NAME_CHANGE(state, payload) {
        state.lastName = payload;
    },
    BIRTHDAY_CHANGE(state, payload) {
        state.birthday = payload;
    },
    GENDER_CHANGE(state, payload) {
        state.gender = payload;
    },
    HEIGHT_CHANGE(state, payload) {
        state.height = payload;
    },
    IS_ALLERGIC_CHANGE(state, payload) {
        state.isAllergic = payload;
    },
    FAVORITE_ANIMAL_CHANGE(state, payload) {
        state.favoriteAnimal = payload;
    },
    FAVORITE_COLOR_CHANGE(state, payload) {
        state.favoriteColor = payload;
    },
    ZODIAC_SIGN_CHANGE(state, payload) {
        state.zodiacSign = payload;
    },
    FORM_RESET(state) {
        state.firstName = "";
        state.lastName = "";
        state.birthday = "";
        state.gender = "male";
        state.height = 150;
        state.isAllergic = false;
        state.favoriteAnimal = "";
        state.favoriteColor = "#FFFFFF";
        state.zodiacSign = "";
    }
}

const actions = {
    onFirstNameChange({commit}, value) {
        commit('FIRST_NAME_CHANGE', value);
    },
    onLastNameChange({commit}, value) {
        commit('LAST_NAME_CHANGE', value);
    },
    onBirthdayChange({commit}, value) {
        commit('BIRTHDAY_CHANGE', value);
    },
    onGenderChange({commit}, value) {
        commit('GENDER_CHANGE', value);
    },
    onHeightChange({commit}, value) {
        commit('HEIGHT_CHANGE', value);
    },
    onAllergicChange({commit}, value) {
        commit('IS_ALLERGIC_CHANGE', value);
    },
    onFavoriteAnimalChange({commit}, value) {
        commit('FAVORITE_ANIMAL_CHANGE', value);
    },
    onFavoriteColorChange({commit}, value) {
        commit('FAVORITE_COLOR_CHANGE', value);
    },
    onZodiacChange({commit}, value) {
        commit('ZODIAC_SIGN_CHANGE', value);
    },
    onFormReset({commit}) {
        commit('FORM_RESET');
    }
}

const getters = {
    firstName: state => state.firstName,
    lastName: state => state.lastName,
    birthday: state => state.birthday,
    gender: state => state.gender,
    height: state => state.height,
    favoriteAnimal: state => state.favoriteAnimal,
    favoriteColor: state => state.favoriteColor,
    zodiacSign: state => state.zodiacSign
}

const form = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};

export default form;
