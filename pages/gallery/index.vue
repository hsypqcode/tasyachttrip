<template>
  <div class="gallery-page">
    <UiSection :title="$t('gallery.title')">
      <!-- Category Filter -->
      <div class="gallery-filters" role="group" aria-label="Filter gallery by category">
        <button v-for="cat in categories" :key="cat.id" class="filter-btn" :class="{ 'is-active': activeCategory === cat.id }" @click="setCategory(cat.id)">
          {{ $t(cat.labelKey) }}
        </button>
      </div>

      <!-- Image Grid -->
      <div class="gallery-grid">
        <div v-for="img in paginatedImages" :key="img.id" class="gallery-item" @click="openLightbox(img)">
          <img :src="img.url" :alt="getImageAlt(img)" loading="lazy" />
          <div class="gallery-item-overlay">
            <span class="zoom-icon">🔍</span>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="gallery-pagination">
        <button class="page-btn" :disabled="currentPage === 1" @click="setPage(currentPage - 1)">←</button>
        <button v-for="p in totalPages" :key="p" class="page-btn" :class="{ 'is-active': p === currentPage }" @click="setPage(p)">{{ p }}</button>
        <button class="page-btn" :disabled="currentPage === totalPages" @click="setPage(currentPage + 1)">→</button>
      </div>
    </UiSection>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="lightboxImg" class="lightbox" @click.self="lightboxImg = null">
          <button class="lightbox-close" @click="lightboxImg = null">✕</button>
          <img :src="lightboxImg.url" :alt="getImageAlt(lightboxImg)" />
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { getImageAlt } = useImageAlt()
const { categories, images: paginatedImages, activeCategory, currentPage, totalPages, setCategory, setPage } = useGallery()

const lightboxImg = ref<any>(null)

function openLightbox(img: any) {
  lightboxImg.value = img
}

const { useTravelAgency, useBreadcrumbList } = useJsonLd()
useTravelAgency()
useBreadcrumbList([{ name: 'Home', path: '/' }, { name: 'Gallery', path: '/gallery' }])

useHead({
  title: `${t('gallery.title')} | Diver's Fishing Charters Hobart`,
  meta: [
    { name: 'description', content: t('seo.galleryDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/gallery' }],
})
</script>

<style lang="css" scoped>
.gallery-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.filter-btn {
  padding: 0.5rem 1.25rem;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-gray-600;
  background: $color-gray-100;
  border: 1px solid transparent;
  border-radius: $radius-full;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover {
    color: $color-primary;
    background: rgba($color-primary, 0.08);
  }

  &.is-active {
    color: $color-white;
    background: $color-primary;
    border-color: $color-primary;
  }
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @include md {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  @include lg {
    grid-template-columns: repeat(4, 1fr);
  }
}

.gallery-item {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: $radius-md;
  cursor: pointer;

  img {
    @include img-cover;
    transition: transform $transition-base;
  }

  &:hover img {
    transform: scale(1.08);
  }

  &:hover .gallery-item-overlay {
    opacity: 1;
  }
}

.gallery-item-overlay {
  position: absolute;
  inset: 0;
  background: rgba($color-gray-900, 0.4);
  @include flex-center;
  opacity: 0;
  transition: opacity $transition-base;
}

.zoom-icon {
  font-size: 1.5rem;
}

.gallery-pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
}

.page-btn {
  width: 40px;
  height: 40px;
  @include flex-center;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-gray-600;
  background: $color-gray-100;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all $transition-fast;

  &:hover:not(:disabled) {
    background: $color-gray-200;
  }

  &.is-active {
    background: $color-primary;
    color: $color-white;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba($color-gray-900, 0.92);
  z-index: 1000;
  @include flex-center;
  padding: 2rem;

  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: $radius-md;
  }
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  @include flex-center;
  font-size: 1.5rem;
  color: $color-white;
  background: rgba($color-white, 0.15);
  border-radius: $radius-full;
  cursor: pointer;
  transition: background $transition-fast;

  &:hover {
    background: rgba($color-white, 0.25);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
