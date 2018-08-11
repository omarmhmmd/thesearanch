<template>
<div id="container">
  <mq-layout mq="medium+">
    <div id="routerLinks">
      <router-link class="routerLink" to="/">TheSeaRanch</router-link>
      <br>
      <router-link class="routerLink" to="/Buildings">TheBuildings</router-link>
      <br>
      <router-link class="routerLink" to="/Exhibition">TheExhibition</router-link>
    </div>
    <div id="exhibitionBG">
      <div id="exhibitionTXT">
        <span id="exhibitionTxtHead">
          <p>TheSeaRanch</p>
          Architecture, Environment, and Idealism
          <span id = "exhibitionTxtDate">
            December 22, 2018–April 29, 2019
          </span>
        </span>
        <img src="static/images/exhibition/map001.png" alt="">
        <div id="description">
          Distinctive architecture, uninhibited ocean views, bold supergraphics, shared open space, and meditative tranquility—these were the beginnings of the Sea Ranch, a beacon of Modernism on the Northern California coast. Designed by a small group of Bay Area
          architects and designers in the early 1960s, the development was envisioned as a progressive, inclusive community, guided by the idealistic principles of good design, economy of space, and harmony with the natural environment.
          <br>
          <br> This exhibition brings together original sketches and drawings from the project's designers, along with archival images, photographs of the Sea Ranch today, and a full-scale architectural replica. The environmentally attentive design philosophies
          explored at the Sea Ranch, along with the now-iconic graphics, resonated globally and continue to influence architecture and design today.
          <br>
          <br>
          <a target="_blank" href="https://www.sfmoma.org/exhibition/donald-judd-specific-furniture/">Get Tickets Here</a>
        </div>
      </div>
    </div>
  </mq-layout>

  <mq-layout mq="small">
    <router-link to="/">
      <div id="backIcon">
        <simple-svg id="backIcon" :filepath="image"></simple-svg>
      </div>
    </router-link>

    <div id="exhibitionTXT">
      <span id="exhibitionTxtHead">
          <p>TheSeaRanch</p>
          Architecture,<br>
          Environment,
          <br>and Idealism
          <br>
          <span id = "exhibitionTxtDate">
            December 22, 2018–April 29, 2019
          </span>
      </span>
      <br>
      <img src="static/images/exhibition/map001.png" alt="">
      <div id="description">
      Distinctive architecture, uninhibited ocean views, bold supergraphics, shared open space, and meditative tranquility—these were the beginnings of the Sea Ranch, a beacon of 1960s Modernism on the Northern California coast. Through original sketches, photographs, and models, see how Sea Ranch’s idealistic principles of good design, economy of space, and harmony with nature continue to influence architecture and design.
        <br>
        <br>
        <a target="_blank" href="https://www.sfmoma.org/exhibition/donald-judd-specific-furniture/">Get Tickets Here</a>
      </div>
    </div>

  </mq-layout>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      image: '/static/button/back.svg',
      svgWidth: '900px',
      svgHeight: '677px',
      click: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
p {
  margin-top: 0;
  margin-bottom: 0.5vw;
}

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

#exhibitionBG {
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

#exhibitionTXT {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#exhibitionTxtHead {
  font-weight: bold;
  font-size: 2vw;
}

#exhibitionTxtDate {
  font-weight: bold;
  font-size: 1.5vw;
}

#exhibitionBG img {
  width: 70%;
  margin-top: 2.75%;
}

#description {
  width: 42.5vw;
  font-size: 1.175vw;
  padding-top: 2%;
}

#exhibitionBG a {
  font-weight: bold;
  text-decoration: none;
  color: white
}

#exhibitionBG a:hover {
  text-decoration: underline;
}
</style>

!-- MEDIA QUERY -->
<style lang = 'scss' scoped>
$small: 576px;
$medium: 768px;
$large: 992px;
$largeplus: 1024px;
@media screen and (max-width: $small) {
  #backIcon {
    height: auto;
    position: absolute;
    z-index: 10;
    width: 7.25vw;
    height: auto;
    top: 5.5%;
    left: 4.5%;
  }

  #exhibitionTXT {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 10;
  }

  #exhibitionTxtHead {
    font-weight: bold;
    font-size: 5vw;
    line-height: normal;
  }

  #exhibitionTxtDate {
    font-weight: bold;
    font-size: 3.75vw;
  }

  #exhibitionTXT img {
    width: 85vw;
    margin-top: 3vw;
  }

  #description {
    width: 90vw;
    font-size: 3.5vw;
    padding-top: 2vw;
  }

  #exhibitionTXT a {
    font-weight: bold;
    text-decoration: none;
    color: white;
  }
  #exhibitionTXT a:hover {
    text-decoration: underline;
  }
}
@media screen and (max-width: $medium) {}
@media screen and (min-width: $large) {}
</style>
