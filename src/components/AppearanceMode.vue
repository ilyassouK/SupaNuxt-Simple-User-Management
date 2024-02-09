
<template >
    <span class="truncate">Dark Mode</span>
    <UToggle v-model="isDark" size="sm" class=" text-gray-400 dark:text-gray-500 ms-auto" />
</template>
<script setup>

const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
