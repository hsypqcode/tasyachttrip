<template>
  <header class="app-header" :class="{ 'is-scrolled': isScrolled }">
    <div class="container">
      <div class="header-inner">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="logo" :aria-label="$t('nav.home')">
          <img src="https://www.tasyachttrip.com.au/static/img/fotlogo.9ff09689.png" :alt="$t('jsonLd.travelAgency.name')" width="88" height="57" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop" aria-label="Main navigation">
          <NuxtLink :to="localePath('/')" class="nav-link">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/products')" class="nav-link">{{ $t('nav.products') }}</NuxtLink>
          <NuxtLink :to="localePath('/about')" class="nav-link">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/gallery')" class="nav-link">{{ $t('nav.gallery') }}</NuxtLink>
          <NuxtLink :to="localePath('/news')" class="nav-link">{{ $t('nav.news') }}</NuxtLink>
          <NuxtLink :to="localePath('/faq')" class="nav-link">{{ $t('nav.faq') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="nav-link">{{ $t('nav.contact') }}</NuxtLink>
        </nav>

        <!-- Right Section: Language + Book -->
        <div class="header-right">
          <LanguageSwitcher />
          <a href="#book" class="btn-book" @click.prevent>{{ $t('booking.cta') }}</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="menu-toggle" :aria-expanded="mobileMenuOpen" aria-label="Toggle menu" @click="mobileMenuOpen = !mobileMenuOpen">
          <span class="hamburger" :class="{ 'is-open': mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition name="slide-down">
      <div v-if="mobileMenuOpen" class="nav-mobile">
        <nav aria-label="Mobile navigation">
          <NuxtLink :to="localePath('/')" class="nav-link-mobile" @click="mobileMenuOpen = false">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink :to="localePath('/products')" class="nav-link-mobile" @click="mobileMenuOpen = false">{{ $t('nav.products') }}</NuxtLink>
          <NuxtLink :to="localePath('/about')" class="nav-link-mobile" @click="mobileMenuOpen = false">{{ $t('nav.about') }}</NuxtLink>
          <NuxtLink :to="localePath('/gallery')" class="nav-link-mobile" @click="mobileMenuOpen = false">{{ $t('nav.gallery') }}</NuxtLink>
          <NuxtLink :to="localePath('/news')" class="nav-link-mobile" @click="mobileMenuOpen = false">{{ $t('nav.news') }}</NuxtLink>
          <NuxtLink :to="localePath('/faq')" class="nav-link-mobile" @click="mobileMenuOpen = false">{{ $t('nav.faq') }}</NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="nav-link-mobile" @click="mobileMenuOpen = false">{{ $t('nav.contact') }}</NuxtLink>
          <a href="#book" class="btn-book-mobile" @click.prevent="mobileMenuOpen = false">{{ $t('booking.cta') }}</a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-fixed;
  background: rgba($color-white, 0.95);
  backdrop-filter: blur(8px);
  transition: box-shadow $transition-base;

  &.is-scrolled {
    box-shadow: $shadow-md;
  }
}

.header-inner {
  @include flex-between;
  height: var(--header-height);
}

.logo {
  display: flex;
  align-items: center;

  img {
    height: 48px;
    width: auto;
  }
}

.nav-desktop {
  display: none;
  gap: 0.5rem;

  @include lg {
    display: flex;
  }
}

.nav-link {
  padding: 0.5rem 0.75rem;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-gray-700;
  border-radius: $radius-md;
  transition: all $transition-fast;

  &:hover {
    color: $color-primary;
    background: $color-gray-50;
  }

  &.router-link-active {
    color: $color-primary;
    font-weight: $font-weight-semibold;
  }
}

.header-right {
  display: none;
  align-items: center;
  gap: 1rem;

  @include lg {
    display: flex;
  }
}

.btn-book {
  @include button-base;
  background: $color-primary;
  color: $color-white;
  padding: 0.5rem 1.25rem;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;

  &:hover {
    background: $color-primary-dark;
    color: $color-white;
  }
}

.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;

  @include lg {
    display: none;
  }
}

.hamburger {
  position: relative;
  width: 24px;
  height: 18px;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: $color-gray-800;
    transition: all $transition-fast;

    &:nth-child(1) { top: 0; }
    &:nth-child(2) { top: 50%; transform: translateY(-50%); }
    &:nth-child(3) { bottom: 0; }
  }

  &.is-open {
    span:nth-child(1) {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) {
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    }
  }
}

.nav-mobile {
  background: $color-white;
  border-top: 1px solid $color-gray-200;
  padding: 1rem 0;

  @include lg {
    display: none;
  }
}

.nav-link-mobile {
  display: block;
  padding: 0.875rem 1.5rem;
  font-size: $font-size-base;
  color: $color-gray-700;
  border-bottom: 1px solid $color-gray-100;

  &:hover {
    background: $color-gray-50;
    color: $color-primary;
  }

  &.router-link-active {
    color: $color-primary;
    font-weight: $font-weight-semibold;
  }
}

.btn-book-mobile {
  display: block;
  margin: 1rem 1.5rem;
  @include button-base;
  background: $color-primary;
  color: $color-white;
  text-align: center;

  &:hover {
    background: $color-primary-dark;
    color: $color-white;
  }
}

// Transition
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 600px;
}
</style>
