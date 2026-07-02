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
    // No logueado intentando entrar a una vista protegida -> a login
    return '/login'
  }

  if (to.path === '/login' && isAuthenticated()) {
    // Ya logueado intentando volver a login -> a home
    return '/pecho'
  }

  // Permite la navegación
  return true
})

export default router