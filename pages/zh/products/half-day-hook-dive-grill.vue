<template>
  <div class="product-page">
    <section class="product-hero">
      <img src="https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_5865.JPG" alt="BBQ seafood lunch on deck during half-day fishing and diving adventure in Tasmania" />
      <div class="hero-overlay">
        <div class="container">
          <h1 class="product-title">{{ $t('products.halfDayTitle') }}</h1>
          <p class="product-tagline">{{ $t('products.halfDayDesc') }}</p>
        </div>
      </div>
    </section>

    <div class="container">
      <AppBreadcrumb :items="[{ name: 'Home', path: '/' }, { name: 'Tours', path: '/products' }, { name: $t('products.halfDayTitle'), path: '/products/half-day-hook-dive-grill' }]" />
    </div>

    <UiSection>
      <div class="product-layout">
        <main class="product-main">
          <section class="product-section">
            <h2>{{ $t('products.highlights') }}</h2>
            <ul class="highlights-list">
              <li>Cruise past Hobart's iconic landmarks from the water</li>
              <li>Fishing for reef species — all gear provided</li>
              <li>Scuba diving for lobster and abalone (license required)</li>
              <li>BBQ lunch with fresh oysters, salmon sashimi, wagyu beef</li>
              <li>Try cooking your own catch on the BBQ</li>
              <li>Option to take the helm — under captain's guidance</li>
              <li>Maximum 8 guests for a personalized experience</li>
            </ul>
          </section>

          <section class="product-section">
            <h2>{{ $t('products.itinerary') }}</h2>
            <div class="itinerary">
              <div class="itinerary-item">
                <span class="time">08:30</span>
                <span class="activity">Meet at Margate Marina</span>
              </div>
              <div class="itinerary-item">
                <span class="time">09:00</span>
                <span class="activity">Depart — scenic cruise past Hobart landmarks</span>
              </div>
              <div class="itinerary-item">
                <span class="time">09:30 – 11:30</span>
                <span class="activity">Fishing and diving activities</span>
              </div>
              <div class="itinerary-item">
                <span class="time">11:30 – 13:00</span>
                <span class="activity">BBQ seafood lunch — oysters, salmon, wagyu + cook your catch</span>
              </div>
              <div class="itinerary-item">
                <span class="time">13:00</span>
                <span class="activity">Return to marina</span>
              </div>
            </div>
          </section>

          <section class="product-section">
            <h2>{{ $t('products.includes') }}</h2>
            <div class="includes-grid">
              <div class="include-item">
                <span class="include-icon">🎣</span>
                <span>Fishing gear & bait</span>
              </div>
              <div class="include-item">
                <span class="include-icon">🤿</span>
                <span>Diving equipment</span>
              </div>
              <div class="include-item">
                <span class="include-icon">🍖</span>
                <span>BBQ lunch & refreshments</span>
              </div>
              <div class="include-item">
                <span class="include-icon">👨‍✈️</span>
                <span>Skipper & deckhand</span>
              </div>
            </div>
          </section>
        </main>

        <aside class="product-sidebar">
          <div class="booking-card">
            <div class="price-tag">
              <span class="price-label">{{ $t('products.price') }}</span>
              <span class="price-value">AUD 250 <small>{{ $t('products.perPerson') }}</small></span>
            </div>
            <dl class="product-meta">
              <div class="meta-item">
                <dt>{{ $t('products.duration') }}</dt>
                <dd>~5 {{ $t('products.hours') }}</dd>
              </div>
              <div class="meta-item">
                <dt>{{ $t('products.guests') }}</dt>
                <dd>Up to 8</dd>
              </div>
            </dl>
            <div class="booking-placeholder">
              <p>{{ $t('booking.placeholder') }}</p>
              <a href="#book" class="btn-book" @click.prevent>{{ $t('booking.cta') }}</a>
            </div>
          </div>
        </aside>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { useTravelAgency, useTouristTrip, useBreadcrumbList } = useJsonLd()

useTravelAgency()
useTouristTrip({
  title: 'Half-Day Hook, Dive, and Grill',
  description: 'Half-day fishing, diving and BBQ adventure in Hobart, Tasmania. Cruise past landmarks, fish for reef species, dive for lobster and abalone.',
  slug: 'half-day-hook-dive-grill',
  featuredImage: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_5865.JPG',
  price: 250,
  currency: 'AUD',
})
useBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Tours', path: '/products' },
  { name: 'Half-Day Hook, Dive, and Grill', path: '/products/half-day-hook-dive-grill' },
])

useHead({
  title: `${t('products.halfDayTitle')} | Diver's Fishing Charters Hobart`,
  meta: [
    { name: 'description', content: 'Half-day fishing, diving and BBQ adventure in Hobart Tasmania. Fish reef species, dive for lobster, enjoy fresh seafood BBQ on board.' },
    { property: 'og:title', content: 'Half-Day Hook, Dive, and Grill - Hobart Tasmania' },
    { property: 'og:description', content: 'Half-day fishing, diving and BBQ adventure. Cruise past Hobart landmarks, dive for lobster, enjoy fresh seafood BBQ lunch.' },
    { property: 'og:image', content: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_5865.JPG' },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/products/half-day-hook-dive-grill' }],
})
</script>

<style lang="css" scoped>
.product-hero {
  position: relative;
  height: 50vh;
  min-height: 400px;
  overflow: hidden;

  img {
    @include img-cover;
    object-position: center 50%;
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba($color-gray-900, 0.8) 0%, transparent 60%);
  display: flex;
  align-items: flex-end;
  padding-bottom: 2rem;
}

.product-title {
  color: $color-white;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 0.5rem;
}

.product-tagline {
  color: rgba($color-white, 0.85);
  font-size: $font-size-base;
  max-width: 700px;
}

.product-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 2rem 0;

  @include lg {
    grid-template-columns: 1fr 340px;
  }
}

.product-section {
  margin-bottom: 3rem;

  h2 {
    font-size: $font-size-2xl;
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid $color-gray-200;
  }
}

.highlights-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: $color-gray-50;
    border-radius: $radius-md;
    font-size: $font-size-base;
    color: $color-gray-700;

    &::before {
      content: '✓';
      color: $color-primary;
      font-weight: $font-weight-bold;
      flex-shrink: 0;
    }
  }
}

.itinerary {
  display: flex;
  flex-direction: column;
}

.itinerary-item {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid $color-gray-100;

  &:last-child {
    border-bottom: none;
  }
}

.time {
  font-weight: $font-weight-bold;
  color: $color-primary;
  min-width: 100px;
}

.activity {
  color: $color-gray-700;
}

.includes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @include md {
    grid-template-columns: repeat(4, 1fr);
  }
}

.include-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
  background: $color-gray-50;
  border-radius: $radius-lg;
  gap: 0.5rem;

  .include-icon {
    font-size: 2rem;
  }

  span:last-child {
    font-size: $font-size-sm;
    color: $color-gray-700;
    font-weight: $font-weight-medium;
  }
}

.product-sidebar {
  @include lg {
    position: sticky;
    top: calc(var(--header-height) + 2rem);
    align-self: start;
  }
}

.booking-card {
  background: $color-gray-50;
  border: 1px solid $color-gray-200;
  border-radius: $radius-lg;
  padding: 1.5rem;
}

.price-tag {
  margin-bottom: 1.5rem;

  .price-label {
    display: block;
    font-size: $font-size-sm;
    color: $color-gray-500;
    margin-bottom: 0.25rem;
  }

  .price-value {
    font-size: $font-size-3xl;
    font-weight: $font-weight-bold;
    color: $color-primary;

    small {
      font-size: $font-size-base;
      font-weight: $font-weight-normal;
      color: $color-gray-500;
    }
  }
}

.product-meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid $color-gray-200;

  .meta-item {
    @include flex-between;

    dt {
      color: $color-gray-500;
      font-size: $font-size-sm;
    }

    dd {
      font-weight: $font-weight-semibold;
      color: $color-gray-900;
    }
  }
}

.booking-placeholder {
  text-align: center;

  p {
    font-size: $font-size-sm;
    color: $color-gray-500;
    margin-bottom: 1rem;
  }

  .btn-book {
    @include button-base;
    width: 100%;
    background: $color-primary;
    color: $color-white;

    &:hover {
      background: $color-primary-dark;
      color: $color-white;
    }
  }
}
</style>
