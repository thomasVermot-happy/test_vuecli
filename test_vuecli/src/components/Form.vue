
<template>
  <div id="form">
    <div>{{ msg }}</div>
    <form>
      <div v-for="(field, key) in fields" v-bind:key="key">
        name : {{ field.name }} -
        type : {{ field.name }} -
        <br/> count: {{ count }}
        <button @click="increment()">INCREMENT</button>
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
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment: function () {
      this.$store.commit('increment')
    }
  }
}
</script>
