<template>
  <div :class="['selector', { center }]">
    <button
      v-for="option in options"
      :key="option.id"
      :class="['selector-card', { active: option.id === modelValue }]"
      @click="select(option.id)"
    >
      <div class="card-content">
        <img
          v-if="option.logo"
          :src="getLogoUrl(option.logo)"
          :alt="option.name"
          class="logo"
        />
        <span class="label">
          {{ option[labelKey] }}
        </span>
      </div>
    </button>
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    required: true
  },
  modelValue: {
    type: Number,
    default: null
  },
  labelKey: {
    type: String,
    default: 'name'
  },
  center: {
    type: Boolean,
    default: false
  }
})


const emit = defineEmits(['update:modelValue'])

const select = (id) => {
  emit('update:modelValue', id)
}

/**
 * Resuelve correctamente la ruta del logo dentro de assets
 */
const getLogoUrl = (fileName) => {
  return new URL(`../assets/logos/${fileName}`, import.meta.url).href
}
</script>

<style scoped>
.selector {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.selector-card {
  min-width: 140px;
  min-height: 120px;
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selector-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
}

.selector-card.active {
  border-color: #42b983;
  box-shadow: 0 8px 20px rgba(66, 185, 131, 0.3);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.label {
  font-weight: 600;
  font-size: 14px;
}

.selector {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.selector.center {
  justify-content: center;
}

</style>
