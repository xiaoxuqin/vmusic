<template>
  <!-- if(list){ -->
    <div id="songlist">
      <button>全部歌单</button>
      <p>热门标签</p>
      <div>
        <div class="songlist_item">
          <div class="songlist_img">
            <p style="text-align: center;line-height: 180px;">精品歌单</p> 
          </div>
          <p class="name">精品音乐倾心推荐，给最懂音乐的你</p>
        </div>
  
        <div class="songlist_item" v-for="item in list">
          <div class="songlist_img">
            <img :src=item.coverImgUrl alt="">
            <p class="playCount">{{item.playCount}}</p>
            <p class="nickname">{{item.creator.nickname}}</p>
            <img src="../../assect/play.png" alt="" class="play">
          </div>
          <p class="name">{{item.name}}</p>
        </div>      
      </div>
    </div>
  
  <!-- } -->
  
  
</template>
  
<script>
  import {songlist} from '../api/api'
  export default {
    name:'Songlist',
    data() {
    return {
      list: []
    }
  },
  
  beforeMount:function(){
    console.log('初始化之后');
    songlist().then(res => {
      console.log('start --->', res.data.playlists);
      this.list = res.data.playlists;
    }).catch(error => {
      console.log(error);
    });
  }
}
</script>
  
<style> 
#songlist{
  margin: 10px 20px;
}
.songlist_item{
  width: 180px;
  height: 220px;
  float: left;
  margin-left: 15px;
  margin-right: 20px;
  margin-bottom: 5px;
}
.songlist_img{
  width: 180px;
  height: 180px;
  position: relative;
}
.songlist_img img{
  width: 180px;
  height: 180px;
}
.songlist_img .nickname{
  position: absolute;
  left: 10px;
  bottom: 10px;
  font-size: 12px;
  color:white;
}
.songlist_img .playCount{
  position: absolute;
  left: 130px;
  top: 5px;
  font-size: 12px;
  color:white;
}
.songlist_img .play{
  position: absolute;
  width: 30px;
  height: 30px;
  right: 10px;
  bottom: 5px;
  font-size: 12px;
  /* display: none; */
}
.songlist_item .name{
  font-size: 12px;
  padding:0 5px;
  line-height: 15px;
}


</style>
  