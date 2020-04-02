import Vue from 'vue'
import Router from 'vue-router'
import Find from '../find/Find.vue'
import Songlist from '../find/Songlist.vue'
import Recommend from '../find/Recommend.vue'
import Radio from '../find/Radio.vue'
import Rank from '../find/Rank.vue'
import Singer from '../find/Singer.vue'
import Newmusic from '../find/Newmusic.vue'


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
                    path:'/',
                    name:'Recommend',
                    component:Recommend
                },
                {
                    path:'/songlist',
                    name:'Songlist',
                    component:Songlist
                }
            ]
        },
        // {
        //     path:'/find/songlist',
        //     name:'Songlist',
        //     component:Songlist
        // },
        {
            path:'/find/radio',
            name:'Radio',
            component:Radio
        },
        {
            path:'/find/rank',
            name:'Rank',
            component:Rank
        },
        {
            path:'/find/singer',
            name:'Singer',
            component:Singer
        },
        {
            path:'/find/newmusic',
            name:'Newmusic',
            component:Newmusic
        },
    ]
})