<template>
  <div id="buttonSound" @click="toggle()">
    
    <!-- <div>
        <simple-svg
          :filepath="soundOn"
          :width="svgWidth"
          :height="svgHeight"
          :id="svgId"
          @ready="svgReady()"
          />
      </div> -->
    <div class="svg-container">
      <svg :style="soundOnUpdate" id = "soundOn" viewBox="0 0 192 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M105.8 1.42745C100.6 -0.972551 94.6 -0.37255 90 3.42745L42.7999 42.0274L18 44.4274C7.8 45.4274 0 53.8274 0 64.2274V101.427C0 111.627 7.8 120.227 18 121.227L42.7999 123.627L90 162.227C92.8 164.427 95.9999 165.627 99.3999 165.627C101.6 165.627 103.8 165.227 105.8 164.227C111 161.827 114.2 156.627 114.2 150.827V15.4274C114.4 9.02745 111 4.02745 105.8 1.42745ZM97 145.027L50 106.427L19.7999 103.627C18.5999 103.427 17.6 102.427 17.6 101.227V64.0274C17.6 62.8274 18.5999 61.6274 19.7999 61.6274L50 58.8274L97 20.2274V145.027Z" fill="white"/>
        <path d="M146.4 37.6275C145 35.8275 142.4 35.6275 140.8 37.2275L134.2 43.2275C132.8 44.6275 132.6 46.8275 133.8 48.4276C141.2 57.8275 145.8 69.6275 145.8 82.6275C145.8 95.6275 141.4 107.427 133.8 116.827C132.6 118.427 132.8 120.628 134.2 122.028L140.8 128.028C142.4 129.428 145 129.228 146.4 127.628C156.4 115.428 162.2 99.6275 162.2 82.6275C162.4 65.6275 156.4 50.0275 146.4 37.6275Z" fill="white"/>
        <path d="M167 18.8274C165.6 17.2274 163.2 17.0275 161.6 18.4275L154.8 24.4275C153.2 25.8275 153.2 28.0274 154.4 29.6274C166.2 44.0274 173.4 62.4275 173.4 82.4275C173.4 102.427 166.2 120.828 154.4 135.228C153 136.828 153.2 139.227 154.8 140.427L161.6 146.427C163.2 147.827 165.6 147.827 167 146.027C181.6 128.827 190.2 106.427 190.2 82.2274C190.2 58.4274 181.4 36.0274 167 18.8274Z" fill="white"/>
      </svg>
      <svg :style="soundOffUpdate" id = "soundOff" viewBox="0 0 192 166" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M105.8 1.42745C100.6 -0.972551 94.6 -0.37255 90 3.42745L42.7999 42.0274L18 44.4274C7.8 45.4274 0 53.8274 0 64.2274V101.427C0 111.627 7.8 120.227 18 121.227L42.7999 123.627L90 162.227C92.8 164.427 95.9999 165.627 99.3999 165.627C101.6 165.627 103.8 165.227 105.8 164.227C111 161.827 114.2 156.627 114.2 150.827V15.4274C114.4 9.02745 111 4.02745 105.8 1.42745ZM97 145.027L50 106.427L19.7999 103.627C18.5999 103.427 17.6 102.427 17.6 101.227V64.0274C17.6 62.8274 18.5999 61.6274 19.7999 61.6274L50 58.8274L97 20.2274V145.027Z" fill="white"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'svg-button',
  data() {
    return {
      isActive: false,
      // soundOn: '/static/button/' + 'sound001.svg',
      // soundOff: '/static/button/' + 'sound000.svg',
      // svgWidth: '10%',
      // svgHeight: '10%',
      // svgId: 'mySVG',
      soundOnUpdate: {
        display: 'inline'
      },
      soundOffUpdate: {
        display:'none'
      }
    }
  },
  computed: {},
  methods: {
    toggle() {
      this.isActive = !this.isActive
      if (this.isActive) {
        this.soundOnUpdate.display = 'none'
        this.soundOffUpdate.display = 'inline'
      } else {
        this.soundOnUpdate.display = 'inline'
        this.soundOffUpdate.display = 'none'
      }
    },
    svgReady() {
      console.log("svg ready")
    }
  }
}
</script>

<style scoped>
.svg-container {
  width: 1.75vw;
  height: auto;
}

#soundOn {

}

#soundOff {

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
    }
@media screen and (max-width: $medium) {
    }
@media screen and (min-width: $large) {
    }
</style>
