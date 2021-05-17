<template>
  <v-app-bar>
    <v-container fluid class="d-flex justify-space-between">
      <router-link to="/"><v-icon color="primary" class="pr-2">mdi-magnify</v-icon><h3 class="d-flex align-center">Cat Finder</h3></router-link>
      <v-btn elevation="2" color="error" @click="logOut">
        Log Out
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "TheHeader",
  methods: {
    async logOut() {
      await this.$store.dispatch('logOut');
      await this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
}
</style>
