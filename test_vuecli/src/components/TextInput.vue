<template>
  <div class="field">
    TEXT INPUT!!!
    <label>{{ tes }}</label>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'textinput',
  data () {
    return {
    }
  },
  props: {
    tes: String
  }
}
</script>
