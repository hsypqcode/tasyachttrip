// Composable for managing JSON-LD structured data
export function useJsonLd() {
  const schemas = ref<Record<string, any>[]>([])

  function addSchema(type: string, data: object) {
    schemas.value.push({ '@context': 'https://schema.org', '@type': type, ...data })
  }

  function useTravelAgency() {
    addSchema('TravelAgency', {
      name: "Diver's Fishing Charters Hobart",
      url: 'https://www.tasyachttrip.com.au',
      telephone: '+61-498-855-910',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '40 Marina Dr, Barretta',
        addressLocality: 'Margate',
        addressRegion: 'TAS',
        postalCode: '7054',
        addressCountry: 'AU',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -43.0629,
        longitude: 147.3449,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '18:00',
      },
      sameAs: [
        'https://www.facebook.com/share/14ziZmy3s2',
        'https://www.instagram.com/divers_fishing_charters',
      ],
    })
  }

  function useTouristTrip(product: {
    title: string
    description: string
    slug: string
    featuredImage: string
    price?: number
    currency?: string
  }) {
    addSchema('TouristTrip', {
      name: product.title,
      description: product.description,
      url: `https://www.tasyachttrip.com.au/products/${product.slug}`,
      image: product.featuredImage,
      touristType: 'Fishing',
      ...(product.price && {
        offers: {
          '@type': 'Offer',
          price: product.price,
          priceCurrency: product.currency || 'AUD',
          availability: 'https://schema.org/InStock',
        },
      }),
    })
  }

  function useBreadcrumbList(items: Array<{ name: string; path: string }>) {
    addSchema('BreadcrumbList', {
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `https://www.tasyachttrip.com.au${item.path}`,
      })),
    })
  }

  function useWebSite() {
    addSchema('WebSite', {
      '@type': 'WebSite',
      name: "Diver's Fishing Charters Hobart",
      url: 'https://www.tasyachttrip.com.au',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.tasyachttrip.com.au/products?search={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    })
  }

  function reset() {
    schemas.value = []
  }

  return {
    schemas,
    addSchema,
    useTravelAgency,
    useTouristTrip,
    useBreadcrumbList,
    useWebSite,
    reset,
  }
}
