<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/UI/BaseButton.vue'
import BaseInput from '@/components/UI/BaseInput.vue'

const text = ref('')
</script>

<template>
  <div class="full-height">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <form>
          <BaseInput
            v-model="text"
            class="mb-4"
            type="text"
            :label="{ text: 'Regular', class: 'form-label' }"
            placeholder="Text"
          />
          {{ text }}
          <BaseButton color="primary" size="lg">Test</BaseButton>
        </form>
      </div>
    </div>
  </div>
</template>
