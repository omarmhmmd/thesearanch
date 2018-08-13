<template>
  <div id="buildingPage">
    <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
    <router-link to="/Buildings">
      <div id="backIcon">
        <simple-svg id="backIcon" :filepath="image"></simple-svg>
      </div>
    </router-link>
    <div id="content">
      <h1>Hedgerow Houses</h1>
      <div id="buildingIcon" ref="buildingIcon">
        <simple-svg :filepath="buildingImage"></simple-svg>
      </div>
      <p id = "buildingText" v-html="buildingTxt"> {{buildingTxt}}</p>
      <div id="imgContainer">
        <img :style = "imageStyle" ref = 'two' @mouseover = "indexUp('two')" @mouseout = "indexDown('two')" id = "two" src="static/images/esherick/004.jpg" alt="">
        <img :style = "imageStyle" ref = 'one' @mouseover = "indexUp('one')" @mouseout = "indexDown('one')" id = "one" src="static/images/esherick/005.jpg" alt="">
        <img :style = "imageStyle" ref = 'three' @mouseover = "indexUp('three')" @mouseout = "indexDown('three')" id = "three" src="static/images/esherick/006.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CondominiumOne',
    data () {
      return {
        image: 'static/button/back.svg',
        buildingImage: 'static/buildings/esherick.svg',
        buildingTxt: 'The roofs of each of the Esherick Demonstration Houses, which are clustered at the end of a hedgerow, follow the same general slope and orientation---down into the wind, up for the sun. Seen together from the north they lie along the edge of the meadow, their surfaces rising toward the hedgerow behind. They vary slightly in a manner that relates closely to the meadowland before them, which rolls irregularly as it slopes toward the cliff. Those houses with sod roofs are sloped at a lower pitch than those roofed with shingles, and some have protruding dormers that give light and outlook to secondfloor rooms inside.',
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
          this.$refs.two.style.zIndex = '98'
          this.$refs.three.style.zIndex = '97'
          this.buildingTxt = '<span style = "font-weight: bold">Lawrence Halprin</span><br> Site Conditions Study <br> ca. 1965 Ink on Paper 8 × 10 in.'
        }
        if (ref == 'two') {
          this.$refs.two.style.zIndex = '99'
          this.$refs.one.style.zIndex = '98'
          this.$refs.three.style.zIndex = '97'
          this.buildingTxt = '<span style = "font-weight: bold">Joseph Esherick and Associates</span><br> Hedgerow Houses 1966 <br> Photographed ca. 1970'
        }
        if (ref == 'three') {
          this.$refs.three.style.zIndex = '99'
          this.$refs.one.style.zIndex = '98'
          this.$refs.two.style.zIndex = '97'
          this.buildingTxt = '<span style = "font-weight: bold">Unknown (American)</span><br> Hedgerow Houses <br> Lithograph 8 1/2 x 11 in.'
        }
      },
      indexDown() {
        this.imageStyle.zIndex = '0'
        this.buildingTxt = 'The roofs of each of the Esherick Demonstration Houses, which are clustered at the end of a hedgerow, follow the same general slope and orientation---down into the wind, up for the sun. Seen together from the north they lie along the edge of the meadow, their surfaces rising toward the hedgerow behind. They vary slightly in a manner that relates closely to the meadowland before them, which rolls irregularly as it slopes toward the cliff. Those houses with sod roofs are sloped at a lower pitch than those roofed with shingles, and some have protruding dormers that give light and outlook to secondfloor rooms inside.'
      }

    }
  }
</script>

<style lang = 'scss' scoped>

  $left: 3.5%;
  $top: 7.5%;

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

  #backIcon {
    width: 3.25vw;
    height: auto;
    position: absolute;
    top: $top;
    left: $left;
    z-index: 10;
  }

  #backIcon:hover {
    transform:translate(-25%,-25%);
  }

  #content {
    z-index: 11;
  }

  h1 {
    position: absolute;
    color: white;
    font-size: 5.75vw;
    top: 9.25%;
    left:$left;
    z-index: 100;
  }

  #buildingIcon {
    width: 9vw;
    height: auto;
    position: absolute;
    top:30%;
    left: $left;
    z-index: 10;
  }

  #buildingText {
    z-index: 10;
    position: absolute;
    color: white;
    width: 34.5%;
    line-height: 1.45vw;
    left: $left;
    top:55%;
    font-size: 1.15vw;
  }

  #imgContainer {
    z-index: 10;
    position: absolute;
    background-color: none;
    left: 30.5%;
    top: 40%;
  }

  img {
    position: absolute;
    width: 42.5vw;
  }

  #one {
    left: 21.5vw;
  }

  #two {
    left: 15vw;
    top: -5vw;
  }

  #three {
    top: -3vw;
    left: 10vw;
    width: 35vw;
  }

</style>

<!-- MEDIA QUERY -->
<style lang = 'scss' scoped>

  $small: 576px;
  $medium: 768px;
  $large: 992px;
  $largeplus: 1024px;

  @media screen and (max-width: $small) {
    $left: 4.5%;

    .routerLink {
      font-size: 8vw;
      left: 40%;
      top: 5%;
    }

    #backIcon {
      width: 7.25vw;
      height: auto;
      top: 5.5%;
      left: $left;
    }

    #backIcon:hover {
      transform:translate(0);
    }

    #content {
      z-index: 11;
    }

    h1 {
      position: absolute;
      color: white;
      font-size: 8.75vw;
      top: 10.5%;
      left:7.5%;
      z-index: 100;
    }

    #buildingIcon {
      width: 70vw;
      display: none;
      height: auto;
      position: absolute;
      top: 35%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }

    #buildingText {
      z-index: 10;
      position: absolute;
      top: 32.5%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      width: 84%;
      line-height: 3.5vw;
      font-size: 3vw;
    }

    #imgContainer {
      z-index: 10;
      position: absolute;
      background-color: none;
      left: 0%;
      top: 54%;
    }

    img {
      position: absolute;
      width: 70vw;
    }

    #one {
      left: 25vw;
    }

    #two {
      left: 15vw;
      top: -6vw;
    }

    #three {
      left: 12vw;
      top: 12vw;
      width: 55vw;
    }

  }

  @media screen and (max-width: $medium) {

  }

  @media screen and (min-width: $large) {

  }
</style>
