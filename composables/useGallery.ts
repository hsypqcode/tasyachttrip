// Gallery filtering and pagination composable
interface GalleryImage {
  id: string
  category: string
  url: string
  thumb: string
  alt: string
  alt_zh: string
  alt_zh_hant: string
  pinned?: boolean
}

interface GalleryCategory {
  id: string
  labelKey: string // i18n key
}

const GALLERY_IMAGES: GalleryImage[] = [
  // Vessel
  { id: 'v-001', category: 'vessel', url: 'https://www.tasyachttrip.com.au/uploads/1765194678868-8d114f1dd52d5b7889660c9c060d026c.JPG', thumb: '', alt: 'Our charter vessel at Hobart harbour', alt_zh: '我们的包船停在霍巴特港', alt_zh_hant: '我們的包船停在霍巴特港' },
  { id: 'v-002', category: 'vessel', url: 'https://www.tasyachttrip.com.au/uploads/1765194222420-DJI_0093.JPG', thumb: '', alt: 'Aerial view of the vessel', alt_zh: '船只航拍图', alt_zh_hant: '船隻航拍圖' },
  { id: 'v-003', category: 'vessel', url: 'https://www.tasyachttrip.com.au/uploads/1765194154308-20bcce82-b212-4feb-bb56-3c0e0565525a.JPG', thumb: '', alt: 'Deck of our fishing charter', alt_zh: '钓鱼船甲板', alt_zh_hant: '釣魚船甲板' },
  // Fishing
  { id: 'f-001', category: 'fishing', url: 'https://www.tasyachttrip.com.au/uploads/1765112816250-b202038b-93ca-4407-b7f6-850f70ac0b80.JPG', thumb: '', alt: 'Guest catching a fish', alt_zh: '客人钓到鱼', alt_zh_hant: '客人釣到魚' },
  { id: 'f-002', category: 'fishing', url: 'https://www.tasyachttrip.com.au/uploads/1765112807563-b7d8779c-fb0b-4e24-812e-f9e2c3d5647a.JPG', thumb: '', alt: 'Fishing rods ready on deck', alt_zh: '甲板上的钓鱼竿', alt_zh_hant: '甲板上的釣魚竿' },
  { id: 'f-003', category: 'fishing', url: 'https://www.tasyachttrip.com.au/uploads/1765112798778-a91578ca-2c28-4d18-a5b7-348e617c2c85.JPG', thumb: '', alt: 'Fishing catch of the day', alt_zh: '当日渔获', alt_zh_hant: '當日漁獲' },
  { id: 'f-004', category: 'fishing', url: 'https://www.tasyachttrip.com.au/uploads/1765112788091-81081762430229_.pic.jpg', thumb: '', alt: 'Bluefin tuna caught on charter', alt_zh: '钓获的蓝鳍金枪鱼', alt_zh_hant: '釣獲的藍鰭金槍魚' },
  { id: 'f-005', category: 'fishing', url: 'https://www.tasyachttrip.com.au/uploads/1765112772605-81061762430225_.pic.jpg', thumb: '', alt: 'Fishing guide helping guest', alt_zh: '钓鱼向导协助客人', alt_zh_hant: '釣魚向導協助客人' },
  { id: 'f-006', category: 'fishing', url: 'https://www.tasyachttrip.com.au/uploads/1765112765094-81031762430219_.pic.jpg', thumb: '', alt: 'Fresh catch being prepared', alt_zh: '新鲜渔获处理中', alt_zh_hant: '新鮮漁獲處理中' },
  // Diving
  { id: 'd-001', category: 'diving', url: 'https://www.tasyachttrip.com.au/uploads/1765112755339-382a4876-bb7d-4254-8f8e-ba18970be265.JPG', thumb: '', alt: 'Scuba diver exploring underwater', alt_zh: '潜水员探索海底世界', alt_zh_hant: '潛水員探索海底世界' },
  { id: 'd-002', category: 'diving', url: 'https://www.tasyachttrip.com.au/uploads/1765112749110-20bcce82-b212-4feb-bb56-3c0e0565525a.JPG', thumb: '', alt: 'Lobster caught during dive', alt_zh: '潜水捕获的龙虾', alt_zh_hant: '潛水捕獲的龍蝦' },
  { id: 'd-003', category: 'diving', url: 'https://www.tasyachttrip.com.au/uploads/1765112740353-9d3b174d-d8ee-4706-bf15-1abe5264f550.JPG', thumb: '', alt: 'Underwater coral formations', alt_zh: '水下珊瑚礁', alt_zh_hant: '水下珊瑚礁' },
  // Nature
  { id: 'n-001', category: 'nature', url: 'https://www.tasyachttrip.com.au/uploads/1765112734425-3c3cfc1d-3103-4991-8bdb-151b0e6fd986.JPG', thumb: '', alt: 'Hobart coastline view from boat', alt_zh: '从船上看霍巴特海岸线', alt_zh_hant: '從船上看霍巴特海岸線' },
  { id: 'n-002', category: 'nature', url: 'https://www.tasyachttrip.com.au/uploads/1765112724442-2f5340d1-e4a7-4a79-8ee0-9ba08070e63f.JPG', thumb: '', alt: 'Seal spotted during tour', alt_zh: '行程中发现的 海豹', alt_zh_hant: '行程中發現的海豹' },
  { id: 'n-003', category: 'nature', url: 'https://www.tasyachttrip.com.au/uploads/1739709625993-WechatIMG5978.jpeg', thumb: '', alt: 'Beautiful sunset over water', alt_zh: '水面上的美丽日落', alt_zh_hant: '水面上的美麗日落' },
  // Happy Moments
  { id: 'h-001', category: 'happy-moments', url: 'https://www.tasyachttrip.com.au/uploads/1739709556714-WechatIMG5975.jpeg', thumb: '', alt: 'Guests enjoying BBQ on deck', alt_zh: '客人在甲板上享用烧烤', alt_zh_hant: '客人在甲板上享用燒烤' },
  { id: 'h-002', category: 'happy-moments', url: 'https://www.tasyachttrip.com.au/uploads/1739708255661-WechatIMG5973.jpeg', thumb: '', alt: 'Happy family on fishing charter', alt_zh: '钓鱼船上开心的一家人', alt_zh_hant: '釣魚船上開心的一家人' },
  { id: 'h-003', category: 'happy-moments', url: 'https://www.tasyachttrip.com.au/uploads/1739707844625-59621739706315_.pic.jpg', thumb: '', alt: 'Guests with their fresh catch', alt_zh: '客人展示渔获', alt_zh_hant: '客人展示漁獲' },
  { id: 'h-004', category: 'happy-moments', url: 'https://www.tasyachttrip.com.au/uploads/1739707822603-59681739706888_.pic.jpg', thumb: '', alt: 'BBQ seafood lunch on board', alt_zh: '船上午餐海鲜烧烤', alt_zh_hant: '船上午餐海鮮燒烤' },
  { id: 'h-005', category: 'happy-moments', url: 'https://www.tasyachttrip.com.au/uploads/1739707721691-59701739707274_.pic.jpg', thumb: '', alt: 'Group photo at sea', alt_zh: '海上集体照', alt_zh_hant: '海上集體照' },
]

const GALLERY_CATEGORIES = [
  { id: 'all', labelKey: 'gallery.all' },
  { id: 'vessel', labelKey: 'gallery.vessel' },
  { id: 'fishing', labelKey: 'gallery.fishing' },
  { id: 'diving', labelKey: 'gallery.diving' },
  { id: 'nature', labelKey: 'gallery.nature' },
  { id: 'happy-moments', labelKey: 'gallery.happyMoments' },
]

const PER_PAGE = 12

export function useGallery() {
  const activeCategory = ref('all')
  const currentPage = ref(1)

  const filteredImages = computed(() => {
    if (activeCategory.value === 'all') {
      return GALLERY_IMAGES
    }
    return GALLERY_IMAGES.filter(img => img.category === activeCategory.value)
  })

  const totalPages = computed(() => Math.ceil(filteredImages.value.length / PER_PAGE))

  const paginatedImages = computed(() => {
    const start = (currentPage.value - 1) * PER_PAGE
    return filteredImages.value.slice(start, start + PER_PAGE)
  })

  function setCategory(category: string) {
    activeCategory.value = category
    currentPage.value = 1
  }

  function setPage(page: number) {
    currentPage.value = page
  }

  return {
    categories: GALLERY_CATEGORIES,
    images: paginatedImages,
    allImages: GALLERY_IMAGES,
    filteredImages,
    activeCategory,
    currentPage,
    totalPages,
    setCategory,
    setPage,
    perPage: PER_PAGE,
  }
}
