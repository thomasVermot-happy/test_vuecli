<template>
  <div class="user-block view">
    <div class="field-group">
      <label>First Name : </label><span>{{user.firstName}}</span>
      <label>Last Name : </label><span>{{user.lastName}}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'user-view',
  components: {
  },
  data () {
    return {}
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
