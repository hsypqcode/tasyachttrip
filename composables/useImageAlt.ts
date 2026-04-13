// Composable for managing image alt text across locales
interface ImageWithAlt {
  url: string
  alt?: string
  alt_en?: string
  alt_zh?: string
  alt_zh_hant?: string
}

export function useImageAlt() {
  const { locale } = useI18n()

  function getImageAlt(image: ImageWithAlt): string {
    switch (locale.value) {
      case 'zh':
        return image.alt_zh || image.alt || ''
      case 'zh-hant':
        return image.alt_zh_hant || image.alt || ''
      default:
        return image.alt || ''
    }
  }

  function getGalleryAlt(image: ImageWithAlt, fallbackContext: string): string {
    const alt = getImageAlt(image)
    if (alt) return alt
    return fallbackContext
  }

  return {
    getImageAlt,
    getGalleryAlt,
  }
}
