<template>
  <component :is="component" class="ui-button" :class="[`variant-${variant}`, `size-${size}`, { 'is-loading': loading }]" v-bind="linkProps" :disabled="disabled || loading">
    <span v-if="loading" class="btn-spinner" aria-hidden="true"></span>
    <slot />
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  loading?: boolean
  disabled?: boolean
}>()

const component = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const linkProps = computed(() => {
  if (props.to) return { to: props.to }
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  return {}
})
</script>

<style lang="css" scoped>
.ui-button {
  @include button-base;

  &.variant-primary {
    background: $color-primary;
    color: $color-white;

    &:hover:not(:disabled) {
      background: $color-primary-dark;
      color: $color-white;
    }
  }

  &.variant-secondary {
    background: $color-accent;
    color: $color-white;

    &:hover:not(:disabled) {
      background: darken($color-accent, 8%);
      color: $color-white;
    }
  }

  &.variant-outline {
    background: transparent;
    color: $color-primary;
    border: 2px solid $color-primary;

    &:hover:not(:disabled) {
      background: $color-primary;
      color: $color-white;
    }
  }

  &.variant-ghost {
    background: transparent;
    color: $color-gray-700;

    &:hover:not(:disabled) {
      background: $color-gray-100;
      color: $color-gray-900;
    }
  }

  &.size-sm {
    padding: 0.375rem 0.875rem;
    font-size: $font-size-sm;
  }

  &.size-lg {
    padding: 1rem 2rem;
    font-size: $font-size-lg;
  }

  &.is-loading {
    opacity: 0.8;
    pointer-events: none;
  }
}

.btn-spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  margin-right: 0.5em;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
