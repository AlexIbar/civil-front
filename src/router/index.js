import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reservar',
    name: 'Reservar',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReservarVuelo.vue')
  },
  {
    path: '/inicioSesion',
    name: 'InicioSesion',
    component: () => import(/* webpackChunkName: "about" */ '../views/InicioSesion.vue')
  },
  {
    path: '/crearUsuario',
    name: 'CrearUsuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearUsuario.vue')
  },
  {
    path: '/vuelosDisp',
    name: 'VuelosDisp',
    component: () => import(/* webpackChunkName: "about" */ '../views/VuelosDisp.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
