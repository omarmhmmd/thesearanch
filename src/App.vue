<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Home></Home> -->
    <div id="fog" :style="fogUpdate"></div>
    <mq-layout mq="medium+">
      <video-bg id = "videoBG":sources="['static/videos/high.mp4']" img="static/videos/high.png"></video-bg>
    </mq-layout>
    <mq-layout mq="small">
      <video-bg id = "videoBG":sources="['static/videos/high.png']" img="static/videos/high.png"></video-bg>
    </mq-layout>
    <div id ="footer">
      <div id="location">
        {{ weather }}° | {{ geoLocation }}
        <AudioPlayer id = "soundButton" :sources="audioSources" :loop="true" :autoplay="true"></AudioPlayer>
      </div>
      <a target="_blank" href="https://www.sfmoma.org/">
        <svg id = "sfmoma" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390.37 146.63"><title>001Asset 2003</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M187.6,28.71,174.34,67.54H157.76L144.69,28.14l-3.93,39.41H124L130.1,1.23H153l14.16,41.21L181.06,1.23h22.45l5.68,66.31H191.53Z" style="fill:#fff"/><path d="M286,34.38c0,19.8-14.54,34.39-35,34.39s-35-14.59-35-34.39S230.48,0,251,0,286,14.59,286,34.38Zm-52.2,0c0,10.7,7.29,18.66,17.15,18.66s16.91-8,16.91-18.66c0-10.47-7.06-18-16.91-18S233.85,24,233.85,34.43Z" style="fill:#fff"/><path d="M293.91,107.79l-13.26,38.84H264.08L251,107.22l-3.93,39.41H230.3l6.11-66.31h22.88l14.16,41.21,13.93-41.21h22.45l5.68,66.31H297.84Z" style="fill:#fff"/><path d="M343,137.58l-3.27,9H322.12L346.6,80.31h19.32l24.44,66.31H371.8l-3.22-9Zm12.84-35.66-7.53,20.89h15Z" style="fill:#fff"/><path d="M82.6,72.42h26V88h-26v22.07h-18V43.81h47.08v16H82.6Z" style="fill:#fff"/><path d="M44.23,63.15c-1.1-.86-7.67-5-14.24-5-6.76,0-9.85,1.71-9.85,5.33s5.09,4.86,11.47,6.14l1.14.24C42.8,72,55.18,75.2,55.18,90.2c0,14.14-12.24,21.33-28,21.33-10.29,0-20.57-3.24-27.14-9.81L10.09,89.44A26.07,26.07,0,0,0,26.52,96c8.52,0,11.14-2.33,11.14-5.33,0-4.48-5.62-5.67-12.33-7.14l-1-.24c-9.86-2.1-21.43-5-21.43-19.52C2.86,50,14.67,42.39,30,42.39c8.76,0,18.19,2,24.76,7.62Z" style="fill:#fff"/></g></g>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home'
import Video from '@/components/Video'
import Buildings from '@/components/Buildings'
import AudioPlayer from '@/components/AudioPlayer'

export default {
  name: 'App',
  components: {
    Home,
    Video,
    Buildings,
    AudioPlayer
  },
  data() {
    return {
      isMuted: false,
      title: 'The Sea Ranch',
      weather: '57',
      geoLocation: '38.72° N 123.45° W',
      fogUpdate: {
        background: ''
      },
      audioSources: [
          "static/audio/004.wav"
      ],
    }
  },
  mounted() {
    var temp = this;
    axios.get('https://api.openweathermap.org/data/2.5/weather?zip=95480,us&APPID=bd75c5929036958e10cf060edef30b48')
      .then(response => {
        temp.vis = response.data.clouds.all;
        console.log(temp.vis);
        var tempVis = temp.vis;
        temp.readTemp(tempVis);
      })

    // setInterval(function(){
    //   axios.get('https://api.wunderground.com/api/89c63e6a34bf4afb/geolookup/conditions/q/zmw:95497.1.99999.json')
    //     .then(response => {
    //       temp.vis = response.data.current_observation.visibility_mi;
    //       temp.weather = response.data.current_observation.temp_f;
    //       console.log("weather " + temp.weather);
    //       var tempOpacity = temp.vis;
    //       temp.readTemp(tempOpacity);
    //     })
    //  }, 900000);
  },
  methods: {
    readTemp(tempVis) {
      var fog = (100 - tempVis) / 100;
      this.fogUpdate.background = 'rgba(122, 115, 107,' + fog + ')';
      console.log("temp from function should update bg " + fog);
    },
  }
}
</script>

<style scoped>

#videoBG {
  z-index: -1;
}

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
  width: 8.5%;
  left: 3.5%;
  top: 90%;
  z-index: 100;
}

#location {
  font-family: Helvetica;
  display: block;
  font-weight: bold;
  color: white;
  font-size: 1.325vw;
  position: absolute;
  display: inline;
  left: 75%;
  top: 92.5%;
  z-index: 10;
}

</style>

/******** MEDIA QUERIES ********/
<!-- MEDIA QUERY -->
<style lang = 'scss' scoped>

  $small: 576px;
  $medium: 768px;
  $large: 992px;
  $largeplus: 1024px;

  @media screen and (max-width: $small) {

    #sfmoma {
      width: 17.5%;
      top: 92.5%;
    }

    #location {
      font-size: 3.75vw;
      left: 50%;
      top: 93.5%;
    }
  }

  @media screen and (max-width: $medium) {

  }

  @media screen and (min-width: $large) {

  }
</style>

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

</style>
