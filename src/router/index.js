import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import Welcome from '@/views/welcome/index'
import notFound from '@/views/404/index'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/login', component: Login
    },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', component: Welcome }
      ]
    },
    { path: '*',
      component: notFound }
  ]
})
export default router
