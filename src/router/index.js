import Vue from 'vue'
import Router from 'vue-router'
import Find from '../find/Find.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            name:'find',
            component:Find
        }
    ]
})