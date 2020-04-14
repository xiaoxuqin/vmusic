import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const state = {
    songUrl: "",
    overload:false
}

const mutations = {
    clickid(state, id) {
        axios.request({
            method: 'get',
            url: 'http://www.zhuoran.fun:3000/song/url?id=' + id
        }).then(res => {
            if(res.data.data[0].url){
                console.log('url OK');
                state.songUrl = res.data.data[0].url;
            }else{
                console.log('url NO')
            }
        }).catch(error => {
            console.log(error);
        });
    }
}

export default new Vuex.Store({
    state,
    mutations
})
