<template>
  <div id="footbar">
    <audio ref="audio" 
      :src="$store.state.songUrl"
      @timeupdate = "timeupdate"
      @ended = 'musicend'
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

    <div class="musicdetail">
      <img :src="$store.state.musicimg" alt="歌曲图片">
      <p class="musicname">{{$store.state.musicname}}</p>
      <p class="authorname">{{$store.state.authorname}}</p>
    </div>
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
          playstyle:{display:'block'},
          stopstyle:{ display:'none'},
          backgroundsize: {backgroundSize:'0%'}
        }
      },
      store,
      // 监听音乐URL的变化
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
        // 播放
        musicplay(){
          var audio = this.$refs.audio;
          this.maxtime = this.timestr(audio.duration);//音频长度
          this.curtime = this.timestr(audio.currentTime); 
          this.$refs.range.max = Math.round(audio.duration);
          this.playstyle = {display:'none'};
          this.stopstyle = {display:'block'};
          audio.play();
        },
        // 暂停
        musicstop(){
          var audio = this.$refs.audio;
          audio.pause();
          this.playstyle = {display:'block'}
          this.stopstyle = {display:'none'}
        },
        // 改变其播放位置时运行
        timeupdate(){
          var audio = this.$refs.audio;
          if(audio.duration){
            this.maxtime = this.timestr(audio.duration);
            this.curtime = this.timestr(audio.currentTime);
            this.$refs.range.value = Math.round(audio.currentTime);
            var redColor = audio.currentTime/audio.duration*100;
            this.backgroundsize = {backgroundSize:redColor+"%"};
          }else{
            // console.log('no  timeupdate')
            audio.play();
          }
        },
        // 自动播放下一首
        musicend(){
          console.log('music play over');
          this.nextsong();
        },
        // 手动拖动进度条
        rangechange(){
          var audio = this.$refs.audio;
          audio.currentTime=this.$refs.range.value;
          var redColor = audio.currentTime/audio.duration*100;
          this.backgroundsize = {backgroundSize:redColor+"%"}
        },
        // 播放时间格式
        timestr(time){
          var m = Math.floor(time / 60);
          var s = Math.floor(time % 60);
          var _s = s < 10 ? '0' + s : s + '';
          var _m = m < 10 ? '0' + m : m + '';
          return _m + ":" + _s;          
        },
        // 上一首
        prevsong(){
          // console.log(this.$store.state.playindex-1);
          // console.log(this.$store.state.musiclist);
          if(this.$store.state.playindex){
            this.$store.state.playindex--;
            console.log('now' + this.$store.state.playindex);
            this.$store.commit('getmusicid', this.$store.state.musiclist[this.$store.state.playindex]);
          }
        },
        // 下一首
        nextsong(){
          // console.log(this.$store.state.playindex);
          // console.log(this.$store.state.musiclist.length);
          if(this.$store.state.playindex<this.$store.state.musiclist.length-1){  
            this.$store.state.playindex++;
            console.log('now' + this.$store.state.playindex);
            this.$store.commit('getmusicid', this.$store.state.musiclist[this.$store.state.playindex]);
          }
        }
      },

      
  }
</script>

 
<style>
#footbar{
  padding-left: 8px;
  height: 50px;
  position: relative;
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
#footbar .musicdetail{
  width: 180px;
  height: 60px;
  position: absolute;
  top: -62px;
  left: -2px;
  border: 1px rgb(214, 214, 214) solid;
}
#footbar .musicdetail img{
  width: 50px;
  height: 50px;
  background-color: coral;
  margin:5px 10px 5px 5px;
  float: left;
}
#footbar .musicdetail .musicname{
  margin-top:3px;
  line-height: 18px;
  font-size: 12px;
}
#footbar .musicdetail .authorname{
  line-height: 18px;
  font-size: 11px;
}
</style>
