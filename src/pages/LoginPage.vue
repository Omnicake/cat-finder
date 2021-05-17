<template>
  <v-row align="center" justify="center" class="row">
    <v-col cols="6">
      <LoginForm/>
    </v-col>
  </v-row>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "LoginPage",
  components: {LoginForm},
}
</script>

<style scoped>
.row {
  height: 100%;
}
</style>
