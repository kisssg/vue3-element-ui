import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/navi',
      name: 'Navi Table',
      component: ()=> import('../views/NaviTableView.vue')
    },
    {
      path: '/date',
      name: 'Date picker',
      component: ()=> import('../views/DatePickView.vue')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: ()=> import('../views/GalleryView.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ButtonsView.vue')
    },{
      path:'/about',
      name:'about',
      component:()=>import('../views/AboutView.vue')
    }
  ]
})

export default router
