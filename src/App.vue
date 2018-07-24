<template>
  <div id="app">
    <Home></Home>
    <bgVid></bgVid>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Home from '@/components/Home'
import bgVid from '@/components/bgVid'

export default {
  name: 'App',
  components: {
    Home,
    bgVid
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
