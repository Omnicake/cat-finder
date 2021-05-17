<template>
  <div>
    <div class="pb-2">First of all, let's figure out some basic information:</div>
    <v-text-field
        label="First name"
        v-model="firstName"
        :rules="[rules.required]"
        autofocus
        required
    ></v-text-field>
    <v-text-field
        label="Last name"
        v-model="lastName"
        :rules="[rules.required]"
        required
    ></v-text-field>
    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="birthday"
        persistent
        width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="birthday"
            :rules="[rules.required]"
            label="Birthday date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
          v-model="birthday"
          scrollable
      >
        <v-spacer></v-spacer>
        <v-btn
            text
            color="primary"
            @click="modal = false"
        >
          Cancel
        </v-btn>
        <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(birthday)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "StepOne",
  data: () => ({
    modal: false,
    rules: {
      required: value => !!value || 'Value is required'
    }
  }),
  computed: {
    firstName: {
      get() {
        return this.$store.state.form.firstName
      },
      set(value) {
        this.$store.dispatch('form/onFirstNameChange', value)
      }
    },
    lastName: {
      get() {
        return this.$store.state.form.lastName
      },
      set(value) {
        this.$store.dispatch('form/onLastNameChange', value)
      }
    },
    birthday: {
      get() {
        return this.$store.state.form.birthday
      },
      set(value) {
        this.$store.dispatch('form/onBirthdayChange', value)
      }
    }
  },
}
</script>
