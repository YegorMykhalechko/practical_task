<script setup>
import { ref, onUnmounted } from 'vue'
import { useZipDataStore } from '@/stores/zipData'
import BaseButton from '@/components/UI/BaseButton.vue'

const zipStore = useZipDataStore()
const data = zipStore.$state.zipData

onUnmounted(() => {
  zipStore.clearZipData()
})
</script>

<template>
  <div class="full-height">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card p-4">
              <h1 class="text-center mb-4">ZIP : {{ data['post code'] }}</h1>
              <div class="mb-3">
                County: 
                <strong>{{ data.country }}</strong>;
              </div>
              <div class="mb-3">
                Country Abbreviation: 
                <strong>{{ data['country abbreviation'] }}</strong>;
              </div>
              <template v-for="place of data.places">
                <div class="mb-3">
                  Place: 
                  <strong>{{ place['place name'] }}</strong>;
                </div>
                <div class="mb-3">
                  State: 
                  <strong>{{ place.state }}</strong>;
                </div>
                <div class="mb-3">
                  State Abbreviation: 
                  <strong>{{ place['state abbreviation'] }}</strong>;
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
