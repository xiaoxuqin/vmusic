<template>
  <div id="musiclyric">
      <div class="musicimg">
          <img :src="this.$store.state.musicimg" alt="">
      </div>
      <div class="lyric">
        <h1>{{this.$store.state.musicname}}</h1>
        <h4>歌手： {{this.$store.state.authorname}}</h4>
        <ul v-for="(item,index) in lyric" :key="index">
            <li>
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
            id: this.$route.params.id,
            wholelyric:'',
            lyric:[]
        }
    },
    store,
    mounted () {
        this.init()
    },
    methods: {
        init() {
            if (this.id) {
                console.log(this.id);
                axios.request({
                    method:'get',
                    url:'http://www.zhuoran.fun:3000/lyric?id=' + this.id
                }).then(res => {
                    console.log(res);
                    console.log(res.data.lrc.lyric);
                    console.log(res.data.lrc.lyric.split('\n').length)
                    this.wholelyric = res.data.lrc.lyric.split('\n').slice(1,-1);
                    for(var i=0; i<this.wholelyric.length; i++){
                        this.lyric.push(this.wholelyric[i].split(']')[1])
                    }
                    console.log( this.lyric.length);

                }).catch(error => {
                    console.log(error);
                })

            } 
        }
    }
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
}
</style>
