<template>
    <div id="routerLinks">
      <router-link class = "routerLink" to="/">TheSeaRanch</router-link>
      <br>
      <router-link class = "routerLink" to="/Buildings">TheBuildings</router-link>
      <br>
      <router-link class = "routerLink" to="/Exhibition">TheExhibition</router-link>
    </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style scoped>
  #routerLinks {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }

  .routerLink {
    font-family: helvetica75;
    color: white;
    font-size: 3em;
    text-decoration: none;
    font-size: 40px;
  }

  .routerLink:hover {
    text-decoration: underline;
  }
</style>
