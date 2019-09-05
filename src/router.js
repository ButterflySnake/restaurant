import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home.vue'
import Cart from './pages/cart.vue'
import Login from './pages/login.vue'
import Shoppping from './pages/shopping.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path:'/',name:'Home',component:Home},
        {path:'/cart',name:'Cart',component:Cart},
        {path:'/login',name:'Login',component:Login},
        {path:'/shopping',name:'Login',component:Shoppping},
    ]
})