<template>
  <page-layout>
    <card-layout>
      <questions-form set-result="setResult" v-if="!isResultsShow" @results="setResult(true)"/>
      <result-window v-else @form="setResult(false)"/>
    </card-layout>
  </page-layout>
</template>


<script>
import CardLayout from "../layouts/CardLayout";
import QuestionsForm from "../components/Form/QuestionsForm";
import PageLayout from "../layouts/PageLayout";
import ResultWindow from "../components/ResultWindow";

export default {
  components: {ResultWindow, PageLayout, QuestionsForm, CardLayout},
  data: () => ({
    isResultsShow: false
  }),
  methods: {
    setResult(value) {
      this.isResultsShow = value;
    }
  }
}
</script>
