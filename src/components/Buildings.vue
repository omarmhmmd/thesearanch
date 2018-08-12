<template>
  <div id="container">
    <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
    <div id="buildingMap">
      <div id="buildingIcon" ref="buildingIcon">
        <simple-svg :filepath="image"></simple-svg>
      </div>
      <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      	 x="0px" y="0px" viewBox="0 0 707 302.9" xml:space="preserve">
      	<path id = "svgMap":style='mapStyle' ref="map"  d="M353.6,35.8l212.3,99.4c0.3,0.1,0.5,0,0.6-0.3
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
      	<router-link :style="circle" class = "routerLink" to="/CondominiumOne"><circle id = "condoOne" ref = "condoOne" @mouseover="hoverIn('condoOne')" @mouseout="hoverOut('condoOne')" cx="542.8" cy="270.6" r="6"/></router-link>
        <router-link :style="circle" class = "routerLink" to="/Moonraker"><circle :style="circle" id = "moonraker"ref = 'moonraker' @mouseover="hoverIn('moonraker')" @mouseout="hoverOut('moonraker')" cx="488.5" cy="182.3" r="6"/></router-link>
        <router-link :style="circle" class = "routerLink" to="/Hedgerow"><circle :style="circle" id = "esherick" ref = 'esherick' @mouseover="hoverIn('esherick')" @mouseout="hoverOut('esherick')" cx="495.2" cy="237.2" r="6"/></router-link>
      	<router-link :style="circle" class = "routerLink" to="/Cluster"><circle :style="circle" id = "turnbull" ref = 'turnbull' @mouseover="hoverIn('turnbull')" @mouseout="hoverOut('turnbull')" cx="90.4" cy="52.1" r="6"/></router-link>
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
      if (this.$mq == 'small') {

        // alert('small')
      }
    },
    methods: {
      hoverIn(ref) {
        if (this.$mq == 'small') {
          this.$refs.buildingIcon.style.width = '35vw'
          this.$refs.buildingIcon.style.height = 'auto'
        }
        else {
          this.$refs.buildingIcon.style.width = '20vw'
          this.$refs.buildingIcon.style.height = 'auto'
        }
        this.$refs.map.style.display = 'none'
        this.$refs.buildingIcon.style.display = 'inline'
        console.log(ref)
        if (ref == 'condoOne') {
          this.image = 'static/buildings/condoOne.svg'
          if (this.$mq == 'small') {
            this.$refs.buildingIcon.style.width = '90vw'
            this.$refs.buildingIcon.style.height = 'auto'
          }
          else {
            this.$refs.buildingIcon.style.width = '65vw'
            this.$refs.buildingIcon.style.height = 'auto'
          }
          this.$refs.condoOne.style.fill = this.circleHover.color
          this.$refs.condoOne.style.stroke = this.circleHover.stroke
          this.$refs.condoOne.style.strokeWidth = this.circleHover.strokeWidth
          this.$refs.moonraker.style.display = 'none'
          this.$refs.esherick.style.display = 'none'
          this.$refs.turnbull.style.display = 'none'
        }
        if (ref == 'moonraker') {
          this.image = 'static/buildings/' + 'moonraker.svg'
          this.$refs.moonraker.style.fill = this.circleHover.color
          this.$refs.moonraker.style.stroke = this.circleHover.stroke
          this.$refs.moonraker.style.strokeWidth = this.circleHover.strokeWidth
          this.$refs.condoOne.style.display = 'none'
          this.$refs.esherick.style.display = 'none'
          this.$refs.turnbull.style.display = 'none'
        }
        if (ref == 'esherick') {
          this.image = 'static/buildings/' + 'esherick.svg'
          this.$refs.esherick.style.fill = this.circleHover.color
          this.$refs.esherick.style.stroke = this.circleHover.stroke
          this.$refs.esherick.style.strokeWidth = this.circleHover.strokeWidth
          this.$refs.condoOne.style.display = 'none'
          this.$refs.moonraker.style.display = 'none'
          this.$refs.turnbull.style.display = 'none'
        }
        if (ref == 'turnbull') {
          this.image = 'static/buildings/' + 'turnbull.svg'
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

<!-- MEDIA QUERY -->
<style lang = 'scss' scoped>

  $small: 576px;
  $medium: 768px;
  $large: 992px;
  $largeplus: 1024px;

  @media screen and (max-width: $small) {
    .routerLink {
      font-size: 8vw;
      left: 40%;
      top: 5%;
    }

    #buildingMap {
      width: 145%;
    }

    #buildingMap svg {
      transform: rotate(45deg);
    }

    circle {
      r: 8;
    }

    #buildingIcon {
      width: 50vw;
      height: auto;
    }

  }

  @media screen and (max-width: $medium) {

  }

  @media screen and (min-width: $large) {

  }
</style>
