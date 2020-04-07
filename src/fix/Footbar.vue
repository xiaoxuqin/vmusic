<template>
  <div id="footbar">
    <div id= "prev">
      <img src="../assets/prev.png" alt="">
    </div>
    <div id= "now">
      <img src="../assets/fplay.png" alt="">
      <!-- <img src="../assets/stop.png" alt=""> -->
    </div>
    <div id= "next">
      <img src="../assets/next.png" alt="">
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:'Footbar'
  }
</script>

 
<style>
#footbar{
  padding-left: 8px;
}
#prev, #next{
  width: 38px;
  height: 38px;
  margin:6px 20px;
  border-radius: 50px;
  background-color: rgb(232,60,60);
  float: left;
  position: relative;
}
#now{
  width: 40px;
  height: 40px;
  margin-top: 5px;
  border-radius: 50px;
  background-color: rgb(232, 60, 60);
  float: left;
  position: relative;
}
#prev img, #next img, #now img{
  position: absolute;
  width: 23px;
  height: 23px;
  top: 8px;
  left: 8px;
}
#now img{
  width: 25px;
  height: 25px;
  position: absolute;
  top: 8px;
  left: 7px;
}
</style>
