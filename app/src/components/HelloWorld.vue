<script setup>
import { defineEmits, ref } from 'vue'

defineProps({
  msg: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const goCentral = () => {
  emit('update:modelValue', 'central') // cambia currentView en el padre
}

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">
      Contador igual a: {{ count }}
    </button>

    <!-- BOTÓN NUEVO -->
    <div style="margin-top: 1rem">
      <button type="button" @click="goCentral">
        Ir a Componentes
      </button>
    </div>
  </div>

  <p class="read-the-docs">
    Click en los logos para aprendes más.
  </p>
</template>





