<script setup>
import { ref, onUnmounted } from 'vue'
import { useZipDataStore } from '@/stores/zipData'
import BaseButton from '@/components/UI/BaseButton.vue'

const zipStore = useZipDataStore()

onUnmounted(() => {
  zipStore.clearZipData()
})
</script>

<template>
  <h1>{{ zipStore.$state.zipData }}</h1>
</template>
