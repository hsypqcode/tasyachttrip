<template>
  <div class="news-page">
    <UiSection :title="$t('news.title')">
      <div class="news-list">
        <article class="news-card">
          <div class="news-image">
            <img src="https://booking-now.oss-accelerate.aliyuncs.com/uploads/1739707844625-59621739706315_.pic.jpg" alt="Southern rock lobster caught in Tasmania waters" loading="lazy" />
          </div>
          <div class="news-content">
            <time class="news-date" datetime="2024-03-15">March 15, 2024</time>
            <h2 class="news-title">
              <NuxtLink :to="localePath('/news/how-to-catch-lobster-tasmania')">How to Catch Lobster in Tasmania</NuxtLink>
            </h2>
            <p class="news-excerpt">A comprehensive guide to catching southern rock lobster (Jasus edwardsii) in Tasmanian waters — regulations, techniques, best spots, and seasonal tips.</p>
            <NuxtLink :to="localePath('/news/how-to-catch-lobster-tasmania')" class="news-link">{{ $t('news.readMore') }} →</NuxtLink>
          </div>
        </article>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
const { useTravelAgency, useBreadcrumbList } = useJsonLd()

useTravelAgency()
useBreadcrumbList([{ name: 'Home', path: '/' }, { name: 'News', path: '/news' }])

useHead({
  title: `${t('news.title')} | Diver's Fishing Charters Hobart`,
  meta: [
    { name: 'description', content: t('seo.newsDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/news' }],
})
</script>

<style lang="css" scoped>
.news-list {
  max-width: 800px;
  margin: 0 auto;
}

.news-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid $color-gray-200;

  @include md {
    grid-template-columns: 280px 1fr;
  }

  &:last-child {
    border-bottom: none;
  }
}

.news-image {
  aspect-ratio: 16/10;
  overflow: hidden;
  border-radius: $radius-lg;

  img {
    @include img-cover;
    transition: transform $transition-base;
  }

  .news-card:hover & img {
    transform: scale(1.05);
  }
}

.news-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-date {
  font-size: $font-size-sm;
  color: $color-gray-400;
  margin-bottom: 0.5rem;
}

.news-title {
  font-size: $font-size-2xl;
  margin-bottom: 0.75rem;

  a {
    color: $color-gray-900;
    transition: color $transition-fast;

    &:hover {
      color: $color-primary;
    }
  }
}

.news-excerpt {
  color: $color-gray-600;
  margin-bottom: 1rem;
  line-height: 1.7;
}

.news-link {
  font-weight: $font-weight-semibold;
  color: $color-primary;
  transition: color $transition-fast;

  &:hover {
    color: $color-primary-dark;
  }
}
</style>
