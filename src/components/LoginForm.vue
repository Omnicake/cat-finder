<template>
  <v-card elevation="2" class="ma-8 w-50">
    <h1 class="text-center pt-2">Cat Finder</h1>
    <div class="icon__container">
      <inline-svg class="icon" width="150"
                  height="150" :src="require('../assets/logo.svg')"/>
    </div>
    <v-form @submit.prevent="logIn">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
                class="justify-center"
                :value="username"
                :rules="usernameRules"
                :counter="14"
                @input="onUsernameChange"
                label="Username"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
                :value="password"
                :rules="passwordRules"
                @input="onPasswordChange"
                label="Password"
                :type="'password'"
                required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions class="justify-center">
        <v-btn type="submit" color="primary" elevation="2" :disabled="isButtonDisabled" block>
          <v-progress-circular
              indeterminate
              color="gray"
              v-if="isLoading"
          ></v-progress-circular>
          <span v-else>Sign In</span>
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import InlineSvg from 'vue-inline-svg';

export default {
  name: "LoginForm",
  data: () => ({
    usernameRules: [
      value => !!value || 'Username required',
      value => value.length <= 14 || 'Username must be less than 14 characters',
      value => value.length >= 3 || 'Username must contains at least 3 characters'
    ],
    passwordRules: [
      value => !!value || 'Password required'
    ]
  }),
  components: {InlineSvg},
  computed: {
    isButtonDisabled: function () {
      const {username, password, isLoading} = this.$store.state.auth;
      return username.length === 0 || password.length === 0 || isLoading || username.length > 14
    },
    ...mapGetters('auth', ['username', 'password', 'isLoading', 'error']),
  },
  methods: {
    ...mapActions('auth', ['onUsernameChange', 'onPasswordChange']),
    async logIn() {
      await this.$store.dispatch('auth/logIn');
      await this.$router.push('/');
    }
  }
}
</script>

<style scoped lang="scss">
.icon {
  &__container {
    display: flex;
    justify-content: center;
  }
}
</style>
