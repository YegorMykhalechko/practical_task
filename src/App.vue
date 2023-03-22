<script setup>
import { onMounted } from 'vue'
import axios from 'axios'

import { useAxios } from './composables/useAxios';

import { useLoaderStore } from '@/stores/loader'

import NavBar from './components/NavBar.vue'
import GlobalLoader from './components/Loaders/GlobalLoader.vue'

onMounted(() => {
  useAxios(axios)
})

const store = useLoaderStore()
</script>

<template>
  <GlobalLoader v-if="store.$state.loading" />
  <header>
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
