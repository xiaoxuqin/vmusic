import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

const state = {
    songUrl: ""

}

const mutations = {
    clickid(state, id) {
        axios.request({
            method: 'get',
            url: 'http://www.zhuoran.fun:3000/song/url?id=' + id
        }).then(res => {
            console.log(res);
            console.log(res.data.data[0].url);
            state.songUrl = res.data.data[0].url;
        }).catch(error => {
            console.log(error);
        });
    }
}

export default new Vuex.Store({
    state,
    mutations
})

/**
 * 进度条颜色
 * 双击播放、切换，不光点击图标
 * 点击歌曲和点击图标播放
 * 加载问题
 */