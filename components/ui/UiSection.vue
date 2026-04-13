<template>
  <section class="ui-section" :class="{ 'is-compact': compact }">
    <div class="container">
      <header v-if="title || subtitle" class="section-header" :class="{ 'has-subtitle': !!subtitle }">
        <h2 v-if="title" class="section-title">{{ title }}</h2>
        <p v-if="subtitle" class="section-subtitle">{{ subtitle }}</p>
      </header>
      <div class="section-body">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  compact?: boolean
}>()
</script>

<style lang="scss" scoped>
.ui-section {
  @include section-padding;

  &.is-compact {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}

.section-header {
  margin-bottom: 2.5rem;
  text-align: center;

  &.has-subtitle {
    margin-bottom: 3rem;
  }
}

.section-title {
  font-size: $font-size-3xl;
  color: $color-gray-900;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: $font-size-lg;
  color: $color-gray-500;
  max-width: 640px;
  margin: 0 auto;
}

.section-body {
  // slot content
}
</style>
