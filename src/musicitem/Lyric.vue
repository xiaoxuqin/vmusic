<template>
  <div id="musiclyric">
      <div class="musicimg">
          <img :src="this.$store.state.musicimg" alt="">
      </div>
      <div class="lyric">
            <h2>{{this.$store.state.musicname}}</h2>
            <h4>歌手： {{this.$store.state.authorname}}</h4>
        <div class="lyricdetail">
            <div  ref="lrc">
                <ul v-for="(item,index) in lyric" :key="index" >
                    <li id="lyricli">
                        {{lyric[index]}}
                    </li>
                </ul>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import store from '../vuex/store'  
export default {
    name:"Lyric",
    data() {
        return {
            // id: this.$store.state.musicid,
            wholelyric:'',
            lyric:[],
            time:[],
            currentlyric:0,
            lysicli:[]
        }
    },
    store,
    computed:{
        f1(){
            // console.log('currenttime change!');
          return this.$store.state.currenttime;
        },
        f2(){
            // console.log('change url')
            return this.$store.state.songUrl;
        }
    },
    watch:{
        f1(cur, old){
            this.$nextTick(() => {
                this.lysicli = document.querySelectorAll("#lyricli");             
            });
            this. lyricchange(cur);    
        },
        f2(){
            this.init();
        }
    },
    mounted () {
        this.init();
    },
    methods: {
        animate(obj, json){
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                for (var attr in json) {
                    var now = 0;
                    now = parseInt(getComputedStyle(obj, null)[attr]);
                    var speed = (json[attr] - now) / 8;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    var cur = now + speed;
                    obj.style[attr] = cur + 'px';
                }
            }, 30)
        },
        init() {
            if (this.$store.state.musicid) {
                // console.log(this.$store.state.musicid);
                axios.request({
                    method:'get',
                    url:'http://www.zhuoran.fun:3000/lyric?id=' + this.$store.state.musicid
                }).then(res => {
                    // console.log(res);
                    console.log(res.data.lrc.lyric);
                    // console.log(res.data.lrc.lyric.split('\n').length)
                    this.lyric = [],
                    this.time = [],
                    this.wholelyric = res.data.lrc.lyric.split('\n').slice(0,-1);
                    for(var i=0; i<this.wholelyric.length; i++){
                        let temp = this.wholelyric[i].split(/\[(.+?)\]/);
                        this.lyric.push(temp[2]);
                        this.time.push(temp[1]);
                    }
                    // console.log( this.lyric);
                    // console.log( this.time.length);
                }).catch(error => {
                    console.log(error);
                })
            } 
        },
        lyricchange(cur){
            // console.log(cur);
            var lrcDiv = this.$refs.lrc  ; 
            for(var i=0; i<this.lyric.length; i++){           
                if (this.lyric[i + 1] && cur < this.time[i+1] && cur > this.time[i]) {
                    this.currentlyric = i;
                    for(var j=0; j<this.lysicli.length; j++){
                        if(j==i){
                            // console.log(this.lysicli[j])
                            this.lysicli[j].style.color = 'rgb(214, 24, 24)';
                            this.lysicli[j].style.fontWeight = 'bold';
                            this.lysicli[j].style.fontSize = '15px';
                            if(j>8){
                                this.animate(lrcDiv,{marginTop: -((i-8) * 25)});
                                // lrcDiv.style.marginTop = -((j-8) * 25) + "px"
                            }else{
                                this.animate(lrcDiv,{marginTop: 0});
                                // lrcDiv.style.marginTop = "0px"
                            }
                        }else{
                            this.lysicli[j].style.color = 'black';
                            this.lysicli[j].style.fontWeight = 'normal';
                            this.lysicli[j].style.fontSize = '12px';
                        }
                    }
                }
            }
        }
    },
}
</script>

<style>
#musiclyric{
    height: 600px;
    width: 95%;
}
#musiclyric .lyric{
    margin-top:10px;
    margin-right: 50px;
    width: 40%;
    height: 400px;
    float: right;
}
#musiclyric .lyric h4{
    margin-bottom: 20px;
    
}
#musiclyric .musicimg img{
    width: 30%;
    float: left;
    margin: 70px;
}
#musiclyric li{
    line-height: 25px;
    color: rgb(85, 82, 82);
    display: inline-block;
    font-size: 12px;
}
#musiclyric .lyricdetail{
    height: 350px;
    overflow: hidden; 
    overflow-y: auto; 
}
</style>
