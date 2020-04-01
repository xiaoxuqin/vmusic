<template>
  <div id="app">
    <div id="top">
      <Topbar />
    </div>
    <div id="side">
      <Sidebar />
    </div>
    <div id='foot'>
      <Footbar />
    </div>
    <!-- <router-view link to='find'>fff</router-view> -->
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
#side{
  width: 180px;
  height: 500px;
  margin-left: 0;
}
#foot{
  width: 100%;
  height: 50px;
  border: 1px blue solid;
  margin-bottom: 0;
}
</style>
