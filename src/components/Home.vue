<template>
<div id="fog">
  <p>{{ title }}</p>
  <p>{{ weather }}°</p>
</div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'The Sea Ranch',
      weather: null
    }
  },
  mounted () {
    axios
      .get('https://api.wunderground.com/api/89c63e6a34bf4afb/geolookup/conditions/q/zmw:95497.1.99999.json')
      .then(response => (this.weather = response.data.current_observation.temp_f))

  }
}

</script>

<style scoped>
  #fog {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(122, 114, 107, 0.5);
  }

  p {
    font-size: 2em;
    color: white;
    text-align: center;
}
</style>
