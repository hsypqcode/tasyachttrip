<template>
  <div class="faq-page">
    <UiSection :title="$t('faq.title')">
      <div class="faq-list">
        <details v-for="(faq, index) in faqs" :key="index" class="faq-item" :open="index === 0">
          <summary class="faq-question">{{ faq.q }}</summary>
          <div class="faq-answer">{{ faq.a }}</div>
        </details>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { useTravelAgency, useBreadcrumbList } = useJsonLd()

useTravelAgency()
useBreadcrumbList([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }])

const faqs = computed(() => [
  { q: 'What should I bring?', a: 'Just bring yourself, sunscreen, and a hat! We provide all fishing gear, bait, diving equipment, and food. Wear comfortable clothes and non-slip shoes.' },
  { q: 'Do I need fishing or diving experience?', a: 'Not at all! Beginners are completely welcome. Our experienced crew will provide hands-on guidance for both fishing and diving activities.' },
  { q: 'What happens if I don\'t catch anything?', a: 'Don\'t worry — our crew works hard to ensure everyone has a great chance of catching fish. We can\'t guarantee a catch (that\'s nature!), but we\'ll do our best to put you on the fish.' },
  { q: 'Is the trip suitable for children?', a: 'Absolutely! Children of all ages are welcome. For young children, fishing from the deck is safe and exciting. We provide appropriately sized fishing gear for kids.' },
  { q: 'What is your cancellation policy?', a: 'Cancellations made 48 hours before the scheduled trip receive a full refund. Cancellations within 48 hours are non-refundable but may be rescheduled subject to availability.' },
  { q: 'Can you accommodate dietary restrictions?', a: 'Yes! Please let us know when booking. We can accommodate vegetarian, gluten-free, and most other dietary requirements for our BBQ lunch.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfer, PayPal, and major credit cards. Payment is required at the time of booking.' },
  { q: 'How do I find the meeting point?', a: 'We meet at Dock 5, Margate Marina — 40 Marina Drive, Barretta TAS 7054. Detailed directions and a map are provided on your booking confirmation.' },
  { q: 'What languages do you speak?', a: 'Our crew speaks English and Chinese (Mandarin). Tours can be conducted in either language or a mix of both.' },
  { q: 'Is tipping customary?', a: 'Tips are always appreciated but never expected. Our crew works hard to give you the best experience possible!' },
])

useHead({
  title: `${t('faq.title')} | Diver's Fishing Charters Hobart`,
  meta: [
    { name: 'description', content: t('seo.faqDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/faq' }],
})
</script>

<style lang="scss" scoped>
.faq-list {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-item {
  border-bottom: 1px solid $color-gray-200;

  &:first-child {
    border-top: 1px solid $color-gray-200;
  }
}

.faq-question {
  padding: 1.25rem 0;
  font-size: $font-size-base;
  font-weight: $font-weight-semibold;
  color: $color-gray-900;
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  &::after {
    content: '+';
    font-size: 1.5rem;
    color: $color-primary;
    transition: transform $transition-fast;
    flex-shrink: 0;
  }

  &:hover {
    color: $color-primary;
  }

  .faq-item[open] &::after {
    transform: rotate(45deg);
  }

  // Remove default marker in webkit
  &::-webkit-details-marker {
    display: none;
  }
}

.faq-answer {
  padding: 0 0 1.25rem;
  font-size: $font-size-base;
  color: $color-gray-600;
  line-height: 1.7;
}
</style>
