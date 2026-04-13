<template>
  <div class="products-page">
    <UiSection :title="$t('products.title')" :subtitle="$t('seo.productsDescription')">
      <div class="products-grid">
        <UiCard v-for="product in products" :key="product.slug" hoverable>
          <template #image>
            <img :src="product.image" :alt="product.imageAlt" loading="lazy" />
          </template>
          <template #title>{{ product.title }}</template>
          <p>{{ product.description }}</p>
          <template #footer>
            <div class="product-footer">
              <span class="product-price">{{ product.price }}</span>
              <NuxtLink :to="localePath(product.path)" class="btn-details">{{ $t('home.learnMore') }} →</NuxtLink>
            </div>
          </template>
        </UiCard>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const products = computed(() => [
  {
    slug: 'sightseeing-fishing-cruise',
    title: t('products.sightseeingTitle'),
    description: t('products.sightseeingDesc'),
    image: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_7232.JPG',
    imageAlt: '客人在3小时霍巴特观光海钓巡游中钓鱼',
    price: 'AUD 150',
    path: '/zh/products/sightseeing-fishing-cruise',
  },
  {
    slug: 'private-charters',
    title: t('products.privateTitle'),
    description: t('products.privateDesc'),
    image: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/WechatIMG2935.jpeg',
    imageAlt: '塔斯马尼亚私人包船',
    price: t('common.contactForPrice'),
    path: '/zh/products/private-charters',
  },
  {
    slug: 'half-day-hook-dive-grill',
    title: t('products.halfDayTitle'),
    description: t('products.halfDayDesc'),
    image: 'https://diandian-1300713889.cos.ap-shanghai.myqcloud.com/IMG_5865.JPG',
    imageAlt: '半日钓鱼潜水烧烤行程中的海鲜烧烤午餐',
    price: 'AUD 250',
    path: '/zh/products/half-day-hook-dive-grill',
  },
])

const { useTravelAgency, useBreadcrumbList } = useJsonLd()
useTravelAgency()
useBreadcrumbList([{ name: '首页', path: '/zh' }, { name: '出海行程', path: '/zh/products' }])

useHead({
  htmlAttrs: { lang: 'zh-CN' },
  title: `${t('nav.products')} | 霍巴特钓鱼潜水船务`,
  meta: [
    { name: 'description', content: t('seo.productsDescription') },
    { property: 'og:title', content: `${t('nav.products')} | 霍巴特钓鱼潜水船务` },
    { property: 'og:description', content: t('seo.productsDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/zh/products' }],
})
</script>

<style lang="css" scoped>
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

.product-footer {
  @include flex-between;
}

.product-price {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  color: $color-primary;
}

.btn-details {
  font-weight: $font-weight-semibold;
  color: $color-primary;
  transition: color $transition-fast;

  &:hover {
    color: $color-primary-dark;
  }
}
</style>
