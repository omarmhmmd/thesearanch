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
  /* @import './assets/css/normalize.css'; */
  @import './assets/css/reset.css';

  html {
    overflow: hidden;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    color: #000000;
  }

  @font-face {
    font-family: helvetica75;
    src: url('./assets/fonts/helvetica75.otf');
  }

</style>
