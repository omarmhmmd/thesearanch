<template>
  <div id = ""@click="toggle()">
    <div>
      <simple-svg
        :filepath="soundOn"
        :width="'22px'"
        :height="'19px'"
        :id="svgId"
        @ready="svgReady()"
        />
    </div>
  </div>
</template>

<script>
export default {
  name: 'svg-button',
  data () {
    return {
      isActive: false,
      soundOn: '/static/button/' + 'soundOn.svg',
      soundOff: '/static/button/' + 'soundOff.svg',
      svgWidth: '100vw',
      svgHeight: '10vh',
      svgId: 'mySVG',
    }
  },
  computed: {
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
      if (this.isActive) {
        this.soundOn = '/static/button/' + 'soundOff.svg'
      }
      else {
        this.soundOn = '/static/button/' + 'soundOn.svg'
      }
    },
    svgReady() {
      console.log("svg ready")
    }
  }
}
</script>

/******** MEDIA QUERIES ********/
<!-- MEDIA QUERY -->
<style lang = 'scss' scoped>

  $small: 576px;
  $medium: 768px;
  $large: 992px;
  $largeplus: 1024px;

  @media screen and (max-width: $small) {

  }

  @media screen and (max-width: $medium) {

  }

  @media screen and (min-width: $large) {

  }
</style>
