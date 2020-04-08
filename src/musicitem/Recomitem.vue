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
    <div class="musiclist" style="padding-left: 20px;">
      <ul v-for="(item,index) in musiclist.tracks" :key='index'>
        <li>
          <span>{{index}}</span>...
          <span>{{item.name}}</span> ...
          <span>{{item.al.name}}</span>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Recomitem', 
    data() {
      return {
        id: this.$route.params.id,
        musiclist:[]
      }
    },
    beforeMount:function(){
      console.log(this.id)
      axios.request({
        method: 'get',
        url: 'http://www.zhuoran.fun:3000/playlist/detail?id='+this.id
      }).then(res => {
        console.log(res);
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
  border: 1px orange solid;
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
  padding-right: 35px;
}
#recommitem .toptitle .description .listname{
  font-size: 25px;
  margin-bottom: 15px;
}
#recommitem .toptitle .description .creator {
  height: 30px;
  line-height: 30px;
  margin-bottom: 30px;
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
</style>
