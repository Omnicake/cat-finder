<template>
  <page-layout>
    <card-layout>
      <v-card
          class="pa-4"
          elevation="2"
      >
        <h1 class="pb-6 text-center display-1">Hey, lets find a cat for you!</h1>
        <p>Before we can start searching a perfect cat for you, we need some information.</p>
        <p>Please, answer some questions and our magic deep-learning algorithm find the best match for you!</p>
        <v-btn class="ml-auto mr-auto d-block" color="primary" @click="moveToQuestions">
          Let's go!
        </v-btn>
      </v-card>
    </card-layout>
  </page-layout>
</template>

<script>
import CardLayout from "../layouts/CardLayout";
import PageLayout from "../layouts/PageLayout";

export default {
  name: "MainPage",
  components: {PageLayout, CardLayout},
  methods: {
    moveToQuestions() {
      this.$router.push('/finder')
    }
  }
}
</script>
