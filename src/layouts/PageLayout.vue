<template>
  <v-container fluid fill-height class="pa-0 align-start">
    <the-header></the-header>
    <slot></slot>
    <the-footer></the-footer>
  </v-container>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";
export default {
  name: "PageLayout",
  components: {TheFooter, TheHeader}
}
</script>
