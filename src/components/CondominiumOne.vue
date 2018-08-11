<template>
  <div id="buildingPage">
    <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
    <router-link to="/Buildings">
      <div id="backIcon">
        <simple-svg id="backIcon" :filepath="image"></simple-svg>
      </div>
    </router-link>
    <div id="content">
      <h1>Condominium One</h1>
      <div id="buildingIcon" ref="buildingIcon">
        <simple-svg :filepath="buildingImage"></simple-svg>
      </div>
      <p id = "buildingText" v-html="buildingTxt"> {{buildingTxt}}</p>
      <div id="imgContainer">
        <img :style = "imageStyle" ref = 'two' @mouseover = "indexUp('two')" @mouseout = "indexDown('two')" id = "two" src="static/images/condoOne/002.png" alt="">
        <img :style = "imageStyle" ref = 'one' @mouseover = "indexUp('one')" @mouseout = "indexDown('one')" id = "one" src="static/images/condoOne/001.png" alt="">
        <img :style = "imageStyle" ref = 'three' @mouseover = "indexUp('three')" @mouseout = "indexDown('three')" id = "three" src="static/images/condoOne/002.png" alt="">
      </div>
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
          this.buildingTxt = '<span style = "font-weight: bold">MLTW(Moore,Lyndon,Turnbull, and Whitaker)</span><br> Condominium One <br> 1963-67 Ink on Yellow Trace 24 x 36 in'
        }
        if (ref == 'two') {
          this.$refs.two.style.zIndex = '99'
          this.$refs.one.style.zIndex = '98'
          this.$refs.three.style.zIndex = '97'
          this.buildingTxt = '<span style = "font-weight: bold">MLTW</span><br> Condominium One <br> 1965 Ink on White Trace 24 x 36 in'
        }
        if (ref == 'three') {
          this.$refs.three.style.zIndex = '99'
          this.$refs.one.style.zIndex = '98'
          this.$refs.two.style.zIndex = '97'
          this.buildingTxt = '<span style = "font-weight: bold">MLTW(Moore,Lyndon,Turnbull, and Whitaker)</span><br> Condominium One <br> 1963-67 Ink on Yellow Trace 24 x 36 in'
        }
      },
      indexDown() {
        this.imageStyle.zIndex = '0'
        this.buildingTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    width: 27.5vw;
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
    width: 32.5%;
    line-height: 1.4vw;
    left: $left;
    top:47.5%;
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
      top: 12.5%;
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
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      width: 85%;
      line-height: 3.5vw;
      font-size: 3vw;
    }

    #imgContainer {
      z-index: 10;
      position: absolute;
      background-color: none;
      left: 0%;
      top: 50%;
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
      top: -10vw;
    }

    #three {
      left: 7vw;
      top: 30vw;
    }

  }

  @media screen and (max-width: $medium) {

  }

  @media screen and (min-width: $large) {

  }
</style>
