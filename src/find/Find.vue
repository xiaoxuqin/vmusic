<template>
  <div id="find">
      <ul>
        <a href="/#/find/recommend"><li>个性推荐</li></a>
        <a href="/#/find/songlist"><li>歌单</li></a>
        <a href="/#/find/radio"><li>主播电台</li></a>
        <a href="/#/find/rank"><li>排行榜</li></a>
        <a href="/#/find/singer"><li>歌手</li></a>
        <a href="/#/find/newmusic"><li>最新音乐</li></a>
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
