import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { useAuth } from '../composables/useAuth'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {
  const { isAuthenticated } = useAuth()
  const requiresAuth = to.meta.requiresAuth !== false

  if (requiresAuth && !isAuthenticated()) {
    return '/login'
  }

  if (to.path === '/login' && isAuthenticated()) {
    return '/pecho'
  }

  return true
})

export default router