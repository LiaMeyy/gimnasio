import { ref } from 'vue'

const STORAGE_KEY = 'gym_auth_user'

// Estado global compartido (fuera de la función para que sea el mismo en toda la app)
const storedUser = localStorage.getItem(STORAGE_KEY)
const user = ref(storedUser ? JSON.parse(storedUser) : null)

export function useAuth() {
  function login(username) {
    const userData = { username }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
    user.value = userData
  }

  function logout() {
    localStorage.removeItem(STORAGE_KEY)
    user.value = null
  }

  function isAuthenticated() {
    return !!user.value
  }

  return { user, login, logout, isAuthenticated }
}