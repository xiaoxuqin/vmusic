<template>
  <div id="app">
    <div id="top">
      <Topbar />
    </div>
    <div style="width: 100%;">
      <div id="side">
        <Sidebar />
      </div>
      <div id="container">
        <router-view/>
      </div>
    </div>
    <div id='foot'>
      <Footbar />
    </div>
    
    
  </div>
</template>

<script>
import Topbar from './fix/Topbar'
import Sidebar from './fix/Sidebar'
import Footbar from './fix/Footbar'

export default {
  name: 'App',
  components: {
    Topbar,
    Sidebar,
    Footbar,
  }
}
</script>

<style>
*{
  margin: 0 auto;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#top{
  width: 100%;
  height: 50px;
}
a{
  text-decoration: none;
}
li{
  list-style-type:none;
}
#side{
  width: 15%;
  height: 550px;
  margin-left: 0;
  float: left;
}
#container{
  width: 85%;
  height: 550px;
  margin-left: 16%;
}
#foot{
  width: 100%;
  height: 50px;
  border: 1px rgb(218, 218, 221) solid;
  margin-bottom: 0;
  background-color: rgb(246,246,248);
}
</style>
