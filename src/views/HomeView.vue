<script setup>
import { ref } from 'vue'
//Stores
import { useZipDataStore } from '@/stores/zipData'
import { useUserDataStore } from '@/stores/userData'
//Components
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'

const zipText = ref('')
const isInputError = ref(false)

const zipStore = useZipDataStore()
const userDataStore = useUserDataStore()

const isValidUSZip = (sZip) => {
  return /^\d{5}(-\d{4})?$/.test(sZip)
}
const checkIsValid = () => {
  isInputError.value = !isValidUSZip(zipText.value)
}

const getDataEvent = async () => {
  if (isValidUSZip(zipText.value)) {
    userDataStore.getUserData()
    zipStore.getZipData(zipText)
  } else {
    isInputError.value = true
  }
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
                  :error="isInputError"
                  :errorMessage="'United States ZIP codes are five numerical digits long.'"
                  @input="checkIsValid"
                />
                <BaseButton
                  type="submit"
                  color="primary"
                  size="lg"
                  fullWidth
                  :disabled="isInputError"
                  >Render</BaseButton
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
