<template>
    <!-- <video autoplay loop muted :style = "videoStyle">
      <source :src=video type="video/mp4">
    </video> -->
    <video-bg :sources="['static/videos/001.mp4']" img="demo/assets/bg.jpg">
        <!-- If you want to add content here, a slot is waiting! -->
    </video-bg>
</template>

<script>
  export default {
    name: 'Video',
    data() {
      return {
        video: 'static/videos/001.mp4',
        videoStyle: {

        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
