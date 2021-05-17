<template>
  <div>
    <v-select
        :items="animals"
        v-model="favoriteAnimal"
        label="Your favorite type of animal"
        :rules="[rules.required]"
    ></v-select>
    <v-checkbox
        v-model="isAllergic"
        :label="`I have animal allergies`"
    ></v-checkbox>
  </div>
</template>

<script>
import animals from "../../utils/animals";

export default {
  name: "StepThree",
  data: () => ({
    animals: animals,
    rules: {
      required: value => !!value || 'Value is required'
    }
  }),
  computed: {
    favoriteAnimal: {
      get() {
        return this.$store.state.form.favoriteAnimal;
      },
      set(value) {
        this.$store.dispatch('form/onFavoriteAnimalChange', value);
      }
    },
    isAllergic: {
      get() {
        return this.$store.state.form.isAllergic;
      },
      set(value) {
        this.$store.dispatch('form/onAllergicChange', value);
      }
    }
  }
}
</script>
