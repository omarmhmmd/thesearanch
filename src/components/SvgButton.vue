<template>
  <div @click="toggle()">
    <div>
      <simple-svg
        :filepath="soundOn"
        :width="svgWidth"
        :height="svgHeight"
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
      svgWidth: 22 + 'px',
      svgHeight: 19 + 'px',
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

<style scoped>

</style>
