<template>
  <div class="language-switcher">
    <button class="lang-trigger" :aria-expanded="isOpen" aria-haspopup="listbox" @click="isOpen = !isOpen">
      <span class="lang-current">{{ currentLocaleLabel }}</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <Transition name="fade">
      <ul v-if="isOpen" class="lang-dropdown" role="listbox" @click="isOpen = false">
        <li v-for="locale in availableLocales" :key="locale.code" role="option" :aria-selected="locale.code === currentLocale">
          <NuxtLink :to="switchLocalePath(locale.code)" class="lang-option" :class="{ 'is-active': locale.code === currentLocale }">
            {{ locale.name }}
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const isOpen = ref(false)

const currentLocale = computed(() => locale.value)

const currentLocaleLabel = computed(() => {
  const current = availableLocales.value.find(l => l.code === currentLocale.value)
  return current?.name || 'English'
})

const availableLocales = computed(() => {
  return locales.value.filter((l): l is { code: string; name: string; iso: string } => typeof l !== 'string')
})

// Close on click outside
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

function handleClickOutside(e: MouseEvent) {
  const target = e.target as Element
  if (!target.closest('.language-switcher')) {
    isOpen.value = false
  }
}
</script>

<style lang="scss" scoped>
.language-switcher {
  position: relative;
}

.lang-trigger {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-gray-700;
  background: transparent;
  border: 1px solid $color-gray-300;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    border-color: $color-gray-400;
    background: $color-gray-50;
  }
}

.lang-current {
  min-width: 70px;
  text-align: left;
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 140px;
  background: $color-white;
  border: 1px solid $color-gray-200;
  border-radius: $radius-md;
  box-shadow: $shadow-lg;
  overflow: hidden;
  z-index: $z-dropdown;
}

.lang-option {
  display: block;
  padding: 0.625rem 1rem;
  font-size: $font-size-sm;
  color: $color-gray-700;
  transition: all $transition-fast;

  &:hover {
    background: $color-gray-50;
    color: $color-primary;
  }

  &.is-active {
    color: $color-primary;
    font-weight: $font-weight-semibold;
    background: rgba($color-primary, 0.05);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
