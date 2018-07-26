<template>
  <div id="app">
    <div id="fog" v-bind:style="fogUpdate"></div>
      <Home></Home>
      <Video></Video>
      <div id = "location">
        <p>{{ weather }}° | {{ geoLocation }}</p>
        <svg id = "soundButton" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2376 0.16375C11.6362 -0.111566 10.9422 -0.0427372 10.4101 0.393181L4.95057 4.82119L2.08202 5.09651C0.902208 5.21122 0 6.17483 0 7.36786V11.6353C0 12.8054 0.902208 13.7919 2.08202 13.9066L4.95057 14.182L10.4101 18.61C10.734 18.8624 11.1041 19 11.4974 19C11.7518 19 12.0063 18.9541 12.2376 18.8394C12.8391 18.5641 13.2092 17.9676 13.2092 17.3022V1.76976C13.2324 1.03559 12.8391 0.46201 12.2376 0.16375ZM11.2198 16.6369L5.78339 12.2089L2.29021 11.8877C2.15141 11.8647 2.03575 11.75 2.03575 11.6123V7.34493C2.03575 7.20727 2.15141 7.06961 2.29021 7.06961L5.78339 6.7484L11.2198 2.32039V16.6369Z" transform="scale(2)" fill="white"/>
          <path d="M1.54855 0.170343C1.38661 -0.0361441 1.08588 -0.05909 0.900812 0.124455L0.137408 0.812746C-0.0245265 0.973348 -0.0476629 1.22573 0.0911383 1.40927C0.947079 2.4876 1.47915 3.84123 1.47915 5.33253C1.47915 6.82383 0.970213 8.17747 0.0911383 9.25579C-0.0476629 9.43934 -0.0245265 9.69172 0.137408 9.85232L0.900812 10.5406C1.08588 10.7012 1.38661 10.6783 1.54855 10.4947C2.70523 9.0952 3.3761 7.28269 3.3761 5.33253C3.39924 3.38237 2.70523 1.59281 1.54855 0.170343Z" transform="translate(30.7705 8.29224) scale(2)" fill="white"/>
          <path d="M1.56571 0.153279C1.40378 -0.0302655 1.12617 -0.0531973 0.941106 0.107404L0.15456 0.795696C-0.0305086 0.956298 -0.0305114 1.20867 0.10829 1.39221C1.47317 3.04411 2.30598 5.15488 2.30598 7.44918C2.30598 9.74349 1.47317 11.8543 0.10829 13.5062C-0.053645 13.6897 -0.0305086 13.965 0.15456 14.1027L0.941106 14.791C1.12617 14.9516 1.40378 14.9516 1.56571 14.7451C3.25446 12.772 4.2492 10.2023 4.2492 7.42623C4.2492 4.69601 3.23133 2.12638 1.56571 0.153279Z" transform="translate(35.502 4.01306) scale(2)" fill="white"/>
        </svg>
      </div>
      <a target="_blank" href="https://www.sfmoma.org/">
        <svg  @click="soundOnOff" id = "sfmoma" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390.37 146.63"><title>001Asset 2003</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M187.6,28.71,174.34,67.54H157.76L144.69,28.14l-3.93,39.41H124L130.1,1.23H153l14.16,41.21L181.06,1.23h22.45l5.68,66.31H191.53Z" style="fill:#fff"/><path d="M286,34.38c0,19.8-14.54,34.39-35,34.39s-35-14.59-35-34.39S230.48,0,251,0,286,14.59,286,34.38Zm-52.2,0c0,10.7,7.29,18.66,17.15,18.66s16.91-8,16.91-18.66c0-10.47-7.06-18-16.91-18S233.85,24,233.85,34.43Z" style="fill:#fff"/><path d="M293.91,107.79l-13.26,38.84H264.08L251,107.22l-3.93,39.41H230.3l6.11-66.31h22.88l14.16,41.21,13.93-41.21h22.45l5.68,66.31H297.84Z" style="fill:#fff"/><path d="M343,137.58l-3.27,9H322.12L346.6,80.31h19.32l24.44,66.31H371.8l-3.22-9Zm12.84-35.66-7.53,20.89h15Z" style="fill:#fff"/><path d="M82.6,72.42h26V88h-26v22.07h-18V43.81h47.08v16H82.6Z" style="fill:#fff"/><path d="M44.23,63.15c-1.1-.86-7.67-5-14.24-5-6.76,0-9.85,1.71-9.85,5.33s5.09,4.86,11.47,6.14l1.14.24C42.8,72,55.18,75.2,55.18,90.2c0,14.14-12.24,21.33-28,21.33-10.29,0-20.57-3.24-27.14-9.81L10.09,89.44A26.07,26.07,0,0,0,26.52,96c8.52,0,11.14-2.33,11.14-5.33,0-4.48-5.62-5.67-12.33-7.14l-1-.24c-9.86-2.1-21.43-5-21.43-19.52C2.86,50,14.67,42.39,30,42.39c8.76,0,18.19,2,24.76,7.62Z" style="fill:#fff"/></g></g>
        </svg>
      </a>
    <router-view/>
  </div>
</template>

<script>
import Home from '@/components/Home'
import Video from '@/components/Video'

export default {
  name: 'App',
  components: {
    Home,
    Video
  },
  data() {
    return {
      title: 'The Sea Ranch',
      weather: null,
      geoLocation: '38.72° N, 123.45° W',
      fogUpdate: {
        background: ''
      },
    }
  },
  mounted () {
    var temp = this;
    axios.get('https://api.wunderground.com/api/89c63e6a34bf4afb/geolookup/conditions/q/zmw:95497.1.99999.json')
      .then(response => {
        temp.weather = response.data.current_observation.temp_f;
        console.log("weather " + temp.weather);
        var tempOpacity = temp.weather;
        temp.readTemp(tempOpacity);
      })

    // setInterval(function(){
    //   axios.get('https://api.wunderground.com/api/89c63e6a34bf4afb/geolookup/conditions/q/zmw:95497.1.99999.json')
    //     .then(response => {
    //       temp.weather = response.data.current_observation.temp_f;
    //       console.log("weather " + temp.weather);
    //       var tempOpacity = temp.weather;
    //       temp.readTemp(tempOpacity);
    //     })
    //  }, 500000);
  },
  methods: {
    readTemp(tempOpacity) {
      tempOpacity = tempOpacity / 100;
      this.fogUpdate.background = 'rgba(122, 115, 107,' + tempOpacity + ')';
        console.log("temp from function should update bg " + tempOpacity);
    },
    soundOnOff() {
     console.log("sound clicked");
    },
  }
}
</script>

<style>
  /* @import './assets/css/normalize.css'; */
  @import './assets/css/reset.css';

  html {
    overflow: hidden;
  }

  #app {
    font-family: Helvetica, Arial, sans-serif;
    color: #000000;
  }

  @font-face {
    font-family: helvetica75;
    src: url('./assets/fonts/helvetica75.otf');
  }

</style>

<style scoped>
  #fog {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #sfmoma {
    position: absolute;
    width: 122px;
    height: 57px;
    left: 43px;
    top: 600px;
  }

  #location {
    font-family: helvetica75;
    color: white;
    font-size: 18px;

    position: absolute;
    width: 271px;
    height: 21px;
    left: 950px;
    top: 615px;
    z-index: 10;
  }

  #soundButton {
    position: relative;
    width: 22px;
    height: 19px;
    left: 250px;
    top: -39.5px;
  }
</style>
