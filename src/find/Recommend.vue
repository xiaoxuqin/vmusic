<template>
  <div id="recommend">
    个性推荐
    <p @click='click_start'>
      click me to see data at console
    </p>
  </div>
  
</template>

<script>
import {start} from '../api/api'
export default {
  name:'Recommond', 
  data() {
    return {
      assemb: []
    }
  },
  methods: {
    click_start() {
      start().then(resp => {
        console.log('start --->', resp.data.result);
      }).catch(error => {
        console.log(error);
      });
    }}
}
</script>


<style>
#recommend{
  background-color: aqua;
}
</style>
