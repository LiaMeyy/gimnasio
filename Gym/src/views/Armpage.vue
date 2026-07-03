<template>
  <ExerciseTabsView title="Ejercicios de Brazo" icon="fitness_center" :exercises="ejercicios" />
</template>

<script setup>
import { ref } from 'vue'
import ExerciseTabsView from '../components/ExerciseTabsView.vue'

const ejercicios = ref([
  {
    nombre: 'Curl con barra',
    detalle: 'Ejercicio base para el bíceps. Con agarre supino, permite mover más carga que con mancuernas y desarrollar volumen general en el brazo.',
    series: '4x10',
    musculo: 'Bíceps braquial',
    equipo: 'Barra recta o barra Z',
    consejos: [
      'Evita balancear el torso para generar impulso',
      'Sube contrayendo fuerte, controla la bajada 2-3 segundos',
      'Mantén los codos fijos pegados al torso'
    ],
    video: 'PY9QylAMtyE&t=59s'
  },
  {
    nombre: 'Curl martillo',
    detalle: 'Con mancuernas y agarre neutro (palmas mirándose), suma trabajo al braquial y al antebrazo, dando más grosor al brazo.',
    series: '3x12',
    musculo: 'Braquial y braquiorradial (antebrazo)',
    equipo: 'Mancuernas',
    consejos: [
      'Agarre neutro durante todo el movimiento',
      'Alterna o trabaja ambos brazos a la vez según tu nivel',
      'No dejes que la muñeca se doble hacia atrás'
    ],
    video: 'RHdacbwKbTo'
  },
  {
    nombre: 'Press francés',
    detalle: 'Con barra Z y acostado en banco, es de los mejores ejercicios para la cabeza larga del tríceps, la que más aporta a su volumen.',
    series: '3x12',
    musculo: 'Tríceps, cabeza larga',
    equipo: 'Barra Z y banco plano',
    consejos: [
      'Los codos apuntan al techo y se mantienen fijos',
      'Baja la barra hacia la frente con control, no hacia el cuello',
      'Evita abrir los codos hacia los lados'
    ],
    video: 'iXY0jm665GQ'
  },
  {
    nombre: 'Extensión en polea',
    detalle: 'Con cuerda en polea alta, es un ejercicio de aislamiento muy seguro para trabajar las tres cabezas del tríceps al final de la rutina.',
    series: '3x15',
    musculo: 'Tríceps (las tres cabezas)',
    equipo: 'Polea alta con cuerda',
    consejos: [
      'Pega los codos al torso y que no se muevan',
      'Al final del movimiento separa un poco la cuerda para contraer más',
      'No uses el peso del cuerpo para empujar'
    ],
    video: 'OlZnLb3S8pk'
  },
  {
    nombre: 'Curl concentrado',
    detalle: 'Un brazo a la vez, apoyado en el muslo, es el ejercicio ideal para máxima concentración y forma del bíceps al final del entrenamiento.',
    series: '3x12',
    musculo: 'Bíceps braquial (pico del bíceps)',
    equipo: 'Mancuerna y banco',
    consejos: [
      'Apoya el codo en la cara interna del muslo',
      'Sube lento sin usar impulso del hombro',
      'Aprieta arriba 1 segundo antes de bajar'
    ],
    video: '8B0mY3gknoc'
  }
])
</script>