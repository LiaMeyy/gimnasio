<template>
  <ExerciseTabsView title="Ejercicios de Pecho" icon="fitness_center" :exercises="ejercicios" />
</template>

<script setup>
import { ref } from 'vue'
import ExerciseTabsView from '../components/ExerciseTabsView.vue'

const ejercicios = ref([
  {
    nombre: 'Press de banca plano',
    detalle: 'El ejercicio base para el desarrollo de fuerza y masa en el pectoral. Con barra, agarre medio, baja la barra controlada hasta el pecho y empuja explosivo.',
    series: '4x10',
    musculo: 'Pectoral mayor, con ayuda de tríceps y deltoide anterior',
    equipo: 'Barra olímpica y banco plano',
    consejos: [
      'Mantén los omóplatos retraídos y pegados al banco durante todo el movimiento',
      'Baja la barra hasta rozar el pecho, sin rebotar',
      'Empuja en línea recta, sin abrir demasiado los codos'
    ],
    video: ''
  },
  {
    nombre: 'Press inclinado',
    detalle: 'Con mancuernas y banco a 30-45°, enfoca el trabajo en la parte superior del pectoral, una zona que suele quedar rezagada.',
    series: '3x12',
    musculo: 'Pectoral mayor, fibras claviculares (superiores)',
    equipo: 'Mancuernas y banco ajustable',
    consejos: [
      'No superes los 45° de inclinación o el trabajo pasa al hombro',
      'Controla la bajada, no dejes caer las mancuernas',
      'Junta las mancuernas arriba sin chocarlas'
    ],
    video: ''
  },
  {
    nombre: 'Aperturas',
    detalle: 'Movimiento de aislamiento con mancuernas y brazos semiflexionados, ideal para trabajar la porción media del pectoral con buen estiramiento.',
    series: '3x15',
    musculo: 'Pectoral mayor, porción media',
    equipo: 'Mancuernas y banco plano',
    consejos: [
      'Mantén una leve flexión de codo fija durante todo el recorrido',
      'Baja solo hasta sentir un estiramiento cómodo, sin forzar el hombro',
      'Piensa en "abrazar un árbol" al subir'
    ],
    video: ''
  },
  {
    nombre: 'Fondos en paralelas',
    detalle: 'Con inclinación del torso hacia adelante para enfatizar el pectoral inferior. Se puede realizar con el peso corporal o en máquina asistida.',
    series: '3x10',
    musculo: 'Pectoral inferior y tríceps',
    equipo: 'Barras paralelas (o máquina asistida)',
    consejos: [
      'Inclina el torso hacia adelante para priorizar pecho sobre tríceps',
      'Baja hasta que el hombro quede a la altura del codo, no más',
      'Evita bloquear los codos de golpe arriba'
    ],
    video: ''
  },
  {
    nombre: 'Press en máquina',
    detalle: 'Movimiento guiado y controlado, útil para aislar el pectoral sin depender tanto de músculos estabilizadores. Muy buena opción para series al fallo.',
    series: '3x12',
    musculo: 'Pectoral mayor',
    equipo: 'Máquina de press de pecho',
    consejos: [
      'Ajusta el asiento para que las manijas queden a la altura del pecho',
      'Usa un rango completo mientras la máquina te lo permita sin dolor',
      'Ideal para series finales al fallo con más seguridad'
    ],
    video: ''
  }
])
</script>