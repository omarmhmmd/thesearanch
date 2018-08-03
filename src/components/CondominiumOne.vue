<template>
  <div id="buildingPage">
    <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
    <div id="backIcon">
      <router-link to="/Buildings">
        <simple-svg id="backIcon" :filepath="image" :width="svgWidth" :height="svgHeight"></simple-svg>
      </router-link>
    </div>
    <h1>Condominium One</h1>
    <div id="buildingIcon" ref="buildingIcon">
      <simple-svg :filepath="buildingImage" :width="buildingWidth" :height="buildingHeight"></simple-svg>
    </div>
    <p id = "buildingText" v-html="buildingTxt"> {{buildingTxt}}</p>
    <div id="imgContainer">
      <img :style = "imageStyle" ref = 'one' @mouseover = "indexUp('one')" @mouseout = "indexDown('one')" id = "one" src="static/images/condoOne/001.png" alt="">
      <img :style = "imageStyle" ref = 'two' @mouseover = "indexUp('two')" @mouseout = "indexDown('two')" id = "two" src="static/images/condoOne/002.png" alt="">
      <img :style = "imageStyle" ref = 'three' @mouseover = "indexUp('three')" @mouseout = "indexDown('three')" id = "three" src="static/images/condoOne/002.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CondominiumOne',
    data () {
      return {
        image: '/static/button/back.svg',
        buildingImage: '/static/buildings/condoOne.svg',
        buildingTxt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        svgWidth: '40px',
        svgHeight: '40px',
        buildingWidth: '350px',
        buildingHeight: '200px',
        imageStyle : {
          zIndex: ''
        },
      }
    },
    mounted() {


    },
    methods: {
      indexUp(ref) {
        if (ref == 'one') {
          this.$refs.one.style.zIndex = '99'
          this.$refs.two.style.zIndex = '0'
          this.$refs.three.style.zIndex = '0'
          this.buildingTxt = '<span style = "font-weight: bold">MLTW(Moore,Lyndon,Turnbull, and Whitaker)</span><br> Condominium One <br> 1963-67 Ink on Yellow Trace 24 x 36 in'
        }
        if (ref == 'two') {
          this.$refs.two.style.zIndex = '99'
          this.$refs.one.style.zIndex = '0'
          this.$refs.three.style.zIndex = '0'
          this.buildingTxt = '<span style = "font-weight: bold">MLTW</span><br> Condominium One <br> 1965 Ink on White Trace 24 x 36 in'
        }
        if (ref == 'three') {
          this.$refs.three.style.zIndex = '99'
          this.$refs.one.style.zIndex = '0'
          this.$refs.two.style.zIndex = '0'
        }
      },
      indexDown() {
        this.imageStyle.zIndex = '0'
        this.buildingTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }

    }
  }
</script>

<style scoped>
  #buildingPage {
    position: absolute;
    z-index: 10;
  }

  .routerLink {
    position: absolute;
    font-family: helvetica75;
    color: white;
    font-size: 3em;
    text-decoration: none;
    font-size: 40px;
    z-index: 10;
    left: 950px;
    top: 50px;
  }

  .routerLink:hover {
    text-decoration: underline;
  }

  #backIcon {
    position: absolute;
    top: 45px;
    left: 43px;
    z-index: 10;
  }

  #backIcon:hover {
    top: 35px;
    left: 35px;
  }

  h1 {
    position: relative;
    width: auto;
    color: white;
    font-size: 75px;
    top: 65px;
    left: 43px;
    z-index: 100;
  }

  #buildingIcon {
    position: relative;
    left: 43px;
  }

  #buildingText {
    position: absolute;
    color: white;
    width: 400px;
    line-height: 18px;
    left: 43px;
    top:325px;
    font-size: 15px;
  }

  #imgContainer {
    position: absolute;
    background-color: none;
    left: 400px;
    top: 275px;
  }

  img {
    position: absolute;
    width: 525px;
  }

  #one {
    left: 300px;
  }

  #two {
    left:200px;
    bottom: -200px;
  }

  #three {
    left: 100px;
    bottom: -300px;
  }

</style>
