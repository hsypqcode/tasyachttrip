<template>
  <div class="product-page">
    <!-- Hero -->
    <section class="product-hero">
      <img src="https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_7232.JPG" alt="Guests enjoying 3-hour sightseeing fishing cruise in Hobart, Tasmania" />
      <div class="hero-overlay">
        <div class="container">
          <h1 class="product-title">{{ $t('products.sightseeingTitle') }}</h1>
          <p class="product-tagline">{{ $t('products.sightseeingDesc') }}</p>
        </div>
      </div>
    </section>

    <div class="container">
      <AppBreadcrumb :items="[{ name: 'Home', path: '/' }, { name: 'Tours', path: '/products' }, { name: $t('products.sightseeingTitle'), path: '/products/sightseeing-fishing-cruise' }]" />
    </div>

    <!-- Product Details -->
    <UiSection>
      <div class="product-layout">
        <main class="product-main">
          <!-- Highlights -->
          <section class="product-section">
            <h2>{{ $t('products.highlights') }}</h2>
            <ul class="highlights-list">
              <li>3 hours of scenic Hobart harbour cruise</li>
              <li>All fishing gear provided — beginners welcome!</li>
              <li>Expert local fishing guidance on board</li>
              <li>Fresh fruit and refreshments included</li>
              <li>Opportunity to cook your own catch</li>
              <li>Wildlife spotting — seals, dolphins, seabirds</li>
            </ul>
          </section>

          <!-- Itinerary -->
          <section class="product-section">
            <h2>{{ $t('products.itinerary') }}</h2>
            <div class="itinerary">
              <div class="itinerary-item">
                <span class="time">09:00</span>
                <span class="activity">Meet at Margate Marina, Dock 5</span>
              </div>
              <div class="itinerary-item">
                <span class="time">09:30</span>
                <span class="activity">Depart for fishing grounds</span>
              </div>
              <div class="itinerary-item">
                <span class="time">10:00 – 12:00</span>
                <span class="activity">Fishing and wildlife observation</span>
              </div>
              <div class="itinerary-item">
                <span class="time">12:00 – 12:30</span>
                <span class="activity">Cook your catch — fresh BBQ lunch on board</span>
              </div>
              <div class="itinerary-item">
                <span class="time">12:30</span>
                <span class="activity">Return to marina</span>
              </div>
            </div>
          </section>

          <!-- Gallery -->
          <section class="product-section">
            <h2>{{ $t('gallery.title') }}</h2>
            <div class="mini-gallery">
              <img v-for="img in galleryImages" :key="img.id" :src="img.url" :alt="img.alt" loading="lazy" />
            </div>
          </section>
        </main>

        <!-- Sidebar -->
        <aside class="product-sidebar">
          <div class="booking-card">
            <div class="price-tag">
              <span class="price-label">{{ $t('products.price') }}</span>
              <span class="price-value">AUD 150 <small>{{ $t('products.perPerson') }}</small></span>
            </div>
            <dl class="product-meta">
              <div class="meta-item">
                <dt>{{ $t('products.duration') }}</dt>
                <dd>3 {{ $t('products.hours') }}</dd>
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
const localePath = useLocalePath()
const { t } = useI18n()
const { useTravelAgency, useTouristTrip, useBreadcrumbList } = useJsonLd()

const product = {
  title: '3-Hour Sightseeing Fishing Cruise',
  description: 'Join our 3-hour sightseeing fishing cruise to experience Hobart\'s beauty from the water. Enjoy fresh fruit and music in our comfortable cabin, or head to the deck to fish and observe wildlife.',
  slug: 'sightseeing-fishing-cruise',
  featuredImage: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_7232.JPG',
  price: 150,
  currency: 'AUD',
}

useTravelAgency()
useTouristTrip(product)
useBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'Tours', path: '/products' },
  { name: '3-Hour Sightseeing Fishing Cruise', path: '/products/sightseeing-fishing-cruise' },
])

const galleryImages = [
  { id: 'g1', url: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_7232.JPG', alt: 'Fishing charter vessel at Hobart harbour' },
  { id: 'g2', url: 'https://booking-now.oss-accelerate.aliyuncs.com/uploads/1739707721691-59701739707274_.pic.jpg', alt: 'Group enjoying fishing cruise' },
  { id: 'g3', url: 'https://booking-now.oss-accelerate.aliyuncs.com/uploads/1739707822603-59681739706888_.pic.jpg', alt: 'Fresh BBQ seafood lunch on board' },
  { id: 'g4', url: 'https://booking-now.oss-accelerate.aliyuncs.com/uploads/1739708255661-WechatIMG5973.jpeg', alt: 'Happy guests with fishing catch' },
]

useHead({
  title: `${t('products.sightseeingTitle')} | Diver's Fishing Charters Hobart`,
  meta: [
    { name: 'description', content: 'Join our 3-hour sightseeing fishing cruise in Hobart. All gear included, beginners welcome. Fresh fruit, BBQ lunch, and wildlife spotting. Book now!' },
    { property: 'og:title', content: '3-Hour Sightseeing Fishing Cruise - Hobart Tasmania' },
    { property: 'og:description', content: 'Experience Hobart from the water. 3-hour fishing cruise with all gear, BBQ lunch and wildlife spotting.' },
    { property: 'og:image', content: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_7232.JPG' },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/products/sightseeing-fishing-cruise' }],
})
</script>

<style lang="scss" scoped>
.product-hero {
  position: relative;
  height: 50vh;
  min-height: 400px;
  overflow: hidden;

  img {
    @include img-cover;
    object-position: center 35%;
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
  max-width: 600px;
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

  li {
    display: flex;
    align-items: center;
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
    }
  }
}

.itinerary {
  display: flex;
  flex-direction: column;
  gap: 0;
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

.mini-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @include md {
    grid-template-columns: repeat(4, 1fr);
  }

  img {
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: $radius-md;
    width: 100%;
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
