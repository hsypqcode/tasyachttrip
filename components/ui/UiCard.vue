<template>
  <article class="ui-card" :class="{ 'is-hoverable': hoverable }">
    <div v-if="$slots.image" class="card-image">
      <slot name="image" />
    </div>
    <div class="card-body">
      <header v-if="title" class="card-header">
        <h3 class="card-title">{{ title }}</h3>
      </header>
      <div class="card-content">
        <slot />
      </div>
      <footer v-if="$slots.footer" class="card-footer">
        <slot name="footer" />
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  hoverable?: boolean
}>()
</script>

<style lang="css" scoped>
.ui-card {
  @include card;

  &.is-hoverable {
    cursor: pointer;

    &:hover {
      transform: translateY(-4px);
    }
  }
}

.card-image {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;

  img {
    @include img-cover;
    transition: transform $transition-base;
  }

  .is-hoverable:hover & img {
    transform: scale(1.05);
  }
}

.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $color-gray-900;
  margin-bottom: 0.75rem;
}

.card-content {
  color: $color-gray-600;
  font-size: $font-size-base;
}

.card-footer {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid $color-gray-100;
}
</style>
