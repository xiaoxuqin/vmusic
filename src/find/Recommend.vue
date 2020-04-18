<template>
  <div id="recommend">
    <p>推荐歌单</p>
    <div>
        <div class="recommend_item">
          <div class="recommend_img">
            <p style="text-align: center;line-height: 180px;">每日推荐</p> 
          </div>
          <p class="name">每日歌曲推荐</p>
        </div>
        <div class="recommend_item" v-for="item in list">
         
          <div class="recommend_img" @click = "$store.commit('getlistid', item.id)">
            <router-link :to="{name: 'Recomitem', query:{id:item.id}}" >
              <img :src=item.picUrl alt="">
              <p class="playCount">{{item.playCount}}</p>
              <img src="../assets/play.png" alt="" class="play"> 
            </router-link>
          </div>
          <p class="name">{{item.name}}</p>
        
        </div>     
    </div>
  </div>
  
</template>

<script>
import {start} from '../api/api'
import store from '../vuex/store'   
export default {
  name:'Recommond', 
  data() {
    return {
      list: []
    }
  },
  store,
  mounted(){
    start().then(res => {
      console.log(res.data);
      this.list = res.data.result;
    }).catch(error => {
      console.log(error);
    });
  }
}
</script>


<style>
#recommend{
  margin: 10px 20px;
}
.recommend_item{
  width: 180px;
  height: 220px;
  float: left;
  margin-left: 15px;
  margin-right: 20px;
  margin-bottom: 5px;
  cursor: pointer;
}
.recommend_img{
  width: 180px;
  height: 180px;
  position: relative;
}
.recommend_img img{
  width: 180px;
  height: 180px;
}
.recommend_img .playCount{
  position: absolute;
  left: 130px;
  top: 5px;
  font-size: 12px;
  color:white;
}
.recommend_img .play{
  position: absolute;
  width: 30px;
  height: 30px;
  right: 10px;
  bottom: 5px;
  font-size: 12px;
}
.recommend_item .name{
  font-size: 12px;
  padding:0 5px;
  line-height: 15px;
}
</style>


