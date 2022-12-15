import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home/index.vue'

import blogAbout from "@/views/Blog/components/Blog-about";
import productTitle from "@/views/catalog/components/Product-title";
import AboutCard from "@/views/about/sections/About-Card";
import aboutTeam from "@/views/about/sections/About-Team";
import aboutMission from "@/views/about/sections/About-mission";



Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/partners',
    name: 'partners',
    component: () => import(`../views/partners`)
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(`../views/Contanct`)
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(`../views/about`)
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(`../views/Blog`)
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import(`../views/catalog`)
  },
  {
    path: '/products/:id',
    name: 'products',
    component: productTitle
  },

  {
    path: '/team',
    name: 'team',
    component: aboutTeam
  },
  {
    path: '/mission',
    name: 'mission',
    component: aboutMission
  },
  {
    path: '/card',
    name: 'card',
    component:AboutCard
  },
  {
    path: '/blogAbout/:id',
    name: 'blogAbout',
    component:blogAbout
  },
]

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
})

export default router
