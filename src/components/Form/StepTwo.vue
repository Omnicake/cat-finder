<template>
  <div>
    <v-subheader>Your gender:</v-subheader>
    <v-radio-group v-model="gender" row>
      <v-radio label="Male" value="male"></v-radio>
      <v-radio label="Female" value="female"></v-radio>
      <v-radio label="I don't know" value="idk"></v-radio>
    </v-radio-group>
    <v-subheader class="pb-6">
      Your height:
    </v-subheader>
    <v-slider
        v-model="height"
        min="0"
        max="300"
        :thumb-size="24"
        thumb-label="always"
    ></v-slider>
  </div>
</template>

<script>
export default {
  name: "StepTwo",
  computed: {
    gender: {
      get() {
        return this.$store.state.form.gender;
      },
      set(value) {
        this.$store.dispatch('form/onGenderChange', value);
      }
    },
    height: {
      get() {
        return this.$store.state.form.height;
      },
      set(value) {
        this.$store.dispatch('form/onHeightChange', value);
      }
    }
  }
}
</script>
