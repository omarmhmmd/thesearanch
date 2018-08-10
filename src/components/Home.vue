<template>
  <div id="container">
    <div id="routerLinks">
      <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
      <br>
      <router-link class = "routerLink" to="/Buildings">TheBuildings</router-link>
      <br>
      <router-link class = "routerLink" to="/Exhibition">TheExhibition</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        click: false
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang = 'scss' scoped>

  p {
    display: inline;
    cursor: pointer;
  }

  #container {
    z-index: 10;
  }

  #routerLinks {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  .routerLink {
    font-family: Helvetica;
    font-weight: bold;
    color: white;
    font-size: 3vw;
    text-decoration: none;
  }

  .routerLink:hover {
    text-decoration: underline;
  }
</style>

<!-- MEDIA QUERY -->
<style lang = 'scss' scoped>

  $small: 576px;
  $medium: 768px;
  $large: 992px;
  $largeplus: 1024px;

  @media screen and (max-width: $small) {

  }

  @media screen and (max-width: $medium) {

  }

  @media screen and (min-width: $large) {

  }
</style>
