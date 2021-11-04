import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      display: 'menus.home',
      display_title: 'Camâra do Comércio de Moçambique | CCM'
    },
    component: () => import('@/views/Home.vue')
  }
]

const router = new VueRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    }
    return { x: 0, y: 0, behavior: 'smooth' }
  },
  routes
})

router.afterEach((to) => {
  if (to.name && (to.meta.display || to.meta.display_title)) {
    document.title = to.meta.display_title ? to.meta.display_title : window.vm.$tc(to.meta.display, 2).replace(/(^|\s)\S/g, l => l.toUpperCase())
  }
})

export default router
