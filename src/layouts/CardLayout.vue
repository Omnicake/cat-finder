<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col class="col-6">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CardLayout"
}
</script>
