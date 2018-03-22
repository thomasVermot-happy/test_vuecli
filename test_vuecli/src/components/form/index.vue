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

        <br/>
        <div class="field-container">
          <fieldrenderer :type="field.type" :value="field.value" :name="field.name"/>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
  .field-container {
    margin:15px;
    border-left: solid 5px grey;
    padding-left: 15px;
  }
</style>

<script>
import textinput from './field/TextInput'
import fieldrenderer from './FieldRenderer'
// import VueFormGenerator from 'vue-form-generator'
// import 'vue-form-generator/dist/vfg.css' // optional full css additions

export default {
  name: 'formview',
  components: {
    textinput,
    fieldrenderer
  },
  data () {
    return {
      msg: 'FORM',
      fields: [
        {
          name: 'YOLOOO',
          type: 'text',
          value: 'valiou'
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
