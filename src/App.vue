<template>
  <div id="app">
    <Fog></Fog>
    <router-view/>
  </div>
</template>

<script>
import Fog from '@/components/Fog'

export default {
  name: 'App',
  components: {
    Fog
  }
}
</script>

<style>
  @import './assets/css/normalize.css';

  html {
    overflow: hidden;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    color: #000000;
  }
</style>
