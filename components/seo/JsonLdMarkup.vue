<template>
  <component :is="'script'" type="application/ld+json">
    {{ JSON.stringify(schemas) }}
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  schemas: Record<string, any>[]
}>()
</script>
