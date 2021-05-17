<template>
  <card-layout>
    <v-card
        class="pa-4"
        elevation="2"
    >
      <div v-if="!isLoading">
      <v-card-title class="text-center">And the best cat for you is...</v-card-title>
      <v-img v-if="imageUrl" :src="imageUrl" :lazy-src="imageUrl" />
      <div>
        <h3 class="display-1 text-center pt-2 pb-2">{{ randomCatName }}!</h3>
      </div>
      <v-card-actions>
        <v-btn block class="primary" @click="onClick">Try again</v-btn>
      </v-card-actions>
      </div>
      <div v-else>
        <v-card-title>Searching for the best match...</v-card-title>
        <v-progress-linear
            color="light-blue"
            height="10"
            indeterminate
            striped
        ></v-progress-linear>
      </div>
    </v-card>
  </card-layout>
</template>


<script>
import CardLayout from "../layouts/CardLayout";
import catNames from "../utils/catNames";
import catApi from "../utils/api";

export default {
  name: 'ResultWindow',
  data: () => ({
    catNames: catNames,
    isLoading: true,
    error: undefined,
    imageUrl: undefined
  }),
  emits: ['form'],
  components: {CardLayout},
  computed: {
    randomCatName() {
      const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      }

      return this.catNames[randomNumber(0, catNames.length - 1)]
    }
  },
  created() {
    this.loadCatPhoto();
  },
  methods: {
    async onClick() {
      await this.$store.dispatch('form/onFormReset');
      this.$emit('form')
    },
    async loadCatPhoto() {
      this.error = undefined;
      this.isLoading = true;
      try {
        this.imageUrl = await catApi.getRandomCatPhoto();
      } catch (err) {
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>
