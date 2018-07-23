<template>
    <video :src="video" autoplay loop> </video>
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
