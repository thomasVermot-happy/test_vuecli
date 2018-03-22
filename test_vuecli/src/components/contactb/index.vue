<template>
  <div class="panel-body">
    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
  </div>
</template>

<script>
import jQuery from 'jQuery'
import Bootstrap from 'bootstrap'
import datePicker from 'vue-bootstrap-datetimepicker'
import VueFormGenerator from 'vue-form-generator'
import BootstrapDatePicker from 'bootstrap-datepicker'

export default{
  name: 'contactb',
  components: {
    'vue-form-generator': VueFormGenerator.component,
    jQuery,
    Bootstrap,
    datePicker,
    BootstrapDatePicker,
    VueFormGenerator
  },
  data () {
    return {
      model: {
        id: 1,
        name: 'John Doe',
        password: 'J0hnD03!x4',
        skills: ['Javascript', 'VueJS'],
        email: 'john.doe@gmail.com',
        status: true
      },

      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: 'ID (disabled text field)',
          model: 'id',
          readonly: true,
          disabled: true
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Name',
          model: 'name',
          placeholder: 'Your name',
          featured: true,
          required: true
        },
        {
          type: 'input',
          inputType: 'password',
          label: 'Password',
          model: 'password',
          min: 6,
          required: true,
          hint: 'Minimum 6 characters',
          validator: VueFormGenerator.validators.string
        },
        {
          type: 'select',
          label: 'Skills',
          model: 'skills',
          values: ['Javascript', 'VueJS', 'CSS3', 'HTML5']
        },
        {
          type: 'dateTimePicker',
          label: 'Start',
          model: 'Start',
          required: true,
          placeholder: 'Start date',
          dateTimePickerOptions: {
            format: 'YYYY-MM-DD'
          }
        },
        {
          type: 'dateTimePicker',
          label: 'ExpirationTime',
          model: 'ExpirationTime',
          required: true,
          placeholder: 'Expiration date',
          dateTimePickerOptions: {
            format: 'YYYY-MM-DD'
          }
        }]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  }
}
</script>
