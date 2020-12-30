<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
  }
  body{
    padding: 0;
    margin: 0;
    background-color: #f5f5f5;
  }
</style>
