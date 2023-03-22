<script setup>
import { ref } from 'vue'
import { useZipDataStore } from '@/stores/zipData'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'

const zipText = ref('')
const zipStore = useZipDataStore()
const getDataEvent = () => {
  zipStore.getZipData(zipText)
}
</script>

<template>
  <div class="full-height">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card p-4">
              <form @submit.prevent="getDataEvent">
                <BaseInput
                  v-model="zipText"
                  class="mb-4 text-center"
                  type="text"
                  :label="{ text: 'ZIP', class: 'form-label' }"
                  placeholder="Type tour ZIP code"
                />
                <BaseButton type="submit" color="primary" size="lg" fullWidth>Render</BaseButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
