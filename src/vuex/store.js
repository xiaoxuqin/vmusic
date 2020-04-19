import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const state = {
    songUrl: "",
    musiclist:[],
    playindex:'',
    listid:'',
    musicid:'',
    musicimg:'',
    musicname:'歌名',
    authorname:'作者',
    copyright:''
}

const mutations = {
    getlistid(state, id){
        state.listid = id;
        console.log(state.listid)
    },
    getmusicid(state, id) {
        state.musicid = id;
        axios.request({
            method: 'get',
            url: 'http://www.zhuoran.fun:3000/song/url?id=' + id
        }).then(res => {            
            if(res.data.data[0].url){
                // console.log(res.data);
                state.songUrl = res.data.data[0].url;
                axios.request({
                    method: 'get',
                    url: 'http://www.zhuoran.fun:3000/song/detail?ids=' + id
                }).then(res => {
                    console.log(res.data.songs[0]);
                    state.musicimg = res.data.songs[0].al.picUrl;
                    state.musicname = res.data.songs[0].name;
                    state.authorname = res.data.songs[0].ar[0].name;
                    state.copyright = '';
                }).catch(error => {
                    console.log(error);
                });
            }else{
                console.log('url NO');
                // console.log(res.data);
                state.songUrl = "";
                axios.request({
                    method: 'get',
                    url: 'http://www.zhuoran.fun:3000/song/detail?ids=' + id
                }).then(res => {
                    // console.log(res.data.songs[0]);
                    state.musicimg = res.data.songs[0].al.picUrl;
                    state.musicname = "";
                    state.authorname = "";
                    state.copyright = '暂无版权';
                }).catch(error => {
                    console.log(error);
                });
            }
        }).catch(error => {
            console.log(error);
        });
        
    },
    getmusiclist(state,index){       
        state.playindex = index;
        console.log('state.playindex:  ',state.playindex);
    }    
}

export default new Vuex.Store({
    state,
    mutations
})
