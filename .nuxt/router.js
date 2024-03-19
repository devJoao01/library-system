import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c33da23a = () => interopDefault(import('../pages/Catalog.vue' /* webpackChunkName: "pages/Catalog" */))
const _aeff46f6 = () => interopDefault(import('../pages/Home.vue' /* webpackChunkName: "pages/Home" */))
const _cf8edd50 = () => interopDefault(import('../pages/Login-Employee.vue' /* webpackChunkName: "pages/Login-Employee" */))
const _abac61ba = () => interopDefault(import('../pages/Painel.vue' /* webpackChunkName: "pages/Painel" */))
const _0f041d49 = () => interopDefault(import('../pages/Register.vue' /* webpackChunkName: "pages/Register" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Catalog",
    component: _c33da23a,
    name: "Catalog"
  }, {
    path: "/Home",
    component: _aeff46f6,
    name: "Home"
  }, {
    path: "/Login-Employee",
    component: _cf8edd50,
    name: "Login-Employee"
  }, {
    path: "/Painel",
    component: _abac61ba,
    name: "Painel"
  }, {
    path: "/Register",
    component: _0f041d49,
    name: "Register"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
