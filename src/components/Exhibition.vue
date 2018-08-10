<template>
<div id="container">
  <div id="routerLinks">
    <router-link class="routerLink" to="/">TheSeaRanch</router-link>
    <br>
    <router-link class="routerLink" to="/Buildings">TheBuildings</router-link>
    <br>
    <router-link class="routerLink" to="/Exhibition">TheExhibition</router-link>
  </div>
  <div id="exhibitionTxt">
    <p>
      <span id = "exhibitionTxtHead">
        TheSeaRanch
        <br>
        Architecture, Environment, and Idealism
        <br>
        <span id = "exhibitionTxtDate">
          December 22, 2018–April 29, 2019
        </span>
      </span>
      <img src="static/images/exhibition/map001.png" alt="">
      <div id = "description">
        Distinctive architecture, uninhibited ocean views, bold supergraphics, shared open space, and meditative tranquility—these were the beginnings of the Sea Ranch, a beacon
        of Modernism on the Northern California coast. Designed by a small group of Bay Area architects and designers in the early 1960s, the development was envisioned as a progressive, inclusive community, guided by the idealistic principles of good design,
        economy of space, and harmony with the natural environment.
        <br>
        <br>
        This exhibition brings together original sketches and drawings from the project's designers, along with archival images, photographs of the Sea Ranch today, and a full-scale architectural
        replica. The environmentally attentive design philosophies explored at the Sea Ranch, along with the now-iconic graphics, resonated globally and continue to influence architecture and design today.
        <br>
        <br>
        <br>
        <br>
        <a target="_blank" href="https://www.sfmoma.org/exhibition/donald-judd-specific-furniture/">Get Tickets Here</a>
    </div>
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      image: 'static/buildings/exhibition/form.svg',
      svgWidth: '900px',
      svgHeight: '677px',
      click: false
    }
  },
  mounted() {
    // this.moveLeft();
    // this.moveLeftTxt();
  },
  methods: {
    // moveLeft() {
    //   this.$anime({
    //     targets: '#routerLinks',
    //     left: '300px',
    //     duration: 1500,
    //     easing: 'easeInOutQuad'
    //   })
    // },
    // moveLeftTxt() {
    //   this.$anime({
    //     targets: '#exhibitionTxt',
    //     left: '950px',
    //     duration: 2000,
    //     easing: 'easeInOutQuad'
    //   })
    // }
  }
}
</script>

<style scoped>
  #container {
    z-index: 10;
  }

  #routerLinks {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  .routerLink {
    font-family: Helvetica;
    font-weight: bold;
    color: white;
    text-decoration: none;
    font-size: 3vw;
  }

  .routerLink:hover {
    text-decoration: underline;
  }

  #exhibitionTxt {
    height: 100%;
    line-height: 1.5vw;
    padding-left: 4vw;
    background-color: #7A726B;
    font-family: Helvetica;
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    color: white;
    width: 47.5vw;
    z-index: 10;
  }

  #exhibitionTxtHead {
    font-weight: bold;
    font-size: 2vw;
  }

  #exhibitionTxtDate {
    font-weight: bold;
    font-size: 1.5vw;
  }

  #exhibitionTxt img {
    width: 70%;
    margin-top: 2.75%;
  }

  #exhibitionTxt p {
    padding-top: 5%;
  }

  #description {
    width: 42.5vw;
    font-size: 1.175vw;
  }

  #exhibitionTxt a {
    font-weight: bold;
    text-decoration: none;
    color:white
  }

  #exhibitionTxt a:hover {
    text-decoration: underline;
  }
</style>
