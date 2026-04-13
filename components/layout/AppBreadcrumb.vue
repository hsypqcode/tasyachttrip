<template>
  <nav aria-label="Breadcrumb" class="breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(item, index) in items" :key="item.path" class="breadcrumb-item">
        <NuxtLink v-if="index < items.length - 1" :to="localePath(item.path)" class="breadcrumb-link">
          {{ item.name }}
        </NuxtLink>
        <span v-else class="breadcrumb-current" aria-current="page">{{ item.name }}</span>
        <span v-if="index < items.length - 1" class="breadcrumb-sep" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  name: string
  path: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()

const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding: 0.75rem 0;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  font-size: $font-size-sm;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.breadcrumb-link {
  color: $color-gray-500;
  transition: color $transition-fast;

  &:hover {
    color: $color-primary;
  }
}

.breadcrumb-current {
  color: $color-gray-700;
  font-weight: $font-weight-medium;
}

.breadcrumb-sep {
  color: $color-gray-400;
  margin: 0 0.125rem;
}
</style>
