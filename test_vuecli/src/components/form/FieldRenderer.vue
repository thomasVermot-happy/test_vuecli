<template>
  <div class="field-block">
    <label v-bind:for="name">{{ name }}</label>
    <input v-if="type == 'text'" v-bind:name="name" v-bind:id="name" v-bind:value="value" />
  </div>
</template>

<script>
import TextInput from './field/TextInput'

export default {
  name: 'formrenderer',
  components: {
    TextInput
  },
  data () {
    return {
    }
  },
  props: {
    type: String,
    name: String,
    value: String
  },
  computed: {
    getFieldType () {
      var result = null
      switch (this.props.type) {
        case 'text':
          result = '<TextInput :tes="name" />'
      }

      return result
    }
  },
  methods: {
  }
}
</script>
