<template>
  <div class="navigation">
    <ul>
      <li>
        <router-link to="/form">Form</router-link>
      </li>
      <li>
        <router-link to="/">HelloWorld</router-link>
      </li>
      <li>
        <router-link to="/contact">CONTACT</router-link>
      </li>
      <li>
        <router-link to="/contactb">CONTACT B</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  name: 'navigation',
  methods: {
  },
  computed: {
  }
}
</script>
