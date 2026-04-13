<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <img src="https://www.tasyachttrip.com.au/static/img/fotlogo.9ff09689.png" :alt="$t('jsonLd.travelAgency.name')" class="footer-logo" width="80" height="52" />
          <p class="footer-tagline">{{ $t('footer.tagline') }}</p>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h3 class="footer-heading">{{ $t('footer.quickLinks') }}</h3>
          <nav aria-label="Footer navigation">
            <NuxtLink :to="localePath('/products')">{{ $t('nav.products') }}</NuxtLink>
            <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
            <NuxtLink :to="localePath('/gallery')">{{ $t('nav.gallery') }}</NuxtLink>
            <NuxtLink :to="localePath('/news')">{{ $t('nav.news') }}</NuxtLink>
            <NuxtLink :to="localePath('/faq')">{{ $t('nav.faq') }}</NuxtLink>
            <NuxtLink :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h3 class="footer-heading">{{ $t('footer.contactInfo') }}</h3>
          <address class="footer-address">
            <p>{{ $t('footer.address') }}</p>
            <p>
              <a :href="'tel:' + $t('footer.phone').replace(/\s/g, '')">{{ $t('footer.phone') }}</a>
            </p>
            <p>
              <a :href="'mailto:' + $t('footer.email')">{{ $t('footer.email') }}</a>
            </p>
            <p>
              <a :href="'https://wa.me/61498855910'" target="_blank" rel="noopener">{{ $t('footer.whatsapp') }}</a>
            </p>
          </address>
        </div>

        <!-- Follow Us + Map -->
        <div class="footer-section">
          <h3 class="footer-heading">{{ $t('footer.followUs') }}</h3>
          <div class="social-links">
            <a href="https://www.facebook.com/share/14ziZmy3s2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/divers_fishing_charters/profilecard/?igsh=MWE3a2RpcTJ6NHdsMQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
          <div class="footer-map">
            <img src="https://www.tasyachttrip.com.au/static/img/map.4cc83326.png" alt="Map location at Margate Marina" width="148" height="112" />
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="scss" scoped>
.app-footer {
  background: $color-gray-900;
  color: $color-gray-300;
  padding: 4rem 0 2rem;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }

  @include lg {
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
  }
}

.footer-brand {
  .footer-logo {
    height: 48px;
    width: auto;
    margin-bottom: 1rem;
    filter: brightness(0) invert(1);
    opacity: 0.9;
  }

  .footer-tagline {
    font-size: $font-size-sm;
    color: $color-gray-400;
    margin: 0;
  }
}

.footer-section {
  .footer-heading {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-white;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      font-size: $font-size-sm;
      color: $color-gray-400;
      transition: color $transition-fast;

      &:hover {
        color: $color-white;
      }
    }
  }
}

.footer-address {
  font-style: normal;
  font-size: $font-size-sm;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    margin: 0;
    color: $color-gray-400;
  }

  a {
    color: $color-gray-400;
    transition: color $transition-fast;

    &:hover {
      color: $color-white;
    }
  }
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  a {
    color: $color-gray-400;
    transition: color $transition-fast;

    &:hover {
      color: $color-white;
    }
  }
}

.footer-map {
  img {
    border-radius: $radius-md;
    opacity: 0.7;
  }
}

.footer-bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid $color-gray-800;
  text-align: center;

  p {
    font-size: $font-size-sm;
    color: $color-gray-500;
    margin: 0;
  }
}
</style>
