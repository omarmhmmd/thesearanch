webpackJsonp([1],{E7Ba:function(t,e){},Gkwe:function(t,e){},Hp3F:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("div",{attrs:{id:"routerLinks"}},[i("br"),t._v(" "),i("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[t._v("TheSeaRanch")]),t._v(" "),i("br"),t._v(" "),i("router-link",{staticClass:"routerLink",attrs:{to:"/Buildings"}},[t._v("TheBuildings")]),t._v(" "),i("br"),t._v(" "),i("router-link",{staticClass:"routerLink",attrs:{to:"/Exhibition"}},[t._v("TheExhibition")])],1)])},staticRenderFns:[]};var o=i("VU/8")({name:"Home",data:function(){return{click:!1}},mounted:function(){},methods:{}},s,!1,function(t){i("ezFm"),i("omoo")},"data-v-54684da1",null).exports,r={render:function(){var t=this.$createElement;return(this._self._c||t)("video-bg",{attrs:{sources:["static/videos/high.mp4"],img:"demo/assets/bg.jpg"}})},staticRenderFns:[]};var a=i("VU/8")({name:"Video",data:function(){return{video:"static/videos/001.mp4",videoStyle:{}}}},r,!1,function(t){i("e0TE")},"data-v-24ec7009",null).exports,l={name:"Buildings",data:function(){return{image:"",circleHover:{color:"#7A726B",stroke:"white",strokeWidth:"2"},circle:{fill:"white",cursor:"pointer"},mapStyle:{fill:"none",stroke:"white",strokeWidth:"1.75"}}},mounted:function(){this.$mq},methods:{hoverIn:function(t){"small"==this.$mq?(this.$refs.buildingIcon.style.width="35vw",this.$refs.buildingIcon.style.height="auto"):(this.$refs.buildingIcon.style.width="20vw",this.$refs.buildingIcon.style.height="auto"),this.$refs.map.style.display="none",this.$refs.buildingIcon.style.display="inline",console.log(t),"condoOne"==t&&(this.image="static/buildings/condoOne.svg","small"==this.$mq?(this.$refs.buildingIcon.style.width="90vw",this.$refs.buildingIcon.style.height="auto"):(this.$refs.buildingIcon.style.width="65vw",this.$refs.buildingIcon.style.height="auto"),this.$refs.condoOne.style.fill=this.circleHover.color,this.$refs.condoOne.style.stroke=this.circleHover.stroke,this.$refs.condoOne.style.strokeWidth=this.circleHover.strokeWidth,this.$refs.moonraker.style.display="none",this.$refs.esherick.style.display="none",this.$refs.turnbull.style.display="none"),"moonraker"==t&&(this.image="static/buildings/moonraker.svg",this.$refs.moonraker.style.fill=this.circleHover.color,this.$refs.moonraker.style.stroke=this.circleHover.stroke,this.$refs.moonraker.style.strokeWidth=this.circleHover.strokeWidth,this.$refs.condoOne.style.display="none",this.$refs.esherick.style.display="none",this.$refs.turnbull.style.display="none"),"esherick"==t&&(this.image="static/buildings/esherick.svg",this.$refs.esherick.style.fill=this.circleHover.color,this.$refs.esherick.style.stroke=this.circleHover.stroke,this.$refs.esherick.style.strokeWidth=this.circleHover.strokeWidth,this.$refs.condoOne.style.display="none",this.$refs.moonraker.style.display="none",this.$refs.turnbull.style.display="none"),"turnbull"==t&&(this.image="static/buildings/turnbull.svg",this.$refs.turnbull.style.fill=this.circleHover.color,this.$refs.turnbull.style.stroke=this.circleHover.stroke,this.$refs.turnbull.style.strokeWidth=this.circleHover.strokeWidth,this.$refs.condoOne.style.display="none",this.$refs.moonraker.style.display="none",this.$refs.esherick.style.display="none")},hoverOut:function(t){this.$refs.map.style.display="inline",this.image="",this.$refs.buildingIcon.style.display="none","condoOne"==t&&(this.$refs.condoOne.style.fill=this.circleHover.stroke,this.$refs.condoOne.style.stroke="none",this.$refs.condoOne.style.strokeWidth="none",this.$refs.moonraker.style.display="inline",this.$refs.esherick.style.display="inline",this.$refs.turnbull.style.display="inline"),"moonraker"==t&&(this.$refs.moonraker.style.fill=this.circleHover.stroke,this.$refs.moonraker.style.stroke="none",this.$refs.moonraker.style.strokeWidth="none",this.$refs.condoOne.style.display="inline",this.$refs.esherick.style.display="inline",this.$refs.turnbull.style.display="inline"),"esherick"==t&&(this.$refs.esherick.style.fill=this.circleHover.stroke,this.$refs.esherick.style.stroke="none",this.$refs.esherick.style.strokeWidth="none",this.$refs.condoOne.style.display="inline",this.$refs.moonraker.style.display="inline",this.$refs.turnbull.style.display="inline"),"turnbull"==t&&(this.$refs.turnbull.style.fill=this.circleHover.stroke,this.$refs.turnbull.style.stroke="none",this.$refs.turnbull.style.strokeWidth="none",this.$refs.condoOne.style.display="inline",this.$refs.moonraker.style.display="inline",this.$refs.esherick.style.display="inline")}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},[i("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[t._v("TheSeaRanch")]),t._v(" "),i("div",{attrs:{id:"buildingMap"}},[i("div",{ref:"buildingIcon",attrs:{id:"buildingIcon"}},[i("simple-svg",{attrs:{filepath:t.image}})],1),t._v(" "),i("svg",{attrs:{version:"1.2",baseProfile:"tiny",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 707 302.9","xml:space":"preserve"}},[i("path",{ref:"map",style:t.mapStyle,attrs:{id:"svgMap",d:"M353.6,35.8l212.3,99.4c0.3,0.1,0.5,0,0.6-0.3\n    \t\tc0.6-1.6,3.2-6.7,10.6-1.6c0,0,0.1,0.1,0.1,0.1l4.6,5.5c0.1,0.1,0.1,0.3,0.1,0.4l-0.6,1.8c-0.1,0.2,0,0.5,0.2,0.6l31,16.1\n    \t\tc0.3,0.2,0.3,0.6,0.1,0.8c-1.6,1-4.3,3.8,5.9,7.8c0.3,0.1,0.4,0.4,0.3,0.6l-0.2,0.5c-1.2,2.7-2.7,5.2-4.3,7.6\n    \t\tc-5.4,8.2-0.9,15.6,0.1,17.1c0.1,0.2,0.1,0.4-0.1,0.6l-9.2,9.9c-0.1,0.2-0.2,0.4-0.1,0.5c0.5,0.8,1.3,3.4-6,3.4\n    \t\tc-0.1,0-0.2,0.1-0.3,0.1L585.5,218c-0.2,0.1-0.2,0.3-0.1,0.5l17.2,42.1c0,0,1.5,4.5,37.7-3.4c0.1,0,0.2,0,0.3,0\n    \t\tc2.3,0.8,37.8,13.3,62.5,12.5c0.3,0,0.6,0.3,0.5,0.6l-4,11.5c-1.1,3.2-4.5,4.8-7.7,3.8c-9.1-3.1-28.1-8.3-46.6-7.1\n    \t\tc-0.4,0-0.6-0.4-0.4-0.7c1.4-2.3,4.1-9-12.6-9.3c-11.2-0.2-13.8,3.4-13.9,6.6c-0.1,3.2-2.2,6-5.2,6.9l-9.2,2.5\n    \t\tc-2.5,0.7-5.2-0.1-7.1-1.9c-1.9-1.9-5.5-4.1-11.9-4.8c-11.9-1.3-29.3,5.5-28.5,13.7c0,0.4-0.3,0.6-0.6,0.5L523,277.4\n    \t\tc-0.3-0.1-0.6,0.1-0.6,0.4l0,20.6c0,0.3-0.2,0.5-0.5,0.5h-8.4c-0.3,0-0.5-0.2-0.5-0.5v-14c0-0.1,0-0.1,0-0.1c-1-3.4-9.9-7.5-13-5.8\n    \t\tL479.7,290c-0.1,0.1-0.3,0.1-0.4,0l-2.7-1.3c-2.3-1.1-2.9-4.3-1-6.1l9.2-9.2c0.1-0.1,0.2-0.3,0.1-0.5c-20-53.2-71.8-52.1-83.2-51.2\n    \t\tc-1.4,0.1-2.9-0.4-3.9-1.6l-0.1-0.1c-29-31.3-68.6-50.8-111.1-54.7l0,0c-0.2,0-0.3,0.1-0.4,0.2l-8.4,10.4c-1.8,2.1-4.7,2.9-7.3,2\n    \t\tl-10.7-3.5c-0.3-0.1-0.4-0.4-0.3-0.7l2.6-4.6c0,0,0,0,0-0.1c3.4-4.4,0.8-10.9-4.7-11.7c-3.3-0.5-6.7-0.5-9.2,0.4\n    \t\tc-7.1,2.7-16.6,13.7-42.2,7.3h0l-53.2-16.5c-33.6-12.1-68.7-19.5-104.4-22L4,123.5c-0.2,0-0.4-0.2-0.4-0.5v-9.7L3.2,18.1\n    \t\tc0-0.3,0.2-0.5,0.5-0.5h315.7c0.2,0,0.3-0.1,0.4-0.3c0.8-1.8,6.4-12,22-6.2C341.8,11.2,341.9,22.6,353.6,35.8z"}}),t._v(" "),i("router-link",{staticClass:"routerLink",style:t.circle,attrs:{to:"/CondominiumOne"}},[i("circle",{ref:"condoOne",attrs:{id:"condoOne",cx:"542.8",cy:"270.6",r:"6"},on:{mouseover:function(e){t.hoverIn("condoOne")},mouseout:function(e){t.hoverOut("condoOne")}}})]),t._v(" "),i("circle",{ref:"moonraker",style:t.circle,attrs:{id:"moonraker",cx:"488.5",cy:"182.3",r:"6"},on:{mouseover:function(e){t.hoverIn("moonraker")},mouseout:function(e){t.hoverOut("moonraker")}}}),t._v(" "),i("circle",{ref:"esherick",style:t.circle,attrs:{id:"esherick",cx:"495.2",cy:"237.2",r:"6"},on:{mouseover:function(e){t.hoverIn("esherick")},mouseout:function(e){t.hoverOut("esherick")}}}),t._v(" "),i("circle",{ref:"turnbull",style:t.circle,attrs:{id:"turnbull",cx:"90.4",cy:"52.1",r:"6"},on:{mouseover:function(e){t.hoverIn("turnbull")},mouseout:function(e){t.hoverOut("turnbull")}}})],1)])],1)},staticRenderFns:[]};var d=i("VU/8")(l,c,!1,function(t){i("UyX9"),i("tnNm")},"data-v-4bbca5a6",null).exports,u=i("cZhM"),h={name:"svg-button",data:function(){return{isActive:!1,soundOnUpdate:{display:"inline"},soundOffUpdate:{display:"none"}}},computed:{},methods:{toggle:function(){this.isActive=!this.isActive,this.isActive?(this.soundOnUpdate.display="none",this.soundOffUpdate.display="inline"):(this.soundOnUpdate.display="inline",this.soundOffUpdate.display="none")},svgReady:function(){console.log("svg ready")}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"buttonSound"},on:{click:function(e){t.toggle()}}},[i("div",{staticClass:"svg-container"},[i("svg",{style:t.soundOnUpdate,attrs:{id:"soundOn",viewBox:"0 0 192 166",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M105.8 1.42745C100.6 -0.972551 94.6 -0.37255 90 3.42745L42.7999 42.0274L18 44.4274C7.8 45.4274 0 53.8274 0 64.2274V101.427C0 111.627 7.8 120.227 18 121.227L42.7999 123.627L90 162.227C92.8 164.427 95.9999 165.627 99.3999 165.627C101.6 165.627 103.8 165.227 105.8 164.227C111 161.827 114.2 156.627 114.2 150.827V15.4274C114.4 9.02745 111 4.02745 105.8 1.42745ZM97 145.027L50 106.427L19.7999 103.627C18.5999 103.427 17.6 102.427 17.6 101.227V64.0274C17.6 62.8274 18.5999 61.6274 19.7999 61.6274L50 58.8274L97 20.2274V145.027Z",fill:"white"}}),t._v(" "),i("path",{attrs:{d:"M146.4 37.6275C145 35.8275 142.4 35.6275 140.8 37.2275L134.2 43.2275C132.8 44.6275 132.6 46.8275 133.8 48.4276C141.2 57.8275 145.8 69.6275 145.8 82.6275C145.8 95.6275 141.4 107.427 133.8 116.827C132.6 118.427 132.8 120.628 134.2 122.028L140.8 128.028C142.4 129.428 145 129.228 146.4 127.628C156.4 115.428 162.2 99.6275 162.2 82.6275C162.4 65.6275 156.4 50.0275 146.4 37.6275Z",fill:"white"}}),t._v(" "),i("path",{attrs:{d:"M167 18.8274C165.6 17.2274 163.2 17.0275 161.6 18.4275L154.8 24.4275C153.2 25.8275 153.2 28.0274 154.4 29.6274C166.2 44.0274 173.4 62.4275 173.4 82.4275C173.4 102.427 166.2 120.828 154.4 135.228C153 136.828 153.2 139.227 154.8 140.427L161.6 146.427C163.2 147.827 165.6 147.827 167 146.027C181.6 128.827 190.2 106.427 190.2 82.2274C190.2 58.4274 181.4 36.0274 167 18.8274Z",fill:"white"}})]),t._v(" "),i("svg",{style:t.soundOffUpdate,attrs:{id:"soundOff",viewBox:"0 0 192 166",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M105.8 1.42745C100.6 -0.972551 94.6 -0.37255 90 3.42745L42.7999 42.0274L18 44.4274C7.8 45.4274 0 53.8274 0 64.2274V101.427C0 111.627 7.8 120.227 18 121.227L42.7999 123.627L90 162.227C92.8 164.427 95.9999 165.627 99.3999 165.627C101.6 165.627 103.8 165.227 105.8 164.227C111 161.827 114.2 156.627 114.2 150.827V15.4274C114.4 9.02745 111 4.02745 105.8 1.42745ZM97 145.027L50 106.427L19.7999 103.627C18.5999 103.427 17.6 102.427 17.6 101.227V64.0274C17.6 62.8274 18.5999 61.6274 19.7999 61.6274L50 58.8274L97 20.2274V145.027Z",fill:"white"}})])])])},staticRenderFns:[]};var v={name:"AudioPlayer",components:{SvgButton:i("VU/8")(h,f,!1,function(t){i("qFH8"),i("jm3B")},"data-v-2a98679f",null).exports},mixins:[u.a],data:function(){return{soundOn:"static/button/soundOn.svg",soundOff:"static/button/soundOff.svg"}},methods:{toggleMute:function(){this.soundOn="static/button/soundOff.svg",this.$data._howl.mute(!this.muted),this.muted=!this.muted}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"audioButton"},[e("button",{on:{click:this.toggleMute}},[e("SvgButton",{attrs:{id:"soundButton"}})],1)])},staticRenderFns:[]};var p={name:"App",components:{Home:o,Video:a,Buildings:d,AudioPlayer:i("VU/8")(v,m,!1,function(t){i("qG6e"),i("ZbUq")},"data-v-5ed38b0c",null).exports},data:function(){return{isMuted:!1,title:"The Sea Ranch",weather:null,geoLocation:"38.72° N 123.45° W",fogUpdate:{background:""},audioSources:["static/audio/004.wav"]}},mounted:function(){var t=this;axios.get("https://api.wunderground.com/api/89c63e6a34bf4afb/geolookup/conditions/q/zmw:95497.1.99999.json").then(function(e){t.weather=e.data.current_observation.temp_f,console.log("weather "+t.weather);var i=t.weather;t.readTemp(i)})},methods:{readTemp:function(t){t=t/-100+1.375,this.fogUpdate.background="rgba(122, 115, 107,"+t+")",console.log("temp from function should update bg "+t)}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view"),t._v(" "),i("div",{style:t.fogUpdate,attrs:{id:"fog"}}),t._v(" "),i("Video",{attrs:{id:"videoBG"}}),t._v(" "),i("div",{attrs:{id:"footer"}},[i("div",{attrs:{id:"location"}},[t._v("\n      "+t._s(t.weather)+"° | "+t._s(t.geoLocation)+"\n      "),i("AudioPlayer",{attrs:{id:"soundButton",sources:t.audioSources,loop:!0,autoplay:!0}})],1),t._v(" "),i("a",{attrs:{target:"_blank",href:"https://www.sfmoma.org/"}},[i("svg",{attrs:{id:"sfmoma",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390.37 146.63"}},[i("title",[t._v("001Asset 2003")]),i("g",{attrs:{id:"Layer_2","data-name":"Layer 2"}},[i("g",{attrs:{id:"Layer_1-2","data-name":"Layer 1"}},[i("path",{staticStyle:{fill:"#fff"},attrs:{d:"M187.6,28.71,174.34,67.54H157.76L144.69,28.14l-3.93,39.41H124L130.1,1.23H153l14.16,41.21L181.06,1.23h22.45l5.68,66.31H191.53Z"}}),i("path",{staticStyle:{fill:"#fff"},attrs:{d:"M286,34.38c0,19.8-14.54,34.39-35,34.39s-35-14.59-35-34.39S230.48,0,251,0,286,14.59,286,34.38Zm-52.2,0c0,10.7,7.29,18.66,17.15,18.66s16.91-8,16.91-18.66c0-10.47-7.06-18-16.91-18S233.85,24,233.85,34.43Z"}}),i("path",{staticStyle:{fill:"#fff"},attrs:{d:"M293.91,107.79l-13.26,38.84H264.08L251,107.22l-3.93,39.41H230.3l6.11-66.31h22.88l14.16,41.21,13.93-41.21h22.45l5.68,66.31H297.84Z"}}),i("path",{staticStyle:{fill:"#fff"},attrs:{d:"M343,137.58l-3.27,9H322.12L346.6,80.31h19.32l24.44,66.31H371.8l-3.22-9Zm12.84-35.66-7.53,20.89h15Z"}}),i("path",{staticStyle:{fill:"#fff"},attrs:{d:"M82.6,72.42h26V88h-26v22.07h-18V43.81h47.08v16H82.6Z"}}),i("path",{staticStyle:{fill:"#fff"},attrs:{d:"M44.23,63.15c-1.1-.86-7.67-5-14.24-5-6.76,0-9.85,1.71-9.85,5.33s5.09,4.86,11.47,6.14l1.14.24C42.8,72,55.18,75.2,55.18,90.2c0,14.14-12.24,21.33-28,21.33-10.29,0-20.57-3.24-27.14-9.81L10.09,89.44A26.07,26.07,0,0,0,26.52,96c8.52,0,11.14-2.33,11.14-5.33,0-4.48-5.62-5.67-12.33-7.14l-1-.24c-9.86-2.1-21.43-5-21.43-19.52C2.86,50,14.67,42.39,30,42.39c8.76,0,18.19,2,24.76,7.62Z"}})])])])])])],1)},staticRenderFns:[]};var y=i("VU/8")(p,g,!1,function(t){i("U6m7"),i("m0pr"),i("juis")},"data-v-498cf52e",null).exports,b=i("/ocq"),k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"buildingPage"}},[i("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[t._v("TheSeaRanch")]),t._v(" "),i("router-link",{attrs:{to:"/Buildings"}},[i("div",{attrs:{id:"backIcon"}},[i("simple-svg",{attrs:{id:"backIcon",filepath:t.image}})],1)]),t._v(" "),i("div",{attrs:{id:"content"}},[i("h1",[t._v("Condominium One")]),t._v(" "),i("div",{ref:"buildingIcon",attrs:{id:"buildingIcon"}},[i("simple-svg",{attrs:{filepath:t.buildingImage}})],1),t._v(" "),i("p",{attrs:{id:"buildingText"},domProps:{innerHTML:t._s(t.buildingTxt)}},[t._v(" "+t._s(t.buildingTxt))]),t._v(" "),i("div",{attrs:{id:"imgContainer"}},[i("img",{ref:"two",style:t.imageStyle,attrs:{id:"two",src:"static/images/condoOne/002.png",alt:""},on:{mouseover:function(e){t.indexUp("two")},mouseout:function(e){t.indexDown("two")}}}),t._v(" "),i("img",{ref:"one",style:t.imageStyle,attrs:{id:"one",src:"static/images/condoOne/001.png",alt:""},on:{mouseover:function(e){t.indexUp("one")},mouseout:function(e){t.indexDown("one")}}}),t._v(" "),i("img",{ref:"three",style:t.imageStyle,attrs:{id:"three",src:"static/images/condoOne/002.png",alt:""},on:{mouseover:function(e){t.indexUp("three")},mouseout:function(e){t.indexDown("three")}}})])])],1)},staticRenderFns:[]};var _=i("VU/8")({name:"CondominiumOne",data:function(){return{image:"static/button/back.svg",buildingImage:"static/buildings/condoOne.svg",buildingTxt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",imageStyle:{zIndex:""}}},mounted:function(){},methods:{indexUp:function(t){"one"==t&&(this.$refs.one.style.zIndex="99",this.$refs.two.style.zIndex="98",this.$refs.three.style.zIndex="97",this.buildingTxt='<span style = "font-weight: bold">MLTW(Moore,Lyndon,Turnbull, and Whitaker)</span><br> Condominium One <br> 1963-67 Ink on Yellow Trace 24 x 36 in'),"two"==t&&(this.$refs.two.style.zIndex="99",this.$refs.one.style.zIndex="98",this.$refs.three.style.zIndex="97",this.buildingTxt='<span style = "font-weight: bold">MLTW</span><br> Condominium One <br> 1965 Ink on White Trace 24 x 36 in'),"three"==t&&(this.$refs.three.style.zIndex="99",this.$refs.one.style.zIndex="98",this.$refs.two.style.zIndex="97",this.buildingTxt='<span style = "font-weight: bold">MLTW(Moore,Lyndon,Turnbull, and Whitaker)</span><br> Condominium One <br> 1963-67 Ink on Yellow Trace 24 x 36 in')},indexDown:function(){this.imageStyle.zIndex="0",this.buildingTxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}}},k,!1,function(t){i("Gkwe"),i("tJoL")},"data-v-6db1f9f9",null).exports,w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container"}},[i("mq-layout",{attrs:{mq:"medium+"}},[i("div",{attrs:{id:"routerLinks"}},[i("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[t._v("TheSeaRanch")]),t._v(" "),i("br"),t._v(" "),i("router-link",{staticClass:"routerLink",attrs:{to:"/Buildings"}},[t._v("TheBuildings")]),t._v(" "),i("br"),t._v(" "),i("router-link",{staticClass:"routerLink",attrs:{to:"/Exhibition"}},[t._v("TheExhibition")])],1),t._v(" "),i("div",{attrs:{id:"exhibitionBG"}},[i("div",{attrs:{id:"exhibitionTXT"}},[i("span",{attrs:{id:"exhibitionTxtHead"}},[i("p",[t._v("TheSeaRanch")]),t._v("\n          Architecture, Environment, and Idealism\n          "),i("span",{attrs:{id:"exhibitionTxtDate"}},[t._v("\n            December 22, 2018–April 29, 2019\n          ")])]),t._v(" "),i("img",{attrs:{src:"static/images/exhibition/map001.png",alt:""}}),t._v(" "),i("div",{attrs:{id:"description"}},[t._v("\n          Distinctive architecture, uninhibited ocean views, bold supergraphics, shared open space, and meditative tranquility—these were the beginnings of the Sea Ranch, a beacon of Modernism on the Northern California coast. Designed by a small group of Bay Area\n          architects and designers in the early 1960s, the development was envisioned as a progressive, inclusive community, guided by the idealistic principles of good design, economy of space, and harmony with the natural environment.\n          "),i("br"),t._v(" "),i("br"),t._v(" This exhibition brings together original sketches and drawings from the project's designers, along with archival images, photographs of the Sea Ranch today, and a full-scale architectural replica. The environmentally attentive design philosophies\n          explored at the Sea Ranch, along with the now-iconic graphics, resonated globally and continue to influence architecture and design today.\n          "),i("br"),t._v(" "),i("br"),t._v(" "),i("a",{attrs:{target:"_blank",href:"https://www.sfmoma.org/exhibition/donald-judd-specific-furniture/"}},[t._v("Get Tickets Here")])])])])]),t._v(" "),i("mq-layout",{attrs:{mq:"small"}},[i("router-link",{attrs:{to:"/"}},[i("div",{attrs:{id:"backIcon"}},[i("simple-svg",{attrs:{id:"backIcon",filepath:t.image}})],1)]),t._v(" "),i("div",{attrs:{id:"exhibitionTXT"}},[i("span",{attrs:{id:"exhibitionTxtHead"}},[i("p",[t._v("TheSeaRanch")]),t._v("\n          Architecture,"),i("br"),t._v("\n          Environment,\n          "),i("br"),t._v("and Idealism\n          "),i("br"),t._v(" "),i("span",{attrs:{id:"exhibitionTxtDate"}},[t._v("\n            December 22, 2018–April 29, 2019\n          ")])]),t._v(" "),i("br"),t._v(" "),i("img",{attrs:{src:"static/images/exhibition/002.png",alt:""}}),t._v(" "),i("div",{attrs:{id:"description"}},[t._v("\n      Distinctive architecture, uninhibited ocean views, bold supergraphics, shared open space, and meditative tranquility—these were the beginnings of the Sea Ranch, a beacon of 1960s Modernism on the Northern California coast. Through original sketches, photographs, and models, see how Sea Ranch’s idealistic principles of good design, economy of space, and harmony with nature continue to influence architecture and design.\n        "),i("br"),t._v(" "),i("br"),t._v(" "),i("a",{attrs:{target:"_blank",href:"https://www.sfmoma.org/exhibition/donald-judd-specific-furniture/"}},[t._v("Get Tickets Here")])])])],1)],1)},staticRenderFns:[]};var $=i("VU/8")({name:"Home",data:function(){return{image:"/static/button/back.svg",svgWidth:"900px",svgHeight:"677px",click:!1}},methods:{}},w,!1,function(t){i("U3I9"),i("pwvu")},"data-v-2272ad18",null).exports;n.a.use(b.a);var x=new b.a({routes:[{path:"/",name:"Home",component:o},{path:"/Buildings",name:"Buildings",component:d},{path:"/CondominiumOne",name:"CondominiumOne",component:_},{path:"/Exhibition",name:"Exhibition",component:$}]}),C={props:{sources:{type:Array,required:!0},img:{type:String}},data:function(){return{videoRatio:null}},mounted:function(){var t=this;this.setImageUrl(),this.setContainerHeight(),this.videoCanPlay()&&(this.$refs.video.oncanplay=function(){t.$refs.video&&(t.videoRatio=t.$refs.video.videoWidth/t.$refs.video.videoHeight,t.setVideoSize(),t.$refs.video.style.visibility="visible")}),window.addEventListener("resize",this.resize)},beforeDestroy:function(){window.removeEventListener("resize",this.resize)},methods:{resize:function(){this.setContainerHeight(),this.videoCanPlay()&&this.setVideoSize()},videoCanPlay:function(){return!!this.$refs.video.canPlayType},setImageUrl:function(){this.img&&(this.$el.style.backgroundImage="url("+this.img+")")},setContainerHeight:function(){this.$el.style.height=window.innerHeight+"px"},setVideoSize:function(){var t,e;this.$el.offsetWidth/this.$el.offsetHeight>this.videoRatio?t=this.$el.offsetWidth:e=this.$el.offsetHeight,this.$refs.video.style.width=t?t+"px":"auto",this.$refs.video.style.height=e?e+"px":"auto"},getMediaType:function(t){return"video/"+t.split(".").pop()}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"VideoBg"},[i("video",{ref:"video",attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},t._l(t.sources,function(e){return i("source",{attrs:{src:e,type:t.getMediaType(e)}})})),t._v(" "),i("div",{staticClass:"VideoBg__content"},[t._t("default")],2)])},staticRenderFns:[]};var O=i("VU/8")(C,L,!1,function(t){i("E7Ba")},null,null).exports,H=i("UE8C"),T=i.n(H),I=i("iKms"),S=(i("Hp3F"),i("A4r5")),U=i("F7tv"),M=i.n(U);n.a.component("video-bg",O),n.a.config.productionTip=!1,n.a.use(T.a),n.a.use(I.a,{breakpoints:{small:576,medium:768,large:992}}),n.a.use(S.a),n.a.use(M.a),new n.a({el:"#app",router:x,components:{App:y},template:"<App/>"})},U3I9:function(t,e){},U6m7:function(t,e){},UyX9:function(t,e){},ZbUq:function(t,e){},e0TE:function(t,e){},ezFm:function(t,e){},jm3B:function(t,e){},juis:function(t,e){},m0pr:function(t,e){},omoo:function(t,e){},pwvu:function(t,e){},qFH8:function(t,e){},qG6e:function(t,e){},tJoL:function(t,e){},tnNm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bc8999d6b6258343406a.js.map