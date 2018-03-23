<template>
  <div>
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    <button v-on:click="save">Validate</button>
  </div>
</template>

<script>
// import jQuery from 'jQuery'
// import Bootstrap from 'bootstrap'
// import datePicker from 'vue-bootstrap-datetimepicker'
import VueFormGenerator from 'vue-form-generator'
// import BootstrapDatePicker from 'bootstrap-datepicker'

export default {
  name: 'user-edit',
  components: {
    'vue-form-generator': VueFormGenerator.component,
    VueFormGenerator
  },
  data () {
    return {
      model: {
        firstName: this.$store.state.user.firstName,
        lastName: this.$store.state.user.lastName
      },
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'firstName',
            model: 'firstName',
            placeholder: 'Jphn',
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'lastName',
            model: 'lastName',
            placeholder: 'Rambo',
            featured: true,
            required: true
          }
        ]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    save: function (event) {
      this.$store.commit('setFirstName', this.model.firstName)
      this.$store.commit('setLastName', this.model.lastName)
    }
  }
}
</script>
