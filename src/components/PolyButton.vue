<template>
    <button class="poly-button">
      <slot></slot>
    </button>
    
</template>

<script>
export default {
  name: "poly-button",

};
</script>

<style scoped lang="scss">
  .poly-button {
    background: transparent url(/static/images/button-background.svg) no-repeat;
    background-size: contain;
    color: white;
    border: none;
    font-size: 55px;
    font-family: 'Abel', sans-serif;
    padding: .5em 2em .5em 1em;
    display: inline-block;
    min-height: 2.1em;
    margin-top: 20px;
    cursor: pointer;
  }

  
</style>
