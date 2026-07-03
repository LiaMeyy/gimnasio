<template>
  <ExerciseTabsView title="Ejercicios de Pierna" icon="fitness_center" :exercises="ejercicios" />
</template>

<script setup>
import { ref } from 'vue'
import ExerciseTabsView from '../components/ExerciseTabsView.vue'

const ejercicios = ref([
  {
    nombre: 'Sentadilla con barra',
    detalle: 'El ejercicio rey del tren inferior. Con profundidad completa y buena técnica, desarrolla fuerza y masa en toda la pierna a la vez.',
    series: '4x10',
    musculo: 'Cuádriceps, glúteo e isquiotibiales',
    equipo: 'Barra olímpica, rack y discos',
    consejos: [
      'Mantén el pecho arriba y la espalda neutra durante todo el recorrido',
      'Las rodillas siguen la dirección de los pies, sin colapsar hacia adentro',
      'Baja hasta donde tu movilidad lo permita sin perder la técnica'
    ],
    video: 'qsAkuNORgmk'
  },
  {
    nombre: 'Prensa de piernas',
    detalle: 'Con los pies a la altura de los hombros, permite sumar volumen de entrenamiento con menor exigencia sobre la espalda que la sentadilla libre.',
    series: '4x12',
    musculo: 'Cuádriceps y glúteo',
    equipo: 'Máquina de prensa',
    consejos: [
      'No bloquees las rodillas por completo arriba',
      'Controla la bajada, no dejes que el peso te empuje',
      'Mantén la zona lumbar pegada al respaldo'
    ],
    video: 'xvCynwyNoP4'
  },
  {
    nombre: 'Peso muerto rumano',
    detalle: 'Con piernas semiflexionadas, es el ejercicio de referencia para isquiotibiales y glúteo, trabajando el patrón de bisagra de cadera.',
    series: '3x10',
    musculo: 'Isquiotibiales y glúteo',
    equipo: 'Barra o mancuernas',
    consejos: [
      'La barra se desliza pegada a las piernas todo el recorrido',
      'Empuja la cadera hacia atrás, no bajes doblando solo las rodillas',
      'Mantén la espalda recta, la curva viene de la cadera'
    ],
    video: 'x7W2BOKWWKs'
  },
  {
    nombre: 'Zancadas',
    detalle: 'Alternando piernas, con o sin mancuernas, trabaja fuerza unilateral y equilibrio, algo que los ejercicios bilaterales no desarrollan igual.',
    series: '3x12 por pierna',
    musculo: 'Cuádriceps, glúteo y estabilizadores',
    equipo: 'Mancuernas (opcional)',
    consejos: [
      'La rodilla delantera no debe sobrepasar mucho la punta del pie',
      'Baja hasta que la rodilla trasera casi toque el piso',
      'Mantén el torso erguido durante todo el movimiento'
    ],
    video: 'Xcfs_3DMKlc'
  },
  {
    nombre: 'Extensión de cuádriceps',
    detalle: 'En máquina, es un ejercicio de aislamiento que permite dar el toque final al cuádriceps con total control del rango de movimiento.',
    series: '3x15',
    musculo: 'Cuádriceps (aislado)',
    equipo: 'Máquina de extensión',
    consejos: [
      'Ajusta el respaldo para que la rodilla quede alineada con el eje de la máquina',
      'Sube sin impulso, contrae arriba un segundo',
      'Controla la bajada, no dejes caer el peso'
    ],
    video: 'MpEydcQ1oDw'
  }
])
</script>