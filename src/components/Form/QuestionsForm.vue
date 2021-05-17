<template>
  <v-card
      class="pa-4"
      elevation="2"
  >
    <v-card-title class="pa-0 pb-2">Questions - Step {{ step }} of 5</v-card-title>
    <v-form>
      <step-one v-if="step === 1"/>
      <step-two v-if="step === 2"/>
      <step-three v-if="step === 3"/>
      <step-four v-if="step === 4"/>
      <step-five v-if="step === 5"/>
    </v-form>
    <v-card-actions class="justify-space-between">
      <v-btn v-show="step > 1" class="primary mr-auto" @click="previousStep">Previous</v-btn>
      <v-btn v-show="step < 5" class="primary ml-auto" @click="nextStep">Next</v-btn>
      <v-btn v-show="step === 5" class="success ml-auto" :disabled="isFindButtonDisabled" @click="onFindClick">
        Find!
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

export default {
  name: "QuestionsForm",
  emits: ['results'],
  components: {StepFive, StepFour, StepThree, StepTwo, StepOne},
  data: () => ({
    step: 1,
  }),
  computed: {
    isFindButtonDisabled() {
      const {firstName, lastName, birthday, favoriteAnimal, zodiacSign} = this.$store.state.form;
      return firstName.length === 0 || lastName.length === 0 || birthday.length === 0 || favoriteAnimal.length === 0 || zodiacSign.length === 0
    }
  },
  methods: {
    nextStep() {
      this.step++
    },
    previousStep() {
      this.step--
    },
    onFindClick() {
      this.$emit('results')
    }
  }
}
</script>
