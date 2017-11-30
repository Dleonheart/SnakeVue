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
    background-color: #f3f3f3;
    font-family: 'Abel', sans-serif;
    width: 100%;
    height: 100%;
  }

</style>
