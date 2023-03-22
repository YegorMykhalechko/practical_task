<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: [String, Object],
    text: String,
    class: String,
    default: () => ({
      class: ''
    })
  },
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md'
  },
  error: {
    type: Boolean,
    default: false
  },
  success: {
    type: Boolean,
    default: false
  },
  isRequired: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    default: ''
  }
})
const emit = defineEmits(['update:modelValue'])

const updateInput = (event) => {
  emit('update:modelValue', event.target.value)
}

const getClasses = (size, success, error) => {
  let sizeValue, isValidValue

  sizeValue = size && `form-control-${size}`

  if (error) {
    isValidValue = 'is-invalid'
  } else if (success) {
    isValidValue = 'is-valid'
  } else {
    isValidValue = ''
  }

  return `${sizeValue} ${isValidValue}`
}
</script>
<template>
  <div>
    <label v-if="label" :class="label.class">
      {{ typeof label == 'string' ? label : label.text }}
    </label>
    <input
      :id="id"
      :type="type"
      class="form-control"
      :class="[getClasses(size, success, error), inputClass]"
      :value="modelValue"
      :placeholder="placeholder"
      :isRequired="isRequired"
      :disabled="isDisabled"
      @input="updateInput"
    />
  </div>
</template>
