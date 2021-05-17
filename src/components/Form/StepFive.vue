<template>
  <div class="d-flex align-center flex-column">
    <v-subheader class="pb-1">Pick your zodiac sign:</v-subheader>
    <v-radio-group
        v-model="zodiacSign"
        column
    >
      <v-radio
          v-for="(zodiac, idx) in zodiacSigns"
          :value="zodiac.value"
          :key="idx"
          :label="zodiac.label"
          :on-icon="zodiac.icon"
          :off-icon="zodiac.icon"
      >
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import zodiacSigns from "../../utils/zodiacSigns";

export default {
  name: "StepFive",
  data: () => ({
    zodiacSigns: zodiacSigns,
  }),
  computed: {
    zodiacSign: {
      get() {
        return this.$store.state.form.zodiacSign
      },
      set(value) {
        this.$store.dispatch('form/onZodiacChange', value)
      }
    }
  }
}
</script>
