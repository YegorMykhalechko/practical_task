<script setup>
defineProps({
  color: {
    validator(color) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "danger",
        "error",
        "light",
        "white",
        "dark",
        "none",
      ].includes(color);
    },
    default: "",
  },
  size: {
    validator(size) {
      return ["sm", "md", "lg"].includes(size);
    },
    default: "md",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const getClasses = (color, size, fullWidth, disabled) => {
  let colorValue, sizeValue, fullWidthValue, activeValue;

  colorValue = `btn-${color}`;

  sizeValue = size && `btn-${size}`;

  fullWidthValue = fullWidth && `w-100`;

  activeValue = disabled && `disabled`;

  return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`;
}
</script>
<template>
  <button
    class="btn"
    :class="getClasses(color, size, fullWidth, disabled)"
  >
    <slot />
  </button>
</template>