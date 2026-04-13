export default defineEventHandler(async (event) => {
  const baseUrl = 'https://www.tasyachttrip.com.au'

  const staticRoutes = [
    { loc: `${baseUrl}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${baseUrl}/products`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/products/sightseeing-fishing-cruise`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/products/private-charters`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/products/half-day-hook-dive-grill`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/about`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/gallery`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/news`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/news/how-to-catch-lobster-tasmania`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/contact`, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/faq`, changefreq: 'monthly', priority: '0.6' },
    // Chinese variants
    { loc: `${baseUrl}/zh`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/zh/products`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/zh/products/sightseeing-fishing-cruise`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/zh/products/private-charters`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/zh/products/half-day-hook-dive-grill`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/zh/about`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/zh/gallery`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/zh/news`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/zh/news/how-to-catch-lobster-tasmania`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/zh/contact`, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/zh/faq`, changefreq: 'monthly', priority: '0.6' },
    // Traditional Chinese
    { loc: `${baseUrl}/zh-hant`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/zh-hant/products`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/zh-hant/products/sightseeing-fishing-cruise`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/zh-hant/products/private-charters`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/zh-hant/products/half-day-hook-dive-grill`, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/zh-hant/about`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/zh-hant/gallery`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/zh-hant/news`, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/zh-hant/news/how-to-catch-lobster-tasmania`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/zh-hant/contact`, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/zh-hant/faq`, changefreq: 'monthly', priority: '0.6' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticRoutes.map(r => `  <url>
    <loc>${r.loc}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${r.loc.replace('/zh/', '/').replace('/zh-hant/', '/')}"/>
    <xhtml:link rel="alternate" hreflang="zh-CN" href="${r.loc.replace('/zh-hant/', '/zh/')}"/>
    <xhtml:link rel="alternate" hreflang="zh-TW" href="${r.loc.replace('/zh/', '/zh-hant/')}"/>
  </url>`).join('\n')}
</urlset>`

  setHeader(event, 'Content-Type', 'application/xml')
  return xml
})
