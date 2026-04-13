<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <img src="https://booking-now.oss-accelerate.aliyuncs.com/uploads/1756394954077-65781745732245_.pic.jpg" alt="Hobart harbour scenic view from our fishing charter vessel" />
      </div>
      <div class="hero-content">
        <div class="container">
          <h1 class="hero-title">{{ $t('home.heroTitle') }}</h1>
          <p class="hero-subtitle">{{ $t('home.heroSubtitle') }}</p>
          <div class="hero-actions">
            <a href="#book" class="btn btn-primary btn-lg" @click.prevent>{{ $t('home.bookNow') }}</a>
            <NuxtLink :to="localePath('/products')" class="btn btn-outline btn-lg">{{ $t('home.learnMore') }}</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <UiSection :title="$t('home.featuredTours')">
      <div class="products-grid">
        <!-- Product 1 -->
        <UiCard hoverable>
          <template #image>
            <img src="https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_7232.JPG" alt="Guests fishing on deck during 3-hour Hobart sightseeing cruise" loading="lazy" />
          </template>
          <template #title>{{ $t('products.sightseeingTitle') }}</template>
          <p>{{ $t('products.sightseeingDesc') }}</p>
          <template #footer>
            <NuxtLink :to="localePath('/products/sightseeing-fishing-cruise')" class="btn-link">{{ $t('home.learnMore') }} →</NuxtLink>
          </template>
        </UiCard>

        <!-- Product 2 -->
        <UiCard hoverable>
          <template #image>
            <img src="https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/WechatIMG2935.jpeg" alt="Private charter boat for custom fishing or diving experience in Tasmania" loading="lazy" />
          </template>
          <template #title>{{ $t('products.privateTitle') }}</template>
          <p>{{ $t('products.privateDesc') }}</p>
          <template #footer>
            <NuxtLink :to="localePath('/products/private-charters')" class="btn-link">{{ $t('home.learnMore') }} →</NuxtLink>
          </template>
        </UiCard>

        <!-- Product 3 -->
        <UiCard hoverable>
          <template #image>
            <img src="https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_5865.JPG" alt="BBQ seafood lunch on deck during half-day fishing and diving adventure" loading="lazy" />
          </template>
          <template #title>{{ $t('products.halfDayTitle') }}</template>
          <p>{{ $t('products.halfDayDesc') }}</p>
          <template #footer>
            <NuxtLink :to="localePath('/products/half-day-hook-dive-grill')" class="btn-link">{{ $t('home.learnMore') }} →</NuxtLink>
          </template>
        </UiCard>
      </div>
    </UiSection>

    <!-- Booking Banner -->
    <section id="book" class="booking-banner">
      <div class="container">
        <div class="booking-content">
          <h2>{{ $t('booking.cta') }}</h2>
          <p>{{ $t('booking.placeholder') }}</p>
          <p class="booking-note">{{ $t('booking.placeholderNote') }}</p>
          <div class="booking-contact">
            <a href="mailto:support@tasyachttrip.com.au" class="contact-link">support@tasyachttrip.com.au</a>
            <a href="https://wa.me/61498855910" class="contact-link" target="_blank" rel="noopener">WhatsApp</a>
            <a href="tel:+61498855910" class="contact-link">+61 498 855 910 Arnold</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const { useTravelAgency, useWebSite, useBreadcrumbList, schemas } = useJsonLd()

useTravelAgency()
useWebSite()
useBreadcrumbList([
  { name: 'Home', path: '/' },
])

useHead({
  title: t('seo.defaultTitle'),
  meta: [
    { name: 'description', content: t('seo.homeDescription') },
    { property: 'og:title', content: t('seo.defaultTitle') },
    { property: 'og:description', content: t('seo.homeDescription') },
    { property: 'og:url', content: 'https://www.tasyachttrip.com.au' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.tasyachttrip.com.au' },
  ],
})
</script>

<style lang="css" scoped>
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    @include img-cover;
    object-position: center 40%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba($color-gray-900, 0.7) 0%, rgba($color-gray-900, 0.3) 100%);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 6rem 0 4rem;
  width: 100%;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: $color-white;
  max-width: 700px;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba($color-white, 0.9);
  max-width: 560px;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  @include button-base;
  text-decoration: none;
}

.btn-primary {
  background: $color-primary;
  color: $color-white;

  &:hover {
    background: $color-primary-dark;
    color: $color-white;
  }
}

.btn-outline {
  background: transparent;
  color: $color-white;
  border: 2px solid $color-white;

  &:hover {
    background: rgba($color-white, 0.15);
    color: $color-white;
  }
}

.btn-lg {
  padding: 0.875rem 1.75rem;
  font-size: $font-size-base;
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }

  @include lg {
    grid-template-columns: repeat(3, 1fr);
  }
}

.btn-link {
  display: inline-block;
  color: $color-primary;
  font-weight: $font-weight-semibold;
  transition: color $transition-fast;

  &:hover {
    color: $color-primary-dark;
  }
}

.booking-banner {
  background: $color-primary;
  padding: 4rem 0;
  text-align: center;
}

.booking-content {
  h2 {
    color: $color-white;
    font-size: $font-size-3xl;
    margin-bottom: 0.75rem;
  }

  p {
    color: rgba($color-white, 0.85);
    font-size: $font-size-lg;
    margin-bottom: 0.5rem;
  }

  .booking-note {
    font-size: $font-size-sm;
    color: rgba($color-white, 0.65);
    margin-bottom: 1.5rem;
  }
}

.booking-contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.contact-link {
  color: $color-white;
  font-weight: $font-weight-semibold;
  padding: 0.375rem 0.75rem;
  border: 1px solid rgba($color-white, 0.4);
  border-radius: $radius-md;
  transition: all $transition-fast;

  &:hover {
    background: rgba($color-white, 0.15);
    color: $color-white;
    border-color: $color-white;
  }
}
</style>
