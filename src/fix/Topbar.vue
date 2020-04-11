<template>
  <div id="topbar">
      <p id="logo">网易云音乐</p>
      <div id="btn">
        <button><</button>
        <button>></button>
      </div>
      <input type="text">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Topbar'
  }
</script>

<style>
#topbar {
  width: 100%;
  height: 50px;
  background-color: rgb(198,47,47);
}
#logo{
  color: white;
  line-height: 50px;
  font-size: 18px;
  padding-left: 40px;
  float: left;
}
#btn{
  float: left;
  margin-left: 50px;
}
#topbar button{
  width: 25px;
  height: 20px;
  border: 1px rgb(133, 68, 68) solid;
  background-color: rgb(198,47,47);
  color: white;
  margin-top: 14px;
  outline: none;
}
#topbar input{
  text-decoration: none;
  width: 200px;
  border-radius: 10px;
  background-color: rgb(164,40,40);
  border: none;
  height: 20px;
  padding-left: 10px;
  margin-top: 14px;
  margin-left: 20px;
  outline: none;
}
</style>
