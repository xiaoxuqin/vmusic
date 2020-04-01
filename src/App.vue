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
  height: 500px;
  margin-left: 0;
  float: left;
  /* border: 1px red solid; */
}
#container{
  width: 85%;
  height: 500px;
  /* float: right; */
  margin-left: 16%;
  /* border: 1px yellow solid; */
}
#foot{
  width: 100%;
  height: 50px;
  border: 1px blue solid;
  margin-bottom: 0;
}
</style>
