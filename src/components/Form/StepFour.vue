<template>
  <div>
    <div class="pb-2">Ok, now we ask something unusual...</div>
    <v-subheader class="pb-1">Pick your favorite color:</v-subheader>
    <v-color-picker
        :value="favoriteColor"
        @input="onFavoriteColorChange"
        dot-size="25"
        swatches-max-height="200"
        hide-mode-switch
        mode="hexa"
        class="ml-auto mr-auto elevation-2"
    ></v-color-picker>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "StepFour",
  computed: {
    ...mapGetters('form', ['favoriteColor'])
  },
  methods: {
    ...mapActions('form', ['onFavoriteColorChange'])
  }
}
</script>
