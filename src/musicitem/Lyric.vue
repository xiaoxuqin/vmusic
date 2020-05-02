<template>
  <div id="musiclyric">
      <div class="musicimg">
          <img :src="this.$store.state.musicimg" alt="">
      </div>
      <div class="lyric">
        <h2>{{this.$store.state.musicname}}</h2>
        <h4>歌手： {{this.$store.state.authorname}}</h4>
        <div id="lyricdetail" ref="scrolldiv" @mousewheel="mousewheel">
            <ul v-for="(item,index) in lyric" :key="index">
                <li id="lyricli">
                    {{lyric[index]}}
                </li>
            </ul>
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
            wholelyric:'',
            lyric:[],
            time:[],
            lysicli:[],
            scroll:true,
            scrolltimeout:null,
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
        mousewheel(){
            var scrollDiv = this.$refs.scrolldiv; 
            clearInterval(scrollDiv.timer);
            clearInterval(this.scrolltimeout);
            this.scroll = false;
            var that = this; 
            this.scrolltimeout = setTimeout(function () { 
                that.scroll = true;
            },5000)
        },
        animate(obj, number){
                clearInterval(obj.timer);
                obj.timer = setInterval(function () {
                    var now = 0;
                    now =parseInt(obj.scrollTop);
                    var speed = (number - now) / 8;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    var cur = now + speed;
                    obj.scrollTop = cur;
                }, 30);
        },
        init() {
            if (this.$store.state.musicid) {
                // console.log(this.$store.state.musicid);
                axios.request({
                    method:'get',
                    url:'http://www.zhuoran.fun:3000/lyric?id=' + this.$store.state.musicid
                }).then(res => {
                    // console.log(res);
                    this.lyric = [],
                    this.time = [],
                    this.wholelyric = res.data.lrc.lyric.split('\n').slice(0,-1);
                    for(var i=0; i<this.wholelyric.length; i++){
                        let temp = this.wholelyric[i].split(/\[(.+?)\]/);
                        this.lyric.push(temp[2]);
                        this.time.push(temp[1]);
                    }
                }).catch(error => {
                    console.log(error);
                })
            } 
        },
        lyricchange(cur){
            var scrollDiv = this.$refs.scrolldiv; 
            for(var i=0; i<this.lyric.length; i++){           
                if (this.lyric[i + 1] && cur < this.time[i+1] && cur > this.time[i]) {
                    for(var j=0; j<this.lysicli.length; j++){
                        if(j==i){
                            this.lysicli[j].style.color = 'rgb(214, 24, 24)';
                            this.lysicli[j].style.fontWeight = 'bold';
                            this.lysicli[j].style.fontSize = '15px';
                            if(this.scroll){
                                if(j>8){
                                    // scrollDiv.scrollTop = 25*(i-8);
                                    this.animate(scrollDiv,25*(i-8));
                                }else{
                                    // scrollDiv.scrollTop = 0;
                                    this.animate(scrollDiv,0);
                                }
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
#musiclyric #lyricdetail{
    height: 350px;
    overflow: hidden; 
    overflow-y: auto; 
}
</style>
