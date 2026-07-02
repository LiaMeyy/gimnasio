const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue'),
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
    component: () => import('../views/ArmPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/pierna',
    name: 'pierna',
    component: () => import('../views/LegPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/hombro',
    name: 'hombro',
    component: () => import('../views/ShoulderPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:catchAll(.*)*',
    name: 'not-found',
    component: () => import('../views/ErrorNotFound.vue')
  }
]

export default routes