<template>
  <q-page class="exercise-page">
    <div class="exercise-header">
      <div class="exercise-header-top">
        <q-icon :name="icon" class="exercise-header-icon" />
        <h1 class="exercise-title">{{ title }}</h1>
      </div>
      <p class="exercise-subtitle">
        {{ exercises.length }} ejercicios · toca una pestaña para ver la técnica completa
      </p>
    </div>

    <div class="exercise-card">
      <q-tabs
        v-model="activeTab"
        class="exercise-tabs"
        active-color="white"
        indicator-color="red"
        align="left"
        narrow-indicator
        dense
      >
        <q-tab
          v-for="ejercicio in exercises"
          :key="ejercicio.nombre"
          :name="ejercicio.nombre"
          :label="ejercicio.nombre"
        />
      </q-tabs>

      <q-separator class="exercise-separator" />

      <q-tab-panels v-model="activeTab" animated class="exercise-panels">
        <q-tab-panel
          v-for="ejercicio in exercises"
          :key="ejercicio.nombre"
          :name="ejercicio.nombre"
          class="exercise-panel"
        >
          <div class="panel-grid">
            <!-- Video del ejercicio (o espacio reservado si aún no tiene) -->
            <div class="panel-media">
              <div v-if="ejercicio.video" class="video-frame">
                <iframe
                  :src="`https://www.youtube.com/embed/${ejercicio.video}`"
                  title="Video del ejercicio"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div v-else class="video-frame video-frame--empty">
                <q-icon name="smart_display" />
                <span>Video próximamente</span>
              </div>
            </div>

            <!-- Información del ejercicio -->
            <div class="panel-info">
              <div class="panel-info-header">
                <h2 class="exercise-name">{{ ejercicio.nombre }}</h2>
                <span class="exercise-series">{{ ejercicio.series }}</span>
              </div>

              <div v-if="ejercicio.musculo || ejercicio.equipo" class="panel-meta">
                <div v-if="ejercicio.musculo" class="meta-item">
                  <q-icon name="my_location" />
                  <div>
                    <div class="meta-label">Músculo trabajado</div>
                    <div class="meta-value">{{ ejercicio.musculo }}</div>
                  </div>
                </div>
                <div v-if="ejercicio.equipo" class="meta-item">
                  <q-icon name="fitness_center" />
                  <div>
                    <div class="meta-label">Equipo</div>
                    <div class="meta-value">{{ ejercicio.equipo }}</div>
                  </div>
                </div>
              </div>

              <p class="exercise-detail">{{ ejercicio.detalle }}</p>

              <div v-if="ejercicio.consejos && ejercicio.consejos.length" class="panel-tips">
                <div class="tips-title">Consejos clave</div>
                <ul>
                  <li v-for="(tip, idx) in ejercicio.consejos" :key="idx">
                    <q-icon name="check_circle" />
                    <span>{{ tip }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: 'fitness_center' },
  exercises: { type: Array, required: true }
})

// Empieza mostrando el primer ejercicio de la lista
const activeTab = ref(props.exercises[0]?.nombre)
</script>

<style scoped>
.exercise-page {
  padding: 32px 24px 56px;
  background: var(--gym-bg);
  min-height: 100%;
}

.exercise-header {
  margin-bottom: 24px;
}

.exercise-header-top {
  display: flex;
  align-items: center;
  gap: 12px;
}

.exercise-header-icon {
  font-size: 26px;
  color: var(--gym-red);
}

.exercise-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  letter-spacing: 2px;
  color: #f2f2f2;
  margin: 0;
}

.exercise-subtitle {
  color: var(--gym-text-muted);
  font-size: 13px;
  margin: 6px 0 0 38px;
}

.exercise-card {
  background: var(--gym-surface);
  border: 1px solid var(--gym-border);
  border-top: 3px solid var(--gym-red);
  border-radius: 4px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.exercise-tabs {
  background: var(--gym-surface);
  padding: 0 8px;
}

.exercise-tabs :deep(.q-tab) {
  text-transform: none;
  letter-spacing: 0.3px;
  color: var(--gym-text-muted);
  min-height: 52px;
}

.exercise-tabs :deep(.q-tab--active) {
  color: #ffffff;
  font-weight: 600;
}

.exercise-separator {
  background: var(--gym-border);
}

.exercise-panels {
  background: transparent;
}

.exercise-panel {
  padding: 28px 28px 36px;
}

/* --- Layout de dos columnas: video | info --- */
.panel-grid {
  display: grid;
  grid-template-columns: minmax(280px, 460px) 1fr;
  gap: 36px;
  align-items: start;
}

@media (max-width: 860px) {
  .panel-grid {
    grid-template-columns: 1fr;
  }
}

.panel-media {
  position: sticky;
  top: 16px;
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--gym-border);
  background: #000;
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.video-frame--empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--gym-surface-2);
  border: 1px dashed var(--gym-border);
  color: var(--gym-text-muted);
}

.video-frame--empty .q-icon {
  font-size: 32px;
  color: var(--gym-red);
  opacity: 0.7;
}

.video-frame--empty span {
  font-size: 13px;
  letter-spacing: 0.3px;
}

/* --- Columna de información --- */
.panel-info-header {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.exercise-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 26px;
  letter-spacing: 1px;
  color: #f2f2f2;
  margin: 0;
}

.exercise-series {
  display: inline-block;
  background: var(--gym-red);
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 4px 12px;
  border-radius: 3px;
}

.panel-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--gym-border);
}

.meta-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-width: 180px;
}

.meta-item .q-icon {
  color: var(--gym-red);
  font-size: 18px;
  margin-top: 2px;
}

.meta-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--gym-text-muted);
  margin-bottom: 2px;
}

.meta-value {
  font-size: 14px;
  color: #e6e6e6;
}

.exercise-detail {
  color: #c4c4c6;
  line-height: 1.65;
  font-size: 15px;
  margin: 0 0 20px;
  max-width: 560px;
}

.panel-tips {
  background: var(--gym-surface-2);
  border-radius: 4px;
  padding: 16px 18px;
}

.tips-title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--gym-red);
  font-weight: 600;
  margin-bottom: 10px;
}

.panel-tips ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.panel-tips li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #d4d4d6;
  font-size: 14px;
  line-height: 1.5;
}

.panel-tips li .q-icon {
  color: var(--gym-red);
  font-size: 16px;
  margin-top: 2px;
  flex-shrink: 0;
}

@media (max-width: 900px) {

  .exercise-page {
    padding: 24px 18px 40px;
  }

  .exercise-panel {
    padding: 22px;
  }

  .panel-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .panel-media {
    position: static;
  }

  .exercise-detail {
    max-width: 100%;
  }

  .panel-meta {
    gap: 14px;
  }

}


@media (max-width: 600px) {

  .exercise-page {
    padding: 16px 12px 30px;
  }

  .exercise-title {
    font-size: 26px;
  }

  .exercise-subtitle {
    margin-left: 0;
    margin-top: 10px;
    font-size: 12px;
  }

  .exercise-header-top {
    gap: 8px;
  }

  .exercise-header-icon {
    font-size: 22px;
  }

  .exercise-panel {
    padding: 16px;
  }

  .exercise-name {
    font-size: 22px;
  }

  .exercise-detail {
    font-size: 14px;
    line-height: 1.6;
  }

  .meta-item {
    min-width: 100%;
  }

  .panel-meta {
    flex-direction: column;
    gap: 12px;
  }

  .exercise-series {
    font-size: 11px;
    padding: 4px 10px;
  }

  .panel-tips {
    padding: 14px;
  }

  .panel-tips li {
    font-size: 13px;
  }

  .video-frame {
    border-radius: 6px;
  }

}

.exercise-tabs {
  overflow-x: auto;
  white-space: nowrap;
}

.exercise-tabs::-webkit-scrollbar {
  height: 5px;
}

.exercise-tabs::-webkit-scrollbar-thumb {
  background: var(--gym-red);
  border-radius: 10px;
}

.exercise-tabs :deep(.q-tabs__content) {
  flex-wrap: nowrap;
}

.exercise-tabs :deep(.q-tab) {
  flex: 0 0 auto;
}
</style>