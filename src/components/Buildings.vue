<template>
  <div id="container">
    <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
    <div id="buildingMap">
      <div id="buildingIcon" ref="buildingIcon">
        <simple-svg :filepath="image" :width="svgWidth" :height="svgHeight"></simple-svg>
      </div>
      <!-- <svg viewBox="0 0 2600 1116" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :style='mapStyle' ref="map" d="M580.958 10.4673L557.539 0.76188C556.325 0.258892 555.024 0 553.71 0H10C4.47717 0 0 4.47715 0 10V208.606C0 214.129 4.47715 218.606 10 218.606H32.6125C38.1353 218.606 42.6125 223.083 42.6125 228.606V241.685C42.6125 247.208 47.0896 251.685 52.6125 251.685H68.8271C71.4821 251.685 74.0282 250.629 75.904 248.75L79.0994 245.55C80.9752 243.671 83.5212 242.615 86.1762 242.615H139.718C141.018 242.615 142.306 242.868 143.509 243.361L318.306 314.963C319.509 315.455 320.797 315.709 322.097 315.709H369.907C370.807 315.709 371.703 315.587 372.571 315.348L451.283 293.598C457.652 291.839 463.946 296.63 463.946 303.237V313.712C463.946 319.235 468.423 323.712 473.946 323.712H499.567C501.355 323.712 503.109 323.233 504.649 322.325L538.83 302.157C540.37 301.249 542.124 300.77 543.912 300.77H583.794C585.796 300.77 587.751 301.371 589.408 302.494L695.242 374.274C696.898 375.398 698.853 375.998 700.855 375.998H723.083C724.66 375.998 726.214 376.371 727.62 377.087L820.477 424.362C821.415 424.84 822.272 425.463 823.016 426.208L852.959 456.2C854.241 457.484 855.848 458.395 857.607 458.836L895.237 468.258C899.197 469.25 902.157 472.55 902.714 476.595L909.125 523.154C909.807 528.103 914.036 531.79 919.032 531.79H942.103C944.978 531.79 947.714 533.027 949.612 535.186L963.347 550.802C965.246 552.961 967.982 554.198 970.856 554.198H977.926C982.154 554.198 985.925 551.539 987.345 547.557L990.599 538.431C992.019 534.449 995.79 531.79 1000.02 531.79H1011.18C1012.42 531.79 1013.65 532.02 1014.8 532.469L1029.85 538.32C1031.01 538.77 1032.24 539 1033.48 539H1037.28C1042.59 539 1046.9 534.695 1046.9 529.385C1046.9 524.074 1051.2 519.769 1056.51 519.769H1286C1291.52 519.769 1296 515.292 1296 509.769V486.85C1296 481.327 1291.52 476.85 1286 476.85H1157.83C1153.82 476.85 1150.19 474.446 1148.62 470.747L1111.45 382.883C1109.61 378.544 1111.05 373.512 1114.91 370.804L1169.34 332.56C1172.01 330.687 1173.6 327.634 1173.6 324.377V286.587C1173.6 282.66 1171.3 279.096 1167.72 277.477L662.148 48.5737C660.191 47.6876 658.571 46.1947 657.529 44.3161L635.794 5.14781C634.031 1.97079 630.683 0 627.05 0H604.776C602.263 0 599.842 0.945907 597.995 2.64953L591.567 8.57969C588.701 11.2232 584.56 11.96 580.958 10.4673Z" transform="translate(4 4) scale(2)"/>
        <router-link class = "routerLink" to="/CondominiumOne"><circle id = "condoOne" ref = "condoOne" @mouseover="hoverIn('condoOne')" @mouseout="hoverOut('condoOne')" cx="10" cy="10" r="10" transform="translate(2025.67 990.22) scale(2)" :style="circle"/></router-link>
        <circle id = "moonraker"ref = 'moonraker' @mouseover="hoverIn('moonraker')" @mouseout="hoverOut('moonraker')" cx="10" cy="10" r="10" transform="translate(1812.63 643.707) scale(2)" :style="circle"/>
        <circle id = "esherick" ref = 'esherick' @mouseover="hoverIn('esherick')" @mouseout="hoverOut('esherick')" cx="10" cy="10" r="10" transform="translate(1839.26 859.167) scale(2)" :style="circle"/>
        <circle id = "turnbull" ref = 'turnbull' @mouseover="hoverIn('turnbull')" @mouseout="hoverOut('turnbull')" cx="10" cy="10" r="10" transform="translate(250.328 132.823) scale(2)" :style="circle"/>
      </svg> -->
      <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      	 x="0px" y="0px" viewBox="0 0 707 302.9" xml:space="preserve">
      	<path :style='mapStyle' ref="map"  d="M353.6,35.8l212.3,99.4c0.3,0.1,0.5,0,0.6-0.3
      		c0.6-1.6,3.2-6.7,10.6-1.6c0,0,0.1,0.1,0.1,0.1l4.6,5.5c0.1,0.1,0.1,0.3,0.1,0.4l-0.6,1.8c-0.1,0.2,0,0.5,0.2,0.6l31,16.1
      		c0.3,0.2,0.3,0.6,0.1,0.8c-1.6,1-4.3,3.8,5.9,7.8c0.3,0.1,0.4,0.4,0.3,0.6l-0.2,0.5c-1.2,2.7-2.7,5.2-4.3,7.6
      		c-5.4,8.2-0.9,15.6,0.1,17.1c0.1,0.2,0.1,0.4-0.1,0.6l-9.2,9.9c-0.1,0.2-0.2,0.4-0.1,0.5c0.5,0.8,1.3,3.4-6,3.4
      		c-0.1,0-0.2,0.1-0.3,0.1L585.5,218c-0.2,0.1-0.2,0.3-0.1,0.5l17.2,42.1c0,0,1.5,4.5,37.7-3.4c0.1,0,0.2,0,0.3,0
      		c2.3,0.8,37.8,13.3,62.5,12.5c0.3,0,0.6,0.3,0.5,0.6l-4,11.5c-1.1,3.2-4.5,4.8-7.7,3.8c-9.1-3.1-28.1-8.3-46.6-7.1
      		c-0.4,0-0.6-0.4-0.4-0.7c1.4-2.3,4.1-9-12.6-9.3c-11.2-0.2-13.8,3.4-13.9,6.6c-0.1,3.2-2.2,6-5.2,6.9l-9.2,2.5
      		c-2.5,0.7-5.2-0.1-7.1-1.9c-1.9-1.9-5.5-4.1-11.9-4.8c-11.9-1.3-29.3,5.5-28.5,13.7c0,0.4-0.3,0.6-0.6,0.5L523,277.4
      		c-0.3-0.1-0.6,0.1-0.6,0.4l0,20.6c0,0.3-0.2,0.5-0.5,0.5h-8.4c-0.3,0-0.5-0.2-0.5-0.5v-14c0-0.1,0-0.1,0-0.1c-1-3.4-9.9-7.5-13-5.8
      		L479.7,290c-0.1,0.1-0.3,0.1-0.4,0l-2.7-1.3c-2.3-1.1-2.9-4.3-1-6.1l9.2-9.2c0.1-0.1,0.2-0.3,0.1-0.5c-20-53.2-71.8-52.1-83.2-51.2
      		c-1.4,0.1-2.9-0.4-3.9-1.6l-0.1-0.1c-29-31.3-68.6-50.8-111.1-54.7l0,0c-0.2,0-0.3,0.1-0.4,0.2l-8.4,10.4c-1.8,2.1-4.7,2.9-7.3,2
      		l-10.7-3.5c-0.3-0.1-0.4-0.4-0.3-0.7l2.6-4.6c0,0,0,0,0-0.1c3.4-4.4,0.8-10.9-4.7-11.7c-3.3-0.5-6.7-0.5-9.2,0.4
      		c-7.1,2.7-16.6,13.7-42.2,7.3h0l-53.2-16.5c-33.6-12.1-68.7-19.5-104.4-22L4,123.5c-0.2,0-0.4-0.2-0.4-0.5v-9.7L3.2,18.1
      		c0-0.3,0.2-0.5,0.5-0.5h315.7c0.2,0,0.3-0.1,0.4-0.3c0.8-1.8,6.4-12,22-6.2C341.8,11.2,341.9,22.6,353.6,35.8z"/>
      	<router-link :style="circle" class = "routerLink" to="/CondominiumOne"><circle id = "condoOne" ref = "condoOne" @mouseover="hoverIn('condoOne')" @mouseout="hoverOut('condoOne')" cx="542.8" cy="270.6" r="5.1"/></router-link>
        <circle :style="circle" id = "moonraker"ref = 'moonraker' @mouseover="hoverIn('moonraker')" @mouseout="hoverOut('moonraker')" cx="488.5" cy="182.3" r="5.1"/>
        <circle :style="circle" id = "esherick" ref = 'esherick' @mouseover="hoverIn('esherick')" @mouseout="hoverOut('esherick')" cx="495.2" cy="237.2" r="5.1"/>
      	<circle :style="circle" id = "turnbull" ref = 'turnbull' @mouseover="hoverIn('turnbull')" @mouseout="hoverOut('turnbull')" cx="90.4" cy="52.1" r="5.1"/>
      </svg>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Buildings',
    data () {
      return {
        image: '',
        svgWidth: '1043.33px',
        svgHeight: '198.34px',
        circleHover: {
          color: '#7A726B',
          stroke: 'white',
          strokeWidth: '2'
        },
        circle: {
          fill: 'white',
          cursor: 'pointer'
        },
        mapStyle: {
          fill: 'none',
          stroke: 'white',
          strokeWidth: '1.75'
        }
      }
    },
    mounted() {


    },
    methods: {
      hoverIn(ref) {
        this.$refs.map.style.display = 'none'
        this.$refs.buildingIcon.style.display = 'inline'
        console.log(ref)
        if (ref == 'condoOne') {
          this.image = '/static/buildings/condoOne.svg'
          this.$refs.condoOne.style.fill = this.circleHover.color
          this.$refs.condoOne.style.stroke = this.circleHover.stroke
          this.$refs.condoOne.style.strokeWidth = this.circleHover.strokeWidth
          this.$refs.moonraker.style.display = 'none'
          this.$refs.esherick.style.display = 'none'
          this.$refs.turnbull.style.display = 'none'
        }
        if (ref == 'moonraker') {
          this.image = '/static/buildings/' + 'moonraker.svg'
          this.$refs.moonraker.style.fill = this.circleHover.color
          this.$refs.moonraker.style.stroke = this.circleHover.stroke
          this.$refs.moonraker.style.strokeWidth = this.circleHover.strokeWidth
          this.$refs.condoOne.style.display = 'none'
          this.$refs.esherick.style.display = 'none'
          this.$refs.turnbull.style.display = 'none'
        }
        if (ref == 'esherick') {
          this.image = '/static/buildings/' + 'esherick.svg'
          this.$refs.esherick.style.fill = this.circleHover.color
          this.$refs.esherick.style.stroke = this.circleHover.stroke
          this.$refs.esherick.style.strokeWidth = this.circleHover.strokeWidth
          this.$refs.condoOne.style.display = 'none'
          this.$refs.moonraker.style.display = 'none'
          this.$refs.turnbull.style.display = 'none'
        }
        if (ref == 'turnbull') {
          this.image = '/static/buildings/' + 'turnbull.svg'
          this.$refs.turnbull.style.fill = this.circleHover.color
          this.$refs.turnbull.style.stroke = this.circleHover.stroke
          this.$refs.turnbull.style.strokeWidth = this.circleHover.strokeWidth
          this.$refs.condoOne.style.display = 'none'
          this.$refs.moonraker.style.display = 'none'
          this.$refs.esherick.style.display = 'none'
        }
      },
      hoverOut(ref) {
        this.$refs.map.style.display = 'inline'
        this.image = ''
        this.$refs.buildingIcon.style.display = 'none'
        if (ref == 'condoOne') {
          this.$refs.condoOne.style.fill = this.circleHover.stroke
          this.$refs.condoOne.style.stroke = 'none'
          this.$refs.condoOne.style.strokeWidth = 'none'
          this.$refs.moonraker.style.display = 'inline'
          this.$refs.esherick.style.display = 'inline'
          this.$refs.turnbull.style.display = 'inline'
        }
        if (ref == 'moonraker') {
          this.$refs.moonraker.style.fill = this.circleHover.stroke
          this.$refs.moonraker.style.stroke = 'none'
          this.$refs.moonraker.style.strokeWidth = 'none'
          this.$refs.condoOne.style.display = 'inline'
          this.$refs.esherick.style.display = 'inline'
          this.$refs.turnbull.style.display = 'inline'
        }
        if (ref == 'esherick') {
          this.$refs.esherick.style.fill = this.circleHover.stroke
          this.$refs.esherick.style.stroke = 'none'
          this.$refs.esherick.style.strokeWidth = 'none'
          this.$refs.condoOne.style.display = 'inline'
          this.$refs.moonraker.style.display = 'inline'
          this.$refs.turnbull.style.display = 'inline'
        }
        if (ref == 'turnbull') {
          this.$refs.turnbull.style.fill = this.circleHover.stroke
          this.$refs.turnbull.style.stroke = 'none'
          this.$refs.turnbull.style.strokeWidth = 'none'
          this.$refs.condoOne.style.display = 'inline'
          this.$refs.moonraker.style.display = 'inline'
          this.$refs.esherick.style.display = 'inline'
        }
      }
    }
  }
</script>

<style scoped>
  #container {

  }

  .routerLink {
    position: absolute;
    font-family: Helvetica;
    font-weight: bold;
    color: white;
    font-size: 3vw;
    text-decoration: none;
    z-index: 10;
    left: 75%;
    top: 7.5%;
  }

  .routerLink:hover {
    text-decoration: underline;
  }

  #buildingMap {
    width: 75%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  #buildingIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>
