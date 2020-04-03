<template>
  <div id="find">
      <ul>
        <router-link to="/find/recommend"><li>个性推荐</li></router-link>
        <router-link to="/find/songlist"><li>歌单</li></router-link>
        <router-link to="/find/radio"><li>主播电台</li></router-link>
        <router-link to="/find/rank"><li>排行榜</li></router-link>
        <router-link to="/find/singer"><li>歌手</li></router-link>
        <router-link to="/find/newmusic"><li>最新音乐</li></router-link>
      </ul>
      <div id="find_container">
        <router-view />
      </div>
  </div>
</template>

<script>

  export default {
      name:'Find'
  }
</script>

 
<style>

#find{
  padding-left: 2%;
}
#find ul{
  width: 75%;
  height: 40px;
  border-bottom: 1px #ccc solid;
  line-height: 40px;
  padding-left: 120px;
}
#find li{
  width: 90px;
  text-align: center;
}
#find a{
  float: left;
  color: black;
}
#find a:focus{
  color: rgb(198,47,47);
}
#find_container{
  width: 90%;
  height: 440px;
  border: 1px solid yellow;
}
</style>
