<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import url('normalize.css');
  @import url('https://fonts.googleapis.com/css?family=Abel');

  body {
    background-color: #e2e2e2;
    font-family: 'Abel', sans-serif;
  }
</style>
