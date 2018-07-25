<template>
  <video autoplay loop muted>
    <source :src=video type="video/mp4">
  </video>
</template>

<script>
  export default {
    name: 'bgVid',
    data() {
      return {
        video: 'static/videos/001.mp4'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
