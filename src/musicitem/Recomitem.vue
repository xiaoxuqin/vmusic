<template>
  <div id="recommitem">
    <div class="toptitle">
      <img :src=musiclist.coverImgUrl alt="">

    </div>
    <div class="musiclist">
      <ul v-for="item in musiclist.tracks">
        <li>{{item.name}}</li>
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
  width: 80%;
  height: 510px;
  border: 1px orange solid;
  padding-top: 30px;
  overflow: hidden;
  overflow-y: scroll;
}
#recommitem .toptitle img{
  width: 180px;
  height: 180px;
}
</style>
