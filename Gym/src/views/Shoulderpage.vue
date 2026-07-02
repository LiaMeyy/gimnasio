<template>
  <ExerciseTabsView title="Ejercicios de Hombro" icon="fitness_center" :exercises="ejercicios" />
</template>

<script setup>
import { ref } from 'vue'
import ExerciseTabsView from '../components/ExerciseTabsView.vue'

const ejercicios = ref([
  {
    nombre: 'Press militar',
    detalle: 'De pie o sentado, con barra, es el ejercicio base para el desarrollo general de fuerza y tamaño en el hombro.',
    series: '4x10',
    musculo: 'Deltoide anterior y medio, con ayuda de tríceps',
    equipo: 'Barra',
    consejos: [
      'Aprieta el core para no arquear demasiado la zona lumbar',
      'La barra sube en línea recta, casi rozando la cara',
      'No bloquees los codos con fuerza excesiva arriba'
    ],
    video: ''
  },
  {
    nombre: 'Elevaciones laterales',
    detalle: 'Con mancuernas, es el ejercicio de aislamiento más efectivo para dar ancho al hombro trabajando el deltoide medio.',
    series: '3x15',
    musculo: 'Deltoide medio',
    equipo: 'Mancuernas',
    consejos: [
      'Sube hasta la altura del hombro, no más arriba',
      'Inclina levemente el codo hacia abajo, como si vertieras agua',
      'Evita usar impulso del cuerpo para levantar más peso'
    ],
    video: ''
  },
  {
    nombre: 'Elevaciones frontales',
    detalle: 'Con mancuernas o disco, enfoca el trabajo en la parte frontal del hombro, útil para completar el desarrollo tras el press militar.',
    series: '3x12',
    musculo: 'Deltoide anterior',
    equipo: 'Mancuernas o disco',
    consejos: [
      'Sube en línea recta hasta la altura del hombro',
      'No balancees el torso hacia atrás para ayudarte',
      'Controla la bajada, no dejes caer el peso'
    ],
    video: ''
  },
  {
    nombre: 'Pájaros',
    detalle: 'Inclinado hacia adelante, con elevación posterior, es clave para trabajar la parte trasera del hombro, casi siempre la más débil.',
    series: '3x15',
    musculo: 'Deltoide posterior',
    equipo: 'Mancuernas',
    consejos: [
      'Inclina el torso casi paralelo al piso',
      'Junta los omóplatos al subir los brazos',
      'Usa un peso moderado, es un músculo pequeño y se fatiga rápido'
    ],
    video: ''
  },
  {
    nombre: 'Press Arnold',
    detalle: 'Con mancuernas y rotación de muñeca durante el movimiento, involucra las tres cabezas del deltoide en un solo ejercicio.',
    series: '3x10',
    musculo: 'Deltoide anterior, medio y posterior',
    equipo: 'Mancuernas',
    consejos: [
      'Empieza con las palmas mirando hacia ti y rota al subir',
      'El movimiento es continuo, sin pausas bruscas',
      'Controla bien la rotación de muñeca, es la parte más técnica'
    ],
    video: ''
  }
])
</script>