<template>
  <div class="audioButton">
    <button @click="toggleMute">
      <SvgButton id = "soundButton"/>
    </button>
  </div>
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
    left: 110%;
    bottom: 1.5vw;
    background: none;
    border: none;
    cursor: pointer;
  }

  #audioButton {

  }

  #soundButton {
  }

  button:focus {outline:0;}

</style>
