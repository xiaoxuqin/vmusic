<template>
  <div id="recommitem">
    <div class="toptitle">
      <img :src=musiclist.coverImgUrl alt="" id="coverImgUrl">
      <div class="description">
        <p class="listname">{{musiclist.name}}</p>
        <div class="creator">
          <img :src=musiclist.creator.avatarUrl alt="">
          <p>{{musiclist.creator.nickname}}</p>
        </div>
        <p class="descri">简介：{{musiclist.description}}</p>
      </div>
    </div>
    <div class="musiclist">
      <ul>
          <span id="musicindex"></span>
          <span id="musictitle">音乐标题</span>
          <span id="musicsinger">歌手</span>
          <span>专辑</span>
      </ul>
      <ul v-for="(item,index) in musiclist.tracks" :key="index">
        <li @dblclick = "$store.commit('getmusicid', item.id);$store.commit('getmusiclist', index);">
          <span class="indexnum">{{index+1}}</span>
          <span class="songname">{{item.name}}</span>
          <span class="singername">{{item.ar[0].name}}</span>
          <span class="zhuanji">{{item.al.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '../vuex/store'   
import axios from 'axios'
export default {
    name:'Recomitem', 
    data() {
      return {
        id: this.$route.params.id,
        musiclist:[]
      }
    },
    store,
    beforeMount:function(){
      console.log(this.id)
      axios.request({
        method: 'get',
        url: 'http://www.zhuoran.fun:3000/playlist/detail?id='+this.id
      }).then(res => {
        console.log(res);
        console.log(res.data.playlist.tracks.length);
        var listlength = res.data.playlist.tracks.length;
        var musicidlist = res.data.playlist.tracks;
        var arr = [];
        for(var i=0; i<listlength; i++){
          arr.push(musicidlist[i].id);
          this.$store.state.musiclist = arr;
        }
        // console.log(this.$store.state.musiclist);
        this.musiclist = res.data.playlist;
      }).catch(error => {
        console.log(error);
      });
    }
   
  }
</script>

<style>
#recommitem{
  width: 85%;
  height: 510px;
  padding-top: 30px;
  overflow: hidden;
  overflow-y: scroll;
}
#recommitem .toptitle #coverImgUrl{
  width: 200px;
  height:  200px;
  float: left;
  margin-right: 50px;
}
#recommitem .toptitle .description{
  height: 200px;
  padding-right: 100px;
  overflow: hidden;
}
#recommitem .toptitle .description .listname{
  font-size: 25px;
  margin-bottom: 15px;
}
#recommitem .toptitle .description .creator {
  height: 30px;
  line-height: 30px;
  margin-bottom: 23px;
  font-size: 14px;
}
#recommitem .toptitle .description .creator img{
  width: 30px;
  height: 30px;
  border-radius: 15px;
  float: left;
  margin-right: 10px;
}
#recommitem .toptitle .description .descri{
  font-size: 14px;
}
.musiclist{
  padding:10px  10px;
  background-color: rgb(250, 250, 250);
  font-size: 13px;
}
.musiclist li{
  width: 100%;
  height: 25px;
  border-bottom: 1px rgb(231, 231, 231) solid;
  line-height: 25px;
  overflow: hidden;
  cursor: default;
}
.musiclist li .indexnum, #musicindex{
  width: 30px;
  height: 20px;
  display: inline-block;
  overflow: hidden;
  text-align: center;
}
.musiclist li .songname, #musictitle{
  width:200px;
  height: 20px;
  display: inline-block;
  margin-right: 80px;
  overflow: hidden;
}
.musiclist li .singername, #musicsinger{
  width:150px;
  height: 20px;
  display: inline-block;
  margin-right: 60px;
  overflow: hidden;
}
.musiclist li .zhuanji{
  width: 230px;
  height: 20px;
  display: inline-block;
  overflow: hidden;
}
</style>