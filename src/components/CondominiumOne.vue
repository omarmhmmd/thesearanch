<template>
  <div id="buildingPage">
    <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
    <div id="backIcon">
      <router-link to="/Buildings">
        <simple-svg id="backIcon" :filepath="image" :width="svgWidth" :height="svgHeight"></simple-svg>
      </router-link>
    </div>
    <h1>Condominium One</h1>
  </div>
</template>

<script>
  export default {
    name: 'CondominiumOne',
    data () {
      return {
        image: '/static/button/back.svg',
        svgWidth: '40px',
        svgHeight: '40px'
      }
    },
    mounted() {


    },
    methods: {

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
    top: 100px;
    left: 43px;
  }

</style>
