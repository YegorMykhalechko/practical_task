<script setup>
import { ref } from 'vue'
import { useZipDataStore } from '@/stores/zipData'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'
import { useRouter } from 'vue-router'
import { getIpData } from '@/api/ip'

const zipText = ref('')
const zipStore = useZipDataStore()
const isInputError = ref(false)
const router = useRouter()
const isValidUSZip = (sZip) => {
  return /^\d{5}(-\d{4})?$/.test(sZip)
}
const getDataEvent = async () => {
  console.log(navigator.userAgentData)
  const res = await getIpData()
  console.log(res.data)
  if (isValidUSZip(zipText.value)) {
    zipStore.getZipData(zipText)
  } else {
    isInputError.value = true
  }
}
const checkIsValid = () => {
  isInputError.value = !isValidUSZip(zipText.value)
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
