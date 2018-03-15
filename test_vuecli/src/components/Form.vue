<template>
  <div>
    <div>{{ msg }}</div>
    <form>
      <div v-for="(field, key) in fields" v-bind:key="key">
        name : {{ field.name }} -
        type : {{ field.name }}
        <textinput :tes="field.name"></textinput>
      </div>
    </form>
  </div>
</template>

<script>
import textinput from './TextInput'

export default {
  name: 'formview',
  components: {
    textinput
  },
  data () {
    return {
      msg: 'FORM',
      fields: [
        {
          name: 'YOLOOO',
          type: 'text'
        }
      ]
    }
  }
}
</script>
