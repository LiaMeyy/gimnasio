<template>
  <q-page class="login-page flex flex-center">
    <div class="login-glow" aria-hidden="true"></div>

    <q-card flat class="login-card">
      <div class="login-header">
        <q-icon name="fitness_center" class="login-icon" />
        <h1 class="login-title">GYM</h1>

        <div class="barbell-divider" aria-hidden="true">
          <span class="plate"></span>
          <span class="bar"></span>
          <span class="plate"></span>
        </div>

        <p class="login-subtitle">Inicia sesión para entrenar</p>
      </div>

      <q-form @submit.prevent="handleLogin" class="login-form">
        <q-input
          v-model="username"
          label="Usuario"
          dark
          filled
          class="login-input"
          :rules="[val => !!val || 'El usuario es obligatorio']"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-input>

        <q-input
          v-model="password"
          label="Contraseña"
          dark
          filled
          class="login-input"
          :type="showPassword ? 'text' : 'password'"
          :rules="[val => !!val || 'La contraseña es obligatoria']"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
            />
          </template>
        </q-input>

        <div v-if="errorMessage" class="login-error">
          {{ errorMessage }}
        </div>

        <q-btn
          type="submit"
          label="Ingresar"
          class="login-btn full-width"
          unelevated
          no-caps
        />
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { login } = useAuth()

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')

function handleLogin() {
  if (!username.value || !password.value) {
    errorMessage.value = 'Completa usuario y contraseña'
    return
  }

  // Login simulado: no valida contra backend, solo guarda la sesión
  errorMessage.value = ''
  login(username.value)
  router.push('/pecho')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap');

.login-page {
  --bg: #0a0a0c;
  --surface: #161618;
  --surface-2: #1e1e21;
  --red: #e10600;
  --red-dark: #7a0000;
  --text: #f2f2f2;
  --text-muted: #8a8a8e;
  --border: #2a2a2d;

  position: relative;
  min-height: 100vh;
  background: var(--bg);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

/* Textura sutil tipo piso de gimnasio */
.login-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.015) 0px, rgba(255, 255, 255, 0.015) 1px, transparent 1px, transparent 14px);
  pointer-events: none;
}

/* Resplandor rojo detrás de la tarjeta, el elemento con más "riesgo" del diseño */
.login-glow {
  position: absolute;
  width: 640px;
  height: 640px;
  background: radial-gradient(circle, rgba(225, 6, 0, 0.35) 0%, rgba(225, 6, 0, 0.08) 45%, transparent 70%);
  filter: blur(10px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  pointer-events: none;
}

.login-card {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 400px;
  margin: 24px;
  padding: 40px 32px 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-top: 3px solid var(--red);
  border-radius: 4px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(225, 6, 0, 0.08);
}

.login-header {
  text-align: center;
  margin-bottom: 28px;
}

.login-icon {
  font-size: 32px;
  color: var(--red);
}

.login-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 42px;
  letter-spacing: 4px;
  color: var(--text);
  margin: 4px 0 12px;
  line-height: 1;
}

.barbell-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: 0 auto 14px;
  width: 140px;
}

.barbell-divider .bar {
  flex: 1;
  height: 3px;
  background: var(--red);
  border-radius: 2px;
}

.barbell-divider .plate {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--red);
  box-shadow: 0 0 8px rgba(225, 6, 0, 0.7);
  flex-shrink: 0;
}

.login-subtitle {
  color: var(--text-muted);
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.login-error {
  color: var(--red);
  font-size: 13px;
  text-align: center;
}

.login-btn {
  margin-top: 4px;
  padding: 12px 0;
  background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.login-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(225, 6, 0, 0.35);
}

/* --- Overrides de estilos internos de Quasar para los inputs --- */
.login-input :deep(.q-field__control) {
  background: var(--surface-2);
  border-radius: 4px;
}

.login-input :deep(.q-field__label) {
  color: var(--text-muted);
}

.login-input :deep(.q-field__native),
.login-input :deep(.q-field__prefix),
.login-input :deep(.q-field__suffix),
.login-input :deep(input) {
  color: var(--text) !important;
}

.login-input :deep(.q-icon) {
  color: var(--text-muted);
}

.login-input.q-field--focused :deep(.q-field__label) {
  color: var(--red);
}

.login-input :deep(.q-field__control:before) {
  border-color: var(--border);
}

.login-input.q-field--focused :deep(.q-field__control:after) {
  border-color: var(--red);
}

/* Respeta preferencia de movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  .login-btn {
    transition: none;
  }
}
</style>