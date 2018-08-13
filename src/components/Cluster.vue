<template>
  <div id="buildingPage">
    <mq-layout mq="medium+">
      <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
    </mq-layout>
    <mq-layout mq="small">
      <router-link class = "routerLink" to="/">Cluster Houses</router-link>
    </mq-layout>
    <router-link to="/Buildings">
      <div id="backIcon">
        <simple-svg id="backIcon" :filepath="image"></simple-svg>
      </div>
    </router-link>
    <div id="content">
      <h1>Cluster Houses</h1>
      <div id="buildingIcon" ref="buildingIcon">
        <simple-svg :filepath="buildingImage"></simple-svg>
      </div>
      <p id = "buildingText" v-html="buildingTxt"> {{buildingTxt}}</p>
      <div id="imgContainer">
        <img :style = "imageStyle" ref = 'three' @mouseover = "indexUp('three')" @mouseout = "indexDown('three')" id = "three" src="static/images/turnbull/003.jpg" alt="">
        <img :style = "imageStyle" ref = 'one' @mouseover = "indexUp('one')" @mouseout = "indexDown('one')" id = "one" src="static/images/turnbull/002.jpg" alt="">
        <img :style = "imageStyle" ref = 'two' @mouseover = "indexUp('two')" @mouseout = "indexDown('two')" id = "two" src="static/images/turnbull/001.jpg" alt="">
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
        buildingImage: 'static/buildings/turnbull.svg',
        buildingTxt: 'The Cluster Houses were developed by Oceanic Properties as a second round of buildings after the Condominium One and the Hedgerow Houses that shared a common purpose. The detatched units, built in two places across the highway from the Knipp-Stengel barn, are closely related to each other, but do not have the common walls and intermingled ownership of a condominium. One group along White Fir Wood surrounds a meadowed bowl leading gently down toward the barn, the other, clustered around Madrone Meadow, rides high on a forward-projecting plateau along a rising ridge of the hills.',
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
          this.buildingTxt = '<span style = "font-weight: bold">Turnbull and Associates</span><br> Unit A Expansion with catalog of options <br> 1972 Ink on Paper 24 x 36 in.'
        }
        if (ref == 'two') {
          this.$refs.two.style.zIndex = '99'
          this.$refs.one.style.zIndex = '98'
          this.$refs.three.style.zIndex = '97'
          this.buildingTxt = '<span style = "font-weight: bold">MLTW (Moore, Lyndon, Turnbull, andWhitaker)</span><br> Sea Ranch Site Plan: Cluster B <br> ca. 1963 Ink on Paper 28 5/8 in. x 36 in.'
        }
        if (ref == 'three') {
          this.$refs.three.style.zIndex = '99'
          this.$refs.one.style.zIndex = '98'
          this.$refs.two.style.zIndex = '97'
          this.buildingTxt = '<span style = "font-weight: bold">Obie Bowman</span><br> Walk-in Cabins, 1972 <br> Photographed by Iwan Baan, 2015'
        }
      },
      indexDown() {
        this.imageStyle.zIndex = '0'
        this.buildingTxt = 'The Cluster Houses were developed by Oceanic Properties as a second round of buildings after the Condominium One and the Hedgerow Houses that shared a common purpose. The deatched units, built in two places across the highway from the Knipp-Stengel barn, are closely related to each other, but do not have the common walls and intermingled ownership of a condominium. One group along White Fir Wood surrounds a meadowed bowl leading gently down toward the barn, the other, clustered around Madrone Meadow, rides high on a forward-projecting plateau along a rising ridge of the hills.'
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
    left: 33.5%;
    top: 40%;
  }

  img {
    position: absolute;
    width: 42.5vw;
  }

  #one {
    left: 21.5vw;
    width: 40vw;
  }

  #two {
    left: 15vw;
    top: -5vw;
    width: 40vw;
  }

  #three {
    top: -3vw;
    left: 10vw;
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
      left: 34%;
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
      display: none;
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
      top: 27%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      width: 90%;
      line-height: 4.5vw;
      font-size: 3.25vw;
    }

    #imgContainer {
      z-index: 10;
      position: absolute;
      background-color: none;
      left: 0%;
      top: 53%;
    }

    img {
      position: absolute;
      width: 10vw;
    }

    #one {
      left: 25vw;
      width: 70vw;
    }

    #two {
      left: 15vw;
      top: -10vw;
      width: 70vw;
    }

    #three {
      left: 12vw;
      top: 15vw;
      width: 70vw;
    }

  }

  @media screen and (max-width: $medium) {

  }

  @media screen and (min-width: $large) {

  }
</style>
