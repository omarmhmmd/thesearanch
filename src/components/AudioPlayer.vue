<template>
  <button @click="toggleMute">
    <SvgButton />
  </button>
</template>

<script>
  import VueHowler from 'vue-howler'
  import SvgButton from '@/components/SvgButton'

  export default {
    name: 'AudioPlayer',
    components: {
      SvgButton
    },
    mixins: [VueHowler],
    data() {
      return {
        soundOn: 'static/button/soundOn.svg',
        soundOff: 'static/button/soundOff.svg'
      }
    },
    methods: {
      toggleMute() {
        this.soundOn = 'static/button/soundOff.svg';
        this.$data._howl.mute(!this.muted)
        this.muted = !this.muted
      },
    }
  }
</script>

<style scoped>

  button {
    position: relative;
    bottom: 38px;
    left: 215px;
    background: none;
    border: none;
    cursor: pointer;
  }

  button:focus {outline:0;}

</style>
