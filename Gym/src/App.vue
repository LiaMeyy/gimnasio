<template>
  <!-- El q-layout + q-page-container SIEMPRE deben existir, -->
  <!-- si no, q-page (usada en las vistas) no puede renderizar y queda en blanco -->
  <q-layout view="hHh lpR fFf" class="gym-layout">

    <template v-if="isAuthenticated()">
      <q-header reveal class="app-header">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

          <q-toolbar-title class="app-title">
            <q-icon name="fitness_center" class="app-title-icon" />
            MI GYM
          </q-toolbar-title>

          <div class="q-mr-md text-caption app-username">
            {{ user?.username }}
          </div>
          <q-btn flat round icon="logout" @click="handleLogout">
            <q-tooltip>Cerrar sesión</q-tooltip>
          </q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated class="app-drawer">
        <q-list>
          <q-item-label header class="app-drawer-header">Grupos musculares</q-item-label>

          <q-item clickable v-ripple to="/pecho" exact class="app-drawer-item">
            <q-item-section avatar><q-icon name="fitness_center" /></q-item-section>
            <q-item-section>Pecho</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/brazo" exact class="app-drawer-item">
            <q-item-section avatar><q-icon name="sports_gymnastics" /></q-item-section>
            <q-item-section>Brazo</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/pierna" exact class="app-drawer-item">
            <q-item-section avatar><q-icon name="directions_run" /></q-item-section>
            <q-item-section>Pierna</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/hombro" exact class="app-drawer-item">
            <q-item-section avatar><q-icon name="accessibility_new" /></q-item-section>
            <q-item-section>Hombro</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    </template>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from './composables/useAuth'

const leftDrawerOpen = ref(false)
const router = useRouter()
const { user, isAuthenticated, logout } = useAuth()

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function handleLogout() {
  logout()
  router.push('/login')
}
</script>

<!-- Estilo global: variables compartidas por toda la app (no scoped a propósito) -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&display=swap');

:root {
  --gym-red: #e10600;
  --gym-red-dark: #7a0000;
  --gym-bg: #0a0a0c;
  --gym-surface: #161618;
  --gym-surface-2: #1e1e21;
  --gym-border: #2a2a2d;
  --gym-text-muted: #8a8a8e;
}

body {
  font-family: 'Inter', sans-serif;
}
</style>

<style scoped>
.app-header {
  background: var(--gym-surface);
  color: #f2f2f2;
  border-bottom: 2px solid var(--gym-red);
  box-shadow: 0 2px 20px rgba(225, 6, 0, 0.15);
}

.app-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
}

.app-title-icon {
  color: var(--gym-red);
  margin-right: 8px;
}

.app-username {
  color: var(--gym-text-muted);
  text-transform: capitalize;
}

.app-drawer {
  background: var(--gym-surface);
}

.app-drawer-header {
  color: var(--gym-text-muted);
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.app-drawer-item {
  color: #e6e6e6;
  border-left: 3px solid transparent;
}

.app-drawer-item :deep(.q-icon) {
  color: var(--gym-text-muted);
}

.app-drawer-item:hover {
  background: var(--gym-surface-2);
}

/* Quasar marca el link activo con esta clase */
.app-drawer-item.q-router-link--active {
  border-left-color: var(--gym-red);
  background: var(--gym-surface-2);
  color: #ffffff;
}

.app-drawer-item.q-router-link--active :deep(.q-icon) {
  color: var(--gym-red);
}
</style>