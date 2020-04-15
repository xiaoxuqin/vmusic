import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const state = {
    songUrl: "",
    musiclist:[],
    playindex:'',
    musicimg:'',
    musicname:'歌名',
    authorname:'作者'
}

const mutations = {
    getmusicid(state, id) {
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
        axios.request({
            method: 'get',
            url: 'http://www.zhuoran.fun:3000/song/detail?ids=' + id
        }).then(res => {
            console.log(res.data.songs[0])
            state.musicimg = res.data.songs[0].al.picUrl;
            state.musicname = res.data.songs[0].name;
            state.authorname = res.data.songs[0].ar[0].name;
        }).catch(error => {
            console.log(error);
        });
    },
    getmusiclist(state,index){
        state.playindex = index;
        console.log(index)
    }
}

export default new Vuex.Store({
    state,
    mutations
})
