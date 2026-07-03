const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Loginpage.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    redirect: '/pecho'
  },
  {
    path: '/pecho',
    name: 'pecho',
    component: () => import('../views/ChestPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/brazo',
    name: 'brazo',
    component: () => import('../views/Armpage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/pierna',
    name: 'pierna',
    component: () => import('../views/Legpage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/hombro',
    name: 'hombro',
    component: () => import('../views/Shoulderpage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)*',
    name: 'not-found',
    component: () => import('../views/Errornotfound.vue')
  }
]

export default routes