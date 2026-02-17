<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import OptionSelector from './components/OptionSelector.vue'
import carsData from './assets/cars.json'

const brands = ref([])
const selectedBrandId = ref(null)
const selectedModelId = ref(null)

onMounted(() => {
    brands.value = carsData
})

const selectedBrand = computed(() =>
    brands.value.find(b => b.id === selectedBrandId.value)
)

const selectedModel = computed(() =>
    selectedBrand.value?.models.find(m => m.id === selectedModelId.value)
)

// Resetear modelo al cambiar marca
watch(selectedBrandId, () => {
    selectedModelId.value = null
})
</script>

<template>
  <div>
    <h1>Selector de Coches</h1>

    <!-- Selector de Marcas -->
    <h2>Marcas</h2>
    <OptionSelector
        :options="brands"
        v-model="selectedBrandId"
    />

    <!-- Selector de Modelos -->
    <div v-if="selectedBrand">
        <h2>Seleccione un modelo de {{ selectedBrand.name }}</h2>

        <OptionSelector
            :options="selectedBrand.models"
            v-model="selectedModelId"
            center
        />
    </div>

    <!-- Resultado -->
    <div v-if="selectedModel">
        <h3>
            Has seleccionado:
            {{ selectedBrand.name }} - {{ selectedModel.name }}
        </h3>
    </div>

  </div>
</template>
