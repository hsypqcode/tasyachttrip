<template>
  <div class="article-page">
    <UiSection>
      <article class="article">
        <header class="article-header">
          <time class="article-date" datetime="2024-03-15">March 15, 2024</time>
          <h1 class="article-title">How to Catch Lobster in Tasmania</h1>
          <p class="article-lead">A comprehensive guide to catching southern rock lobster (Jasus edwardsii) in Tasmanian waters — regulations, techniques, best spots, and seasonal tips.</p>
        </header>

        <figure class="article-hero">
          <img src="https://booking-now.oss-accelerate.aliyuncs.com/uploads/1739707844625-59621739706315_.pic.jpg" alt="Southern rock lobster caught in Tasmania waters during a fishing charter" />
          <figcaption>Southern rock lobster — Tasmania's prized catch</figcaption>
        </figure>

        <div class="article-body">
          <h2>Understanding Tasmanian Lobster Regulations</h2>
          <p>Before you head out, it's essential to understand Tasmania's strict recreational fishing regulations for rock lobster. A valid recreational rock lobster license is required for anyone 14 years and older. The season runs from November 1 to May 31 each year, with minimum size limits strictly enforced to protect breeding stocks.</p>

          <h2>Best Spots Around Hobart</h2>
          <p>The waters around Hobart offer excellent opportunities for both pot fishing and diving. Popular spots include the d'Entrecasteaux Channel near Bruny Island, the coast around Fort Direction, and the deeper waters off South Arm. Each location offers different bottom structures — from rocky reef to kelp forests — where lobsters love to shelter.</p>

          <h2>Fishing Techniques</h2>
          <h3>Pot Fishing</h3>
          <p>Traditional rock lobster pots are baited with fresh fish (salmon frames, squid, or octopus work well) and lowered to the seafloor. Check your pots every 1-2 hours. The key is finding the right depth — lobsters are typically found in 10-50 meters of water near rocky structure.</p>

          <h3>Diving for Lobster</h3>
          <p>For certified scuba divers, hunting lobster by hand is an exhilarating experience. Swim slowly along the bottom, peering into crevices and under overhangs. Lobsters are territorial and will often rear up defensively when approached — giving you a clear shot. Remember: they can deliver a powerful tail flick, so approach from behind the carapace.</p>

          <h2>Cooking Your Catch</h2>
          <p>Nothing beats the taste of freshly caught lobster. The simplest preparation is to boil or steam for 12-15 minutes, then serve with melted butter and a squeeze of lemon. For a true gourmet experience, try splitting the lobster lengthwise and grilling with garlic butter.</p>

          <h2>Join Us on a Charter</h2>
          <p>Don't have your own gear or diving certification? Join Diver's Fishing Charters Hobart for a half-day lobster hunting adventure! We provide all equipment, expert guidance, and you'll even get to cook your catch on board our comfortable vessel.</p>
        </div>

        <footer class="article-footer">
          <NuxtLink :to="localePath('/news')" class="back-link">← {{ $t('news.backToList') }}</NuxtLink>
        </footer>
      </article>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { t } = useI18n()
const { useTravelAgency, useBreadcrumbList } = useJsonLd()

useTravelAgency()
useBreadcrumbList([
  { name: 'Home', path: '/' },
  { name: 'News', path: '/news' },
  { name: 'How to Catch Lobster in Tasmania', path: `/news/${route.params.slug}` },
])

useHead({
  title: 'How to Catch Lobster in Tasmania | Diver\'s Fishing Charters Hobart',
  meta: [
    { name: 'description', content: 'Complete guide to catching southern rock lobster in Tasmania. Learn regulations, best spots, fishing and diving techniques.' },
    { property: 'og:title', content: 'How to Catch Lobster in Tasmania' },
    { property: 'og:description', content: 'Comprehensive guide to catching southern rock lobster in Tasmanian waters — regulations, techniques, and best spots.' },
    { property: 'og:image', content: 'https://booking-now.oss-accelerate.aliyuncs.com/uploads/1739707844625-59621739706315_.pic.jpg' },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/news/how-to-catch-lobster-tasmania' }],
})
</script>

<style lang="scss" scoped>
.article {
  max-width: 760px;
  margin: 0 auto;
}

.article-header {
  text-align: center;
  margin-bottom: 3rem;
}

.article-date {
  display: block;
  font-size: $font-size-sm;
  color: $color-gray-400;
  margin-bottom: 0.75rem;
}

.article-title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: $color-gray-900;
  margin-bottom: 1rem;
}

.article-lead {
  font-size: $font-size-lg;
  color: $color-gray-500;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.article-hero {
  margin: 2rem 0 3rem;

  img {
    width: 100%;
    border-radius: $radius-lg;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  figcaption {
    text-align: center;
    font-size: $font-size-sm;
    color: $color-gray-400;
    margin-top: 0.75rem;
  }
}

.article-body {
  h2 {
    font-size: $font-size-2xl;
    margin: 2.5rem 0 1rem;
    color: $color-gray-900;
  }

  h3 {
    font-size: $font-size-xl;
    margin: 1.5rem 0 0.75rem;
    color: $color-gray-800;
  }

  p {
    font-size: $font-size-base;
    line-height: 1.8;
    color: $color-gray-700;
    margin-bottom: 1.25rem;
  }
}

.article-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid $color-gray-200;
}

.back-link {
  font-weight: $font-weight-semibold;
  color: $color-primary;

  &:hover {
    color: $color-primary-dark;
  }
}
</style>
