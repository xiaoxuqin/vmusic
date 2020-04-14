<template>
  <div id="footbar">
    <audio ref="audio" 
      :src="$store.state.songUrl"
      @timeupdate = "timeupdate"
      >
    </audio>

    <div id= "prev" @click="prevsong">
      <img src="../assets/prev.png" alt="">
    </div>
    <div id= "now" >
      <img ref="stop" src="../assets/fplay.png"  alt="" @click="musicplay" :style="playstyle">
      <img ref="stop" src="../assets/stop.png" alt="" @click="musicstop" :style="stopstyle">
      
    </div>
    <div id= "next" @click="nextsong">
      <img src="../assets/next.png" alt="">
    </div>

    <span class="cur">{{curtime}}</span>
    <input ref="range" type="range" min="0" max="100" value="0" class="range" @change="rangechange" :style="backgroundsize">
    <span class="max" ref>{{maxtime}}</span>

  </div>
</template>

<script>
  import store from '../vuex/store' 
  import axios from 'axios'
  export default {
      name:'Footbar',
      data(){
        return{       
          curtime:'00:00',
          maxtime:'00:00',
          playstyle:{
            display:'block'
          },
          stopstyle:{ 
            display:'none'
          },
          backgroundsize: {
            backgroundSize:'0%'
          }
        }
      },
      store,
      computed:{
        f1(){
          return this.$store.state.songUrl;
        }
      },
      watch:{
        f1(cur, old){
          this.musicplay();
        }
      },
      methods:{
        musicplay(){
          var audio = this.$refs.audio;
          this.maxtime = this.timestr(audio.duration);//音频长度
          this.curtime = this.timestr(audio.currentTime); 
          this.$refs.range.max = Math.round(audio.duration);
          this.playstyle = {display:'none'};
          this.stopstyle = {display:'block'};
          audio.play();
        },
        musicstop(){
          var audio = this.$refs.audio;
          audio.pause();
          this.playstyle = {display:'block'}
          this.stopstyle = {display:'none'}
        },
        timeupdate(){
          var audio = this.$refs.audio;
          if(audio.duration){
            this.maxtime = this.timestr(audio.duration);
            this.curtime = this.timestr(audio.currentTime);
            this.$refs.range.value = Math.round(audio.currentTime);
            var redColor = audio.currentTime/audio.duration*100;
            this.backgroundsize = {backgroundSize:redColor+"%"};
          }else{
            console.log('no  timeupdate')
            audio.play();
          }
        },
        rangechange(){
          var audio = this.$refs.audio;
          audio.currentTime=this.$refs.range.value;
          var redColor = audio.currentTime/audio.duration*100;
          this.backgroundsize = {backgroundSize:redColor+"%"}
        },
        timestr(time){
          var m = Math.floor(time / 60);
          var s = Math.floor(time % 60);
          var _s = s < 10 ? '0' + s : s + '';
          var _m = m < 10 ? '0' + m : m + '';
          return _m + ":" + _s;          
        },
        prevsong(){

        },
        nextsong(){

        }
      },

      
  }
</script>

 
<style>
#footbar{
  padding-left: 8px;
  height: 50px;
}
#footbar  span{
  display: inline-block;
  margin: 20px 0px;
}
#footbar .range{
  -webkit-appearance: none;
  width:600px;
  display: inline-block;
  margin: 25px 5px;
  height: 3px;
  outline: none;
  background: -webkit-linear-gradient(rgb(214, 24, 24), rgb(214, 24, 24)) no-repeat rgb(182, 182, 182); 
  
}
#footbar .range::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: rgb(214, 24, 24);
}
#prev, #next{
  width: 38px;
  height: 38px;
  margin:6px 20px;
  border-radius: 50px;
  background-color: rgb(232,60,60);
  float: left;
  position: relative;
}
#now{
  width: 40px;
  height: 40px;
  margin-top: 5px;
  border-radius: 50px;
  background-color: rgb(232, 60, 60);
  float: left;
  position: relative;
}
#prev img, #next img, #now img{
  position: absolute;
  width: 23px;
  height: 23px;
  top: 8px;
  left: 8px;
}
#now img{
  width: 25px;
  height: 25px;
  position: absolute;
  top: 8px;
  left: 8px;
}
</style>
