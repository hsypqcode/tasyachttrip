<template>
  <div class="product-page">
    <section class="product-hero">
      <img src="https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/WechatIMG2935.jpeg" alt="Private charter vessel for custom fishing or diving experience in Tasmania" />
      <div class="hero-overlay">
        <div class="container">
          <h1 class="product-title">{{ $t('products.privateTitle') }}</h1>
          <p class="product-tagline">{{ $t('products.privateDesc') }}</p>
        </div>
      </div>
    </section>

    <div class="container">
      <AppBreadcrumb :items="[{ name: 'Home', path: '/' }, { name: 'Tours', path: '/products' }, { name: $t('products.privateTitle'), path: '/products/private-charters' }]" />
    </div>

    <UiSection>
      <div class="product-layout">
        <main class="product-main">
          <section class="product-section">
            <h2>{{ $t('products.highlights') }}</h2>
            <ul class="highlights-list">
              <li>Fully private charter — only your group aboard</li>
              <li>Customizable itinerary based on your preferences</li>
              <li>Up to 10 guests — perfect for families, friends, or corporate events</li>
              <li>Expert skipper and deckhand included</li>
              <li>All fishing and diving equipment available</li>
              <li>Refreshments and catering options</li>
              <li>Commercial insurance — ideal for research or filming</li>
            </ul>
          </section>

          <section class="product-section">
            <h2>Charter Options</h2>
            <div class="options-grid">
              <div class="option-card">
                <h3>🎣 Fishing Enthusiasts</h3>
                <p>Troll for bluefin tuna or challenge Tasmania's deep-sea champion stripey trumpeter. We provide all gear and expert guidance.</p>
              </div>
              <div class="option-card">
                <h3>🤿 Scuba & Free Diving</h3>
                <p>Explore the cold-water coral gardens and giant kelp forests. We supply diving equipment and can arrange dive guide for groups.</p>
              </div>
              <div class="option-card">
                <h3>🏢 Corporate & Research</h3>
                <p>Our vessel accommodates up to 12 passengers with full commercial insurance — perfect for team events, marine research, or underwater filming.</p>
              </div>
            </div>
          </section>
        </main>

        <aside class="product-sidebar">
          <div class="booking-card">
            <div class="price-tag">
              <span class="price-label">{{ $t('products.price') }}</span>
              <span class="price-value">Enquire</span>
            </div>
            <dl class="product-meta">
              <div class="meta-item">
                <dt>{{ $t('products.guests') }}</dt>
                <dd>Up to 10–12</dd>
              </div>
              <div class="meta-item">
                <dt>Custom</dt>
                <dd>Duration & Route</dd>
              </div>
            </dl>
            <div class="booking-placeholder">
              <p>{{ $t('booking.placeholder') }}</p>
              <a href="mailto:support@tasyachttrip.com.au" class="btn-book">{{ $t('contact.send') }}</a>
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
  title: 'Private Charters Booking',
  description: 'Fully customizable private fishing and diving charters in Tasmania. Perfect for groups up to 12.',
  slug: 'private-charters',
  featuredImage: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/WechatIMG2935.jpeg',
})
useBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Tours', path: '/products' },
  { name: 'Private Charters', path: '/products/private-charters' },
])

useHead({
  title: `${t('products.privateTitle')} | Diver's Fishing Charters Hobart`,
  meta: [
    { name: 'description', content: 'Book a private fishing or diving charter in Tasmania. Customizable trips for groups up to 12. Corporate events, research, and filming supported.' },
    { property: 'og:title', content: 'Private Charters Booking - Hobart Tasmania' },
    { property: 'og:description', content: 'Fully customizable private fishing and diving charters in Tasmania for groups up to 12.' },
    { property: 'og:image', content: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/WechatIMG2935.jpeg' },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/products/private-charters' }],
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

.options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @include md {
    grid-template-columns: repeat(3, 1fr);
  }
}

.option-card {
  background: $color-gray-50;
  border-radius: $radius-lg;
  padding: 1.5rem;
  border: 1px solid $color-gray-200;

  h3 {
    font-size: $font-size-lg;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: $font-size-sm;
    color: $color-gray-600;
    margin: 0;
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
