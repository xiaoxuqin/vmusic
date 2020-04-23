<template>
  <div id="musiclyric">
      <div class="musicimg">
          <img :src="this.$store.state.musicimg" alt="">
      </div>
      <div class="lyric">
        <h1>{{this.$store.state.musicname}}</h1>
        <h4>歌手： {{this.$store.state.authorname}}</h4>
        <ul v-for="(item,index) in lyric" :key="index">
            <li :style ="lycstyle" id="lyricli">
                {{lyric[index]}}
            </li>
        </ul>
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
            lycstyle:{},
            lycstyle1:{color:"red"},
            lysicli:[]
        }
    },
    store,
    computed:{
        f1(){
          return this.$store.state.currenttime;
        },
        f2(){
            console.log(111)
            return this.$store.state.songUrl;
        }
    },
    watch:{
        f1(cur, old){
            this.$nextTick(() => {
                this.lysicli = document.querySelectorAll("#lyricli");              
            });
                for(var i=0; i<this.lyric.length; i++){                  
                    if (this.lyric[i + 1] && cur < this.time[i+1] && cur > this.time[i]) {
                        this.currentlyric = i;
                        for(var j=0; j<this.lysicli.length; j++){
                            if(j==i){
                                this.lysicli[j].style.color = 'rgb(214, 24, 24)';
                                this.lysicli[j].style.fontWeight = 'bold';
                                this.lysicli[j].style.fontSize = '18px';
                            }else{
                                this.lysicli[j].style.color = 'black';
                                this.lysicli[j].style.fontWeight = 'normal';
                                this.lysicli[j].style.fontSize = '14px';
                            }
                        }
                    }
                }
        },
        f2(){
            // this.lyric = [],
            // this.time = [],
            console.log('change url')
            this.init();
        }
        
    },
    mounted () {
        this.init();
    },
    methods: {
        init() {
            if (this.$store.state.musicid) {
                console.log(this.$store.state.musicid);
                axios.request({
                    method:'get',
                    url:'http://www.zhuoran.fun:3000/lyric?id=' + this.$store.state.musicid
                }).then(res => {
                    // console.log(res);
                    // console.log(res.data.lrc.lyric);
                    // console.log(res.data.lrc.lyric.split('\n').length)
                    this.lyric = [],
                    this.time = [],
                    this.wholelyric = res.data.lrc.lyric.split('\n').slice(0,-1);
                    for(var i=0; i<this.wholelyric.length; i++){
                        let temp = this.wholelyric[i].split(/\[(.+?)\]/);
                        this.lyric.push(temp[2]);
                        this.time.push(temp[1]);
                    }
                    // console.log( this.lyric.length);
                    // console.log( this.time.length);
                }).catch(error => {
                    console.log(error);
                })
            } 
        }
    },
}
</script>

<style>
#musiclyric{
    height: 545px;
    width: 95%;
    overflow: hidden;
    overflow-y: scroll;
}
#musiclyric .lyric{
    margin:50px 50px;
    width: 40%;
    height: 400px;
    float: right;
    overflow: hidden;
    overflow-y: scroll;
}
#musiclyric .lyric h4{
    margin-bottom: 20px;
    
}
#musiclyric .musicimg img{
    width: 30%;
    float: left;
    margin: 50px 50px;
}
#musiclyric li{
    line-height: 25px;
    color: rgb(85, 82, 82);
    display: inline-block;
    font-size: 14px;
    /* color:red */
}
</style>
