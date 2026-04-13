<template>
  <div class="about-page">
    <UiSection>
      <div class="about-content">
        <h1>{{ $t('about.title') }}</h1>

        <section class="about-section">
          <h2>{{ $t('about.ourStory') }}</h2>
          <p>Diver's Fishing Charters Hobart was founded in 2015 with a mission to share the incredible marine beauty of Tasmania with visitors and locals alike. What started as a passion project has grown into one of Hobart's most trusted recreational fishing and diving operators.</p>
          <p>Based at Margate Marina on the stunning d'Entrecasteaux Channel, we operate our comfortable vessel year-round, offering experiences ranging from relaxed 3-hour harbour cruises to thrilling full-day deep-sea fishing and diving adventures.</p>
        </section>

        <section class="about-section">
          <h2>{{ $t('about.ourTeam') }}</h2>
          <div class="team-grid">
            <div class="team-member">
              <h3>Captain Arnold</h3>
              <p class="member-role">Licensed Skipper</p>
              <p>20+ years of experience navigating Tasmania's waters. Born and raised in Tasmania, Arnold knows every reef, every tide, and every secret spot on the coast.</p>
            </div>
            <div class="team-member">
              <h3>Mary</h3>
              <p class="member-role">Marine Biologist & Diving Guide</p>
              <p>With a marine biology background and PADI divemaster certification, Mary brings the underwater world to life with her expert knowledge of local marine ecosystems.</p>
            </div>
          </div>
        </section>

        <section class="about-section">
          <h2>{{ $t('about.whyChooseUs') }}</h2>
          <ul class="why-list">
            <li>✅ Fully licensed and insured Tasmanian tourism operator</li>
            <li>✅ Small groups — maximum 8 guests per trip for personalized service</li>
            <li>✅ All equipment provided — just bring yourself</li>
            <li>✅ Catch-and-cook experience — the freshest seafood you'll ever taste</li>
            <li>✅ Expert local guides with decades of combined experience</li>
            <li>✅ Comfortable vessel with shaded cabin, toilet, and safety equipment</li>
          </ul>
        </section>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { useTravelAgency, useBreadcrumbList } = useJsonLd()

useTravelAgency()
useBreadcrumbList([{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }])

useHead({
  title: `${t('about.title')} | Diver's Fishing Charters Hobart`,
  meta: [
    { name: 'description', content: t('seo.aboutDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/about' }],
})
</script>

<style lang="css" scoped>
.about-content {
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: clamp(2rem, 4vw, 3rem);
    text-align: center;
    margin-bottom: 3rem;
  }
}

.about-section {
  margin-bottom: 3rem;

  h2 {
    font-size: $font-size-2xl;
    margin-bottom: 1.25rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid $color-gray-200;
  }

  p {
    font-size: $font-size-base;
    line-height: 1.8;
    color: $color-gray-700;
    margin-bottom: 1rem;
  }
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }
}

.team-member {
  background: $color-gray-50;
  border-radius: $radius-lg;
  padding: 1.5rem;
  border: 1px solid $color-gray-200;

  h3 {
    font-size: $font-size-xl;
    margin-bottom: 0.25rem;
  }

  .member-role {
    font-size: $font-size-sm;
    color: $color-primary;
    font-weight: $font-weight-medium;
    margin-bottom: 0.75rem;
  }

  p:last-child {
    font-size: $font-size-sm;
    color: $color-gray-600;
  }
}

.why-list {
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
    padding: 0.875rem 1rem;
    background: $color-gray-50;
    border-radius: $radius-md;
    font-size: $font-size-base;
    color: $color-gray-700;
  }
}
</style>
