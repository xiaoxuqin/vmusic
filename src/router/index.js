import Vue from 'vue'
import Router from 'vue-router'
import Find from '../find/Find.vue'
import PrivateFM from '../privateFM/PrivateFM.vue'
import Looklive from '../looklive/Looklive.vue'
import Video from '../video/Video.vue'
import Friend from '../friend/Friend.vue'
import Songlist from '../find/Songlist.vue'
import Recommend from '../find/Recommend.vue'
import Radio from '../find/Radio.vue'
import Rank from '../find/Rank.vue'
import Singer from '../find/Singer.vue'
import Newmusic from '../find/Newmusic.vue'
import Recomitem from '../musicitem/Recomitem.vue'
import Lyric from '../musicitem/Lyric.vue'


Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            redirect:'/find'
        },
        {
            path:'/find',
            name:'Find',
            component:Find,
            children:[
                {
                    path:'',
                    name:'Recommend',
                    component:Recommend
                },
                {
                    path:'recommend',
                    name:'Recommend',
                    component:Recommend
                },
                {
                    path:'songlist',
                    name:'Songlist',
                    component:Songlist
                },
                {
                    path:'radio',
                    name:'Radio',
                    component:Radio
                },
                {
                    path:'rank',
                    name:'Rank',
                    component:Rank
                },
                {
                    path:'singer',
                    name:'Singer',
                    component:Singer
                },
                {
                    path:'newmusic',
                    name:'Newmusic',
                    component:Newmusic
                },
            ]
        },
        {
            path:'/recomitem',
            name:'Recomitem',
            component:Recomitem
        },
        {
            path:'/lyric',
            name:'Lyric',
            component:Lyric
        },








        {
            path:'/private',
            name:'PievateFM',
            component:PrivateFM
        },
        {
            path:'/looklive',
            name:'Looklive',
            component:Looklive
        },
        {
            path:'/video',
            name:'Video',
            component:Video
        },
        {
            path:'/friend',
            name:'Friend',
            component:Friend
        }
    ]
})