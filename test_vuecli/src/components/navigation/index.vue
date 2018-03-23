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
  .navigation {

  }

  .navigation ul {
    display: block;
    list-style-type: none;
    background: orange;
  }

  .navigation li {
    display: inline-block;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 600;
  }

  .navigation a {
    color: white;
  }

  .navigation a:hover {
    color: black;
  }
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
